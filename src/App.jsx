import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import GetStarted from "./components/GetStarted";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";
import Products from "./components/Products";
import Faq from "./components/Faq";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <GetStarted />
      <AboutUs />
      <Services />
      <section class="relative overflow-hidden">
        <img
          src="vextorBg.png"
          alt=""
          class="absolute bottom-0 left-0 w-full h-full md:object-fill object-cover hidden md:block"
        />
        <img
          src="VectorBgSm.svg"
          alt=""
          class="absolute bottom-0 left-0 w-full h-full md:object-fill object-cover md:hidden"
        />

        <div class="relative bottom-0 top-16 py-48">
          <ChooseUs />
        </div>
      </section>
      <Products />
      <Faq />
      <Connect />
      <Footer />
    </>
  );
}

export default App;
