import BaseLayout from "../../layouts/baseLayoutPage";
import ListingToolsBar from "../../components/listingToolsBar/listingToolsBar";
import { useEffect, useMemo, useState } from "react";
import { studentsDetails, studentsService } from "../../services/studentsService/studentsService";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Students(){

  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(300);
  const [rows, setRows] = useState<studentsDetails[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isloading, setIsLoading] = useState(true);

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  },[searchParams]);
     
  useEffect(() => {
    setIsLoading(true)
    debounce(() => {
      studentsService.getAll(1, search).then((result) => {
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
  }, [search]);

  return(
    <BaseLayout 
    title='Alunos' 
    toolbar={
      <ListingToolsBar 
      showSearchInput 
      searchText={search}
      changeSearchText={text => setSearchParams({ search: text }, { replace: true })}
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
        </Table>
      </TableContainer>

    </BaseLayout>
  )
}

export default Students;