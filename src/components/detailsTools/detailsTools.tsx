import { 
    Box, 
    Button,
    Paper, 
    Skeleton, 
    useMediaQuery, 
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
    loadingShowDeleteButton= false,
    loadingShowSaveAndCloseButton= false
 }:detailsToolsProps){

    const theme = useTheme();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
           {showBackButton && (
                <Button
                component={Box}
                color='primary'
                variant={xsDown ? 'text' : 'outlined'}
                startIcon={mdDown ? '' : <ArrowBack />}
                onClick={onClickBackButton}
                >
                    {mdDown ? <ArrowBack /> : 'Voltar'}
                </Button>
           )}
            <Box
            flex={1}
            display='flex'
            justifyContent='end'
            gap={xsDown ? 0 : smDown ? 1 : 2}>
                {showSaveButton && !loadingShowSaveButton && (
                    <Button
                    color='primary'
                    variant={xsDown ? 'text' : 'contained'}
                    startIcon={mdDown ? '' : <Save />}
                    onClick={onClickSaveButton}
                    >
                        {mdDown ? <Save /> : 'Salvar'}
                    </Button>
                )}
                {loadingShowSaveButton && (
                    <Skeleton width={110} height={60} />
                )}
                {showSaveAndCloseButton && (
                    <Button
                    color='primary'
                    variant={xsDown ? 'text' : 'outlined'}
                    startIcon={mdDown ? '' : <Save />}
                    onClick={onClickSaveAndCloseButton}
                    >
                        {mdDown ? <Save /> : 'Salvar e Fechar'}
                    </Button>
                )}
                {(loadingShowSaveAndCloseButton) && (
                    <Skeleton width={110} height={60} />
                )}
                {showAddButton && !loadingShowAddButton && (
                    <Button
                    color='primary'
                    variant={xsDown ? 'text' : 'outlined'}
                    startIcon={mdDown ? '' : <Add />}
                    onClick={onClickAddButton}
                    >
                        {mdDown ? <Add /> : 'Novo'}
                    </Button>
                )}
                {loadingShowAddButton  && (
                    <Skeleton width={110} height={60} />
                )}
                {showDeleteButton && !loadingShowDeleteButton && (
                    <Button
                    color='primary'
                    variant={xsDown ? 'text' : 'outlined'}
                    startIcon={mdDown ? '' : <Delete />}
                    onClick={onClickDeleteButton}
                    >
                        {mdDown ? <Delete /> : 'Apagar'}
                    </Button>
                )}
                {loadingShowDeleteButton && (
                    <Skeleton width={110} height={60} />
                )}
            </Box>
        </Box>
    )
}

export default DetailsTools