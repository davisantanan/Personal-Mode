import { 
    Box, 
    Button, 
    InputAdornment, 
    Paper, 
    TextField, 
    useTheme 
} from "@mui/material";
import { Add, Search } from "@mui/icons-material";


interface listingToolsBar {
    searchText?: string,
    showSearchInput?: boolean,
    changeSearchText?: (newText: string) => void,
    newButtonText?: string,
    showNewButton?: boolean,
    onClickNewButton?: () => void, 
}

function ListingToolsBar({ 
    searchText= '', 
    showSearchInput= false, 
    changeSearchText,
    newButtonText= 'Novo',
    showNewButton= true,
    onClickNewButton 
}:listingToolsBar){

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
        gap={1}
        >
            {showSearchInput && (
                <TextField
                size='small'
                placeholder='Pesquisar'
                value={searchText}
                onChange={(e) => changeSearchText?.(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                />
            )}
            {showNewButton && (
                <Box flex={1} display='flex' justifyContent='end'>
                <Button
                color='primary'
                variant='contained'
                endIcon={<Add />}
                onClick={onClickNewButton}
                >{newButtonText}</Button>
            </Box>
            )}
        </Box>   
    )
}

export default ListingToolsBar;