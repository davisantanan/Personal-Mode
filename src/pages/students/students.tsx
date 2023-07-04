import BaseLayout from "../../layouts/baseLayoutPage";
import ListingToolsBar from "../../components/listingToolsBar/listingToolsBar";
import { useEffect } from "react";
import { studentsService } from "../../services/studentsService/studentsService";

function Students(){
     
  useEffect(() => {
    studentsService.getAll().
    then((result) => {
      console.log(result)
    })
  }, [])

  return(
    <BaseLayout title='Alunos' toolbar={<ListingToolsBar showSearchInput />}>

    </BaseLayout>
  )
}

export default Students;