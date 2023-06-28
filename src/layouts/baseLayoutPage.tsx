import { Menu } from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode, useContext } from "react";
import { DrawerContext } from "../contexts/DrawerContext";


interface baseLayoutProps {
    children: ReactNode,
    title: string,
    toolbar?: ReactNode
}

function BaseLayout({ children, title, toolbar }:baseLayoutProps){
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const { toggleDrawerOpen } = useContext(DrawerContext);


    return(
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            
            <Box padding={1}  display='flex' gap={1} alignItems='center' height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
                {smDown && (
                <IconButton onClick={toggleDrawerOpen}>
                    <Menu />
                </IconButton>)}
                <Typography 
                variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} 
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'
                >
                    {title}
                </Typography>
            </Box>
            
            {toolbar && (
            <Box>
                {toolbar}
            </Box>)}
            
            <Box flex={1} overflow='auto'>
                {children}
            </Box>
        </Box>
    )
}

export default BaseLayout;