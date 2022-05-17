import React from 'react';
import Input from './component/form.js/Input';
import './App.css';
import Created from './component/form.js/Created';
import{ Routes, Route} from "react-router-dom"

function App() {
  return (
    

  
    <Routes>
      <Route exact path='/' element={<Input/>}/>
      <Route exact path='/Created' element={<Created/>}/>
      
      

</Routes>


  );
}

export default App;
