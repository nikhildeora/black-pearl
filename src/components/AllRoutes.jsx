import React from 'react'
import {Route,Routes} from "react-router-dom"
import Arrival from './Arrival/Arrival';
import FreeTryAtHome from './Freetry/FreeTryAtHome';
import Homepage from './Homepage/Homepage';
import Detail from './SingleProduct/Detail';
import Login from './loginsignup/Login';
import Signup from './loginsignup/Signup';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/freetry' element={<FreeTryAtHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/newarrival' element={<Arrival />} />
        <Route path='/produt:id' element={<Detail />} />
    </Routes>
  )
}

export default AllRoutes;