import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main"; 
import Villager from "./pages/Villager";
import Fossil from "./pages/Fossil";
import Fish from "./pages/Fish";
import Bug from "./pages/Bug";
import VillagerDetails from "./pages/VillagerDetails";

function App() {
 return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> } >
          <Route index element= { <Main/> } />
          <Route path="villagers">
            <Route index element={ <Villager/> }/>
            <Route path=":villagerId" element={ <VillagerDetails/> } />
          </Route>            
          <Route path="fossils" element={ <Fossil/> }/>
          <Route path="bugs" element={ <Bug/> }/>       
          <Route path="fishs" element={ <Fish/> }/>
        </Route>
      </Routes>

    </BrowserRouter>
 )
}

export default App;
