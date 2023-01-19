// import logo from './logo.svg';
import "./App.css";
import Arrival from "./components/Arrival/Page/Arrival";
// import Homepage from "./components/Homepage/Homepage";
// import Navbar from "./components/Navbar/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/Arrival/Routes/AllRoutes";

function App() {
  return (
    <div className="App">
     <ChakraProvider>
      <BrowserRouter>
      {/* <Navbar /> */}
      {/* <Homepage /> */}

      <Arrival/>
    
      </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
