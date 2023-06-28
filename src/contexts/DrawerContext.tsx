import { ReactNode, createContext, useState } from "react";


interface propsContextDrawer {
    children: ReactNode
};

interface typeContextDrawer {
    drawerOpen: boolean,
    toggleDrawerOpen: () => void;
}

export const DrawerContext = createContext({} as typeContextDrawer);

export const DrawerStore = ({ children }: propsContextDrawer) => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    function toggleDrawerOpen(){
        setDrawerOpen(!drawerOpen);
    }

    return(
        <DrawerContext.Provider value={{ drawerOpen, toggleDrawerOpen }}>
            {children}   
        </DrawerContext.Provider>
    )
}