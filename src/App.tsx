import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeStore } from "./contexts/themeContext";
import { DrawerStore } from "./contexts/DrawerContext";
import AsideMenu from "./components/asideMenu/asideMenu";
import Home from "./pages/home/home";



function App() {

  return (
    <BrowserRouter>
      <ThemeStore>
        <DrawerStore>
          <AsideMenu>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </AsideMenu>
        </DrawerStore>
      </ThemeStore>
    </BrowserRouter>
  );
}

export default App;
