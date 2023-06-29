import { 
    Box, 
    Button,
    Paper, 
    useTheme 
} from "@mui/material"
import { 
    Add, 
    ArrowBack, 
    Delete, 
    Save 
} from "@mui/icons-material";


function DetailsTools(){

    const theme = useTheme();

    return(
        <Box 
        component={Paper} 
        height={theme.spacing(5)}
        marginX={1}
        padding={1}
        paddingX={2}
        display='flex'
        alignItems='center'
        >
            <Button
            color='primary'
            variant='outlined'
            startIcon={<ArrowBack />}
            >Voltar</Button>
            <Box
            flex={1}
            display='flex'
            justifyContent='end'
            gap={2}>
            <Button
            color='primary'
            variant='contained'
            startIcon={<Save />}
            >Salvar</Button>
            <Button
            color='primary'
            variant='outlined'
            startIcon={<Add />}
            >Novo</Button>
            <Button
            color='primary'
            variant='outlined'
            startIcon={<Delete />}
            >Apagar</Button>
            </Box>
        </Box>
    )
}

export default DetailsTools