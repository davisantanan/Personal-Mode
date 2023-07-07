import BaseLayout from "../../layouts/baseLayoutPage";
import ListingToolsBar from "../../components/listingToolsBar/listingToolsBar";
import { useEffect, useMemo } from "react";
import { studentsService } from "../../services/studentsService/studentsService";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

function Students(){

  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(300);

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  },[searchParams]);
     
  useEffect(() => {
    debounce(() => {
      studentsService.getAll(1, search).then((result) => {
        console.log(result)
      })
    });
    // eslint-disable-next-line
  }, [search]);

  return(
    <BaseLayout 
    title='Alunos' 
    toolbar={
      <ListingToolsBar 
      showSearchInput 
      searchText={search}
      changeSearchText={text => setSearchParams({ search: text }, { replace: true })}
      />}
    >

    </BaseLayout>
  )
}

export default Students;