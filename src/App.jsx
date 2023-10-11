import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
