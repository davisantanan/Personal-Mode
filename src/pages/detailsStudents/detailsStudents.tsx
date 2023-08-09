import BaseLayout from "../../layouts/baseLayoutPage";
import DetailsTools from "../../components/detailsTools/detailsTools";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { studentsService } from "../../services/studentsService/studentsService";


function DetailsStudents(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [studentName, setStudentName] = useState('');

    useEffect(() => {
      if(id !== 'new'){
        setIsLoading(true);
        studentsService.getById(Number(id)).then((result) => {
          setIsLoading(false);
          if(result instanceof Error){
            alert(result.message);
            navigate('/students');
          } else {
            setStudentName(result.name);
            console.log(result);
          }
        })
      }
    },[id]);

    const handleDelete = (id:number) => {
      if(window.confirm('Realmente deseja apagar esse registro?')){
        studentsService.deleteById(id).then((result) => {
          if(result instanceof Error){
            alert(result.message); 
          } else {
            navigate('/students');
          }
        })
    }
  }

  return(
    <BaseLayout 
    title={id === 'new' ? 'Cadastrar novo aluno' : studentName}
    toolbar={
        <DetailsTools
        showSaveButton
        showAddButton={id !== 'new'}
        showDeleteButton={id !== 'new'}
        onClickAddButton={() => navigate('/students/details/new')}
        onClickBackButton={() => navigate(-1)}
        onClickDeleteButton={() => handleDelete(Number(id))}
        onClickSaveButton={() => {}}
        />
    }>
        <p>Detalhes daonoasidfn {id}</p>
    </BaseLayout>
  )
}

export default DetailsStudents;