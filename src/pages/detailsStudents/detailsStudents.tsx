import BaseLayout from "../../layouts/baseLayoutPage";
import DetailsTools from "../../components/detailsTools/detailsTools";
import { useNavigate, useParams } from "react-router-dom";


function DetailsStudents(){
    const { id } = useParams();
    const navigate = useNavigate();

  return(
    <BaseLayout 
    title="Informações do aluno"
    toolbar={
        <DetailsTools
        showSaveButton
        showAddButton={id !== 'new'}
        showDeleteButton={id !== 'new'}
        onClickAddButton={() => navigate('/students/details/new')}
        onClickBackButton={() => navigate(-1)}
        onClickDeleteButton={() => {}}
        onClickSaveButton={() => {}}
        />
    }>
        <p>Detalhes daonoasidfn {id}</p>
    </BaseLayout>
  )
}

export default DetailsStudents;