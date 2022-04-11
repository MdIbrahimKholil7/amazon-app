import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
       <Route path='/' element={<Shop/>}></Route>
       <Route path="/order" element={<Order/>}></Route>
       <Route path="/OrderReview" element={<OrderReview/>}></Route>
       <Route path="/manageinventory" element={<RequireAuth><ManageInventory/></RequireAuth>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path='/shipping' element={<RequireAuth><Shipping/></RequireAuth>}></Route>
     </Routes>
    </div>
  );
}

export default App;
