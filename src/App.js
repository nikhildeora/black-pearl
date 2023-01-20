// import logo from './logo.svg';

import "./App.css";

import Arrival from "./components/Arrival/Arrival";

import AllRoutes from "./components/AllRoutes";

import Footer from "./components/Footer/Footer";
import FreeTryAtHome from "./components/Freetry/FreeTryAtHome";

import Homepage from "./components/Homepage/Homepage";

import Navbar from "./components/Navbar/Navbar";
import Detail from "./components/SingleProduct/Detail";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Detail />
      <AllRoutes />
      {/* <Homepage /> */}
      {/* <FreeTryAtHome /> */}

      <Footer />
    </div>
  );
}

export default App;
