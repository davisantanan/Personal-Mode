import { 
    Avatar, 
    Box, 
    Divider, 
    Drawer, 
    List, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    useMediaQuery, 
    useTheme 
} from "@mui/material";
import { Home, Groups } from '@mui/icons-material'
import { PropsWithChildren, useState, useContext } from "react";
import PersonalAvatar from '../../assets/avatar-1577909_1280.png';
import { DrawerContext } from "../../contexts/DrawerContext";


function AsideMenu({ children }:PropsWithChildren){
    const menuItens = [
        { name: 'Página Inicial', icon: <Home /> },
        { name: 'Alunos', icon: <Groups /> }
    ]
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const { drawerOpen, toggleDrawerOpen } = useContext(DrawerContext); 
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    

    return(
        <>
            <Drawer open={drawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box 
                    width='100%' 
                    height={theme.spacing(20)} 
                    display='flex' 
                    justifyContent='center' 
                    alignItems='center'>
                        <Avatar
                        alt="user-avatar" 
                        sx={{ height: theme.spacing(12), width: theme.spacing(12) }} 
                        src={PersonalAvatar} />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List>
                            {menuItens.map((item, index) => (
                                <ListItemButton 
                                key={index} 
                                selected={activeIndex === index} 
                                onClick={() => setActiveIndex(index)}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
};

export default AsideMenu;