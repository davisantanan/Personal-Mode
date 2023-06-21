import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
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
            default: '#f7f6f3',
            paper: '#fff'
        }
    }
});
