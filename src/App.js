
 import Mainpage from './components/main';
import Table from './components/table';
import Form from './components/form';
import Update from "./components/update";
import { Route, Routes } from 'react-router-dom';
import Academies from "./components/delete";

function App() {
  return (
     <div>
      <Routes>
         <Route exact path="/" element={<Mainpage/>}/>
         <Route  path="/tab" element={<Table/>}/> 
        <Route  path="/for" element={<Form/>}/> 
        <Route path="/up" element={<Update/>}/>
        <Route path="/del" element={<Academies/>}/>
       </Routes> 
       

    </div>
  );
}

export default App;
