import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#e64a19',
            dark: '#d84315',
            light: '#ff5722',
            contrastText: '#fff',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#fff',
        },
        background: {
            paper: '#303134',
            default: '#202124', 
        }
    },
    typography: {
        allVariants: {
            color: 'white',
        }
    },
});
