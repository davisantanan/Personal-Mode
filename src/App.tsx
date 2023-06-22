import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@mui/material";
import { ThemeStore } from "./contexts/themeContext";
import AsideMenu from "./components/asideMenu/asideMenu";



function App() {

  return (
    <BrowserRouter>
      <ThemeStore>
        <Routes>
          <Route path="/" element={<><Button  variant="contained" color="primary">vixe</Button> <AsideMenu /></>} />
        </Routes>
      </ThemeStore>
    </BrowserRouter>
  );
}

export default App;
