import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import LayoutAdmin from './templates/admins/LayoutAdmin';
import Layout from './templates/users/Layout';
import TrangChu from './pages/TrangChu/TrangChu';
import TimKiem from './pages/TimKiem/TimKiem';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail/Detail';
import { CheckoutTemplate } from './templates/Checkout/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import Login from './templates/admins/Login';
import Register from "./templates/admins/Register"
import User from './templates/admins/User';
import Profile from './pages/Profile/Profile';
import DashBoard from './templates/admins/DashBoard/DashBoard';
import Films from './templates/admins/Films/Films';
import Showtime from './templates/admins/ShowTime/Showtime';
import AddFilm from './templates/admins/Films/AddFilm';
import Edit from './templates/admins/Edit/Edit';



function App() {
  return (
    <div className="App">
      <HistoryRouter history={history} >
        <Routes>
        
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<TrangChu />} />
            <Route path='/timkiem' element={<TimKiem />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/user' element={<LayoutAdmin/>}/>
            <Route path='*' element={<NotFound />} />
          </Route>
         

         
          <Route path='/admin' element={<LayoutAdmin />}>
          </Route>
          <Route path="/login" element={<User />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/checkout/:id' element={<Checkout />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="admin/user" element={<DashBoard/>}/>
          <Route path="admin/films" element={<Films/>}/>
          <Route path="admin/films/addfilm" element={<AddFilm/>}/>
          <Route path="admin/films/showtime/:id" element={<Showtime/>}/>
          <Route path="admin/films/edit/:id" element={<Edit/>}/>
         
        
        
        </Routes>
      
      </HistoryRouter>
    </div>
  );
}

export default App;
