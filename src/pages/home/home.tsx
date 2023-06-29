import BaseLayout from "../../layouts/baseLayoutPage";
import ListingToolsBar from "../../components/listingToolsBar/listingToolsBar"


function Home(){

  return(
    <BaseLayout title='Página inicial' toolbar={<ListingToolsBar showSearchInput />}>
      
    </BaseLayout>
  )
}

export default Home;