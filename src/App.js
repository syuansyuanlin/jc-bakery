import "./App.css";
import CakeCard from "./components/CakeCard";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Cardfooter from "./components/Cardfooter";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <CakeCard />
      <Cardfooter />
    </div>
  );
}

export default App;
