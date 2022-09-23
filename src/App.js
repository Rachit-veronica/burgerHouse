import "./App.css";
import Card from "./componends/Card";
import Contact from "./componends/Contact";
import Footer from "./componends/Footer";
import Menu from "./componends/Menu";
import Navbar from "./componends/Navbar";
import "./componends/css/navbar.style.css";
import Silder from "./componends/Slider";
import Story from "./componends/Story";

function App() {
  return (
    <>
      <div className="homePage">
        <Navbar />
        <Silder />
      </div>
      <Card />
      <Menu />
      <Story />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
