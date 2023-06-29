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


interface detailsToolsProps {
    showAddButton?: boolean,
    showSaveButton?: boolean,
    showDeleteButton?: boolean,
    showBackButton?: boolean,
    showSaveAndCloseButton?: boolean,
    onClickAddButton?: () => void,
    onClickSaveButton?: () => void,
    onClickDeleteButton?: () => void,
    onClickBackButton?: () => void,
    onClickSaveAndCloseButton?: () => void
}

function DetailsTools({ 
    showAddButton= true,
    showBackButton= true,
    showDeleteButton= true,
    showSaveButton= true,
    showSaveAndCloseButton= false,
    onClickBackButton,
    onClickDeleteButton,
    onClickAddButton,
    onClickSaveButton,
    onClickSaveAndCloseButton
 }:detailsToolsProps){

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
           {showBackButton &&(
                <Button
                color='primary'
                variant='outlined'
                startIcon={<ArrowBack />}
                onClick={onClickBackButton}
                >Voltar</Button>
           )}
            <Box
            flex={1}
            display='flex'
            justifyContent='end'
            gap={2}>
                {showSaveButton && (
                    <Button
                    color='primary'
                    variant='contained'
                    startIcon={<Save />}
                    onClick={onClickSaveButton}
                    >Salvar</Button>
                )}
                {showSaveAndCloseButton && (
                    <Button
                    color='primary'
                    variant='outlined'
                    startIcon={<Save />}
                    onClick={onClickSaveAndCloseButton}
                    >Salvar e Fechar</Button>
                )}
                {showAddButton && (
                    <Button
                    color='primary'
                    variant='outlined'
                    startIcon={<Add />}
                    onClick={onClickAddButton}
                    >Novo</Button>
                )}
                {showDeleteButton && (
                    <Button
                    color='primary'
                    variant='outlined'
                    startIcon={<Delete />}
                    onClick={onClickDeleteButton}
                    >Apagar</Button>
                )}
            </Box>
        </Box>
    )
}

export default DetailsTools