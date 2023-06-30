import { 
    Box, 
    Button,
    Paper, 
    Skeleton, 
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
    onClickSaveAndCloseButton?: () => void,
    loadingShowAddButton?: boolean,
    loadingShowSaveButton?: boolean,
    loadingShowDeleteButton?: boolean,
    loadingShowBackButton?: boolean,
    loadingShowSaveAndCloseButton?: boolean,
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
    onClickSaveAndCloseButton,
    loadingShowAddButton= false,
    loadingShowSaveButton= false,
    loadingShowBackButton= false,
    loadingShowDeleteButton= false,
    loadingShowSaveAndCloseButton= false
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
                {showSaveButton && !loadingShowSaveButton && (
                    <Button
                    color='primary'
                    variant='contained'
                    startIcon={<Save />}
                    onClick={onClickSaveButton}
                    >Salvar</Button>
                )}
                {loadingShowSaveButton && (
                    <Skeleton width={110} height={60} />
                )}
                {showSaveAndCloseButton && (
                    <Button
                    color='primary'
                    variant='outlined'
                    startIcon={<Save />}
                    onClick={onClickSaveAndCloseButton}
                    >Salvar e Fechar</Button>
                )}
                {(loadingShowSaveAndCloseButton) && (
                    <Skeleton width={110} height={60} />
                )}
                {showAddButton && !loadingShowAddButton && (
                    <Button
                    color='primary'
                    variant='outlined'
                    startIcon={<Add />}
                    onClick={onClickAddButton}
                    >Novo</Button>
                )}
                {loadingShowAddButton  && (
                    <Skeleton width={110} height={60} />
                )}
                {showDeleteButton && !loadingShowDeleteButton && (
                    <Button
                    color='primary'
                    variant='outlined'
                    startIcon={<Delete />}
                    onClick={onClickDeleteButton}
                    >Apagar</Button>
                )}
                {loadingShowDeleteButton && (
                    <Skeleton width={110} height={60} />
                )}
            </Box>
        </Box>
    )
}

export default DetailsTools