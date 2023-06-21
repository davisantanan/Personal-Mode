import { Button, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lightTheme } from "./themes/light";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button variant="contained" color="primary">vixe</Button>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
