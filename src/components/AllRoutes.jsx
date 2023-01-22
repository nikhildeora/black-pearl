import React from 'react'
import {Route,Routes} from "react-router-dom"
import PrivateRoute from './PrivateRoute';
import FreeTryAtHome from './Freetry/FreeTryAtHome';
import Homepage from './Homepage/Homepage';
import Detail from './SingleProduct/Detail';
import Login from './loginsignup/Login';
import Signup from './loginsignup/Signup';
import Arrival from './Arrival/Arrival';
import PlanOfPurchase from './Plan/PlanOfPurchase';
import Forgot from './Forgetpassword/Forgot';
import Otherjewellery from './OtherJwellery/Otherjewellery';
import Cart from "./Cart/Cart"
import Wishlist from './Wishlist/Wishlist';
import Digital from "./DigitalGold/Digital"
import Address from "./Address And Payment/Address"
import Payment from "./Address And Payment/Payment"
import AdminAuth from '../AdminAuth/AdminAuth';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/freetry' element={<FreeTryAtHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/newarrival/:category' element={<Arrival />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/plan' element={<PlanOfPurchase />} />
        <Route path='/forget' element={<Forgot />} />
        <Route path='/otherjwel' element={<Otherjewellery />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/diggold' element={<Digital />} />
        <Route path='/admin' element={<AdminAuth />} />
        <Route path='/address' element={
        <PrivateRoute>
        <Address />
        </PrivateRoute>
        } />
        <Route path='/payment' element={
        <PrivateRoute>
        <Payment />
        </PrivateRoute>
        } />
    </Routes>
  )
}

export default AllRoutes;



