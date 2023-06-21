import { ThemeProvider } from "@emotion/react";
import { ReactNode, createContext, useCallback, useMemo, useState } from "react";
import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";
import { Box } from "@mui/material";

interface propsContextTheme {
    children: ReactNode
};

interface typeContextTheme {
    themeName: 'light' | 'dark',
    toggleTheme: () => void,
    setThemeName: (themeName: 'light' | 'dark') => void
}

export const ThemeContext = createContext({} as typeContextTheme);

export const ThemeStore = ({ children }: propsContextTheme) => {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName(themeName => themeName === 'light' ? 'dark' : 'light');
        console.log('vixe')
    }, [])

    const theme = useMemo(() => {
        if(themeName === 'light') return lightTheme;
        return darkTheme;
    },[themeName])
    
    return(
        <ThemeContext.Provider value={{ themeName, toggleTheme, setThemeName }}>
            <ThemeProvider theme={theme}>
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}