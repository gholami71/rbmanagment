

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './page/login';
import './style/manage.css'
function App() {
  return (
  
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Login></Login>}></Route>
    </Routes>
  </BrowserRouter>
   
      
  );
}

export default App;
