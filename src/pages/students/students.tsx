import { useContext } from "react";
import { DrawerContext } from "../../contexts/DrawerContext";

function Students(){

  const { toggleDrawerOpen } = useContext(DrawerContext); 
    
  return(
    <button onClick={toggleDrawerOpen}>asdasd</button>
  )
}

export default Students;