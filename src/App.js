

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './page/login';
import './style/manage.css'
import Dashboard from './page/dashboard';
import Calendar from './page/sub/Calendar';
import Ticket from './page/sub/Ticket';
import Users from './page/sub/Users';
import Discount from './page/sub/discount';
function App() {
  return (
  
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='calendar' element={<Calendar/>}/>
        <Route path='ticket' element={<Ticket/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path='discount' element={<Discount/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
   
      
  );
}

export default App;
