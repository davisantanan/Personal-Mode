import { 
  LinearProgress, 
  Pagination, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableFooter, 
  TableHead, 
  TableRow 
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { studentsDetails, studentsService } from "../../services/studentsService/studentsService";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import BaseLayout from "../../layouts/baseLayoutPage";
import ListingToolsBar from "../../components/listingToolsBar/listingToolsBar";

function Students(){

  const { debounce } = useDebounce(300);
  const [searchParams, setSearchParams] = useSearchParams();
  const [rows, setRows] = useState<studentsDetails[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isloading, setIsLoading] = useState(true);

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  },[searchParams]);

  const page = useMemo(() => {
    return Number(searchParams.get('page') || '1');
  },[searchParams]);
     
  useEffect(() => {
    setIsLoading(true)
    debounce(() => {
      studentsService.getAll(page, search).then((result) => {
        setIsLoading(false);
        if(result instanceof Error){
          alert(result.message);
        } else {
          console.log(result);
          setRows(result.data);
          setTotalCount(result.totalCount);
        } 
      })
    });
    // eslint-disable-next-line
  }, [search, page]);

  return(
    <BaseLayout 
    title='Alunos' 
    toolbar={
      <ListingToolsBar 
      showSearchInput 
      searchText={search}
      changeSearchText={text => setSearchParams({ search: text, page: '1' }, { replace: true })}
      />}>

      <TableContainer 
      component={Paper} 
      variant="outlined" 
      sx={{ margin: 1, width: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Nome do Aluno</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Dia da semana</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Telefone</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.dayOfTheWeek}</TableCell>
                <TableCell>{row.telNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          {totalCount === 0 && !isloading && (
            <caption>Nenhum registro encontrado</caption>
          )}
          
          <TableFooter>
            {isloading && (
              <TableRow>
                <TableCell colSpan={4}>
                  <LinearProgress variant="indeterminate" /> 
                </TableCell>
              </TableRow>
            )}
            {totalCount > 0 && totalCount > 8 &&(
              <TableRow >
                <TableCell colSpan={4}>
                  <Pagination 
                  page={page}
                  count={Math.ceil(totalCount / 8)} 
                  onChange={(e, newPage) => setSearchParams({ search, page: newPage.toString()}, { replace: true })}
                  /> 
                </TableCell>
              </TableRow>
            )}

          </TableFooter>
        </Table>
      </TableContainer>

    </BaseLayout>
  )
}

export default Students;