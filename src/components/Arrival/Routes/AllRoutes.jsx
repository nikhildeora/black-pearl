import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Arrival from "../Page/Arrival"
import CommonFilter from './CommonFilter'
import NewIn from './NewIn'

function AllRoutes() {
  return (
   
        <Routes>
            <Route path='/' element={<Arrival/>}></Route>
            <Route path='/commonfiles' element={<CommonFilter/>}></Route>
            <Route path='/newin' element={<NewIn/>}></Route>
        </Routes>
   
  )
}

export default AllRoutes