// import logo from './logo.svg';

import "./App.css";

import AllRoutes from "./components/AllRoutes";
import Cart from "./components/Cart/Cart.jsx";

import Footer from "./components/Footer/Footer";
// import FreeTryAtHome from "./components/Freetry/FreeTryAtHome";

// import Homepage from "./components/Homepage/Homepage";

import Navbar from "./components/Navbar/Navbar";

import PlanOfPurchase from "./components/Plan/PlanOfPurchase";

import Detail from "./components/SingleProduct/Detail";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Wishlist /> */}
      <Cart />
      {/* <Detail /> */}
      {/* <AllRoutes /> */}
      {/* <Arrival /> */}
      {/* <Homepage /> */}
      {/* <FreeTryAtHome /> */}

      <Footer />
    </div>
  );
}

export default App;
