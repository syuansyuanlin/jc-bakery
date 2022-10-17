import { Carousel } from "bootstrap";
import "./App.css";
import CakeCard from "./components/CakeCard";
import Nav from "./components/Nav";
import { Cakeimages } from "./components/Cakeimages";
import Cardfooter from "./components/Cardfooter";

function App() {
  return (
    <div className="App">
      <Nav />
      <Cakeimages />
      <CakeCard />
      <Cardfooter />
    </div>
  );
}

export default App;
