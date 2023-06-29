import BaseLayout from "../../layouts/baseLayoutPage";
import DetailsTools from "../../components/detailsTools/detailsTools";


function Home(){

  return(
    <BaseLayout title='Página inicial' toolbar={<DetailsTools />}>
      
    </BaseLayout>
  )
}

export default Home;