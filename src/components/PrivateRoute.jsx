import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {currentUser} = useContext(AuthContext);
const navigate = useNavigate()

React.useEffect(()=>{
  

  if(currentUser === null){
       return navigate("/login")
    }
},[])

  return children;
}

export default PrivateRoute;