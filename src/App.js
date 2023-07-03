

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './page/login';
import './style/manage.css'
import Dashboard from './page/dashboard';
function App() {
  return (
  
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Login></Login>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
  </BrowserRouter>
   
      
  );
}

export default App;
