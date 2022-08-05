import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main"; 
import Villager from "./pages/Villager";
function App() {
 return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> } >
          <Route index element= { <Main/> } />
          <Route path="villagers" element= {<Villager/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
 )
}

export default App;
