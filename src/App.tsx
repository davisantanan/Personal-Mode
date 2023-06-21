import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@mui/material";
import { ThemeStore } from "./contexts/themeContext";



function App() {

  return (
    <BrowserRouter>
      <ThemeStore>
        <Routes>
          <Route path="/" element={<Button  variant="contained" color="primary">vixe</Button>} />
        </Routes>
      </ThemeStore>
    </BrowserRouter>
  );
}

export default App;
