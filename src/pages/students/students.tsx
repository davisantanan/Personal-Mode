import BaseLayout from "../../layouts/baseLayoutPage";
import ListingToolsBar from "../../components/listingToolsBar/listingToolsBar";

function Students(){
     
  return(
    <BaseLayout title='Alunos' toolbar={<ListingToolsBar showSearchInput />}>

    </BaseLayout>
  )
}

export default Students;