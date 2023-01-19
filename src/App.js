// import logo from './logo.svg';
import "./App.css";
import FreeTryAtHome from "./components/Freetry/FreeTryAtHome";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Homepage />
      <FreeTryAtHome />
    </div>
  );
}

export default App;
