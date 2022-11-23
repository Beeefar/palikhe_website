import React  from 'react';
import "./App.css";
import palikhe_01 from "./assets/palikhe_01.JPG";
import palikhe_02 from "./assets/palikhe_02.jpg";
import palikhe_03 from "./assets/palikhe_03.JPG";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "/", title: "Home" },
    { url: "/bangsawali", title: "Bangsawali" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={palikhe_01} />
      <Slider
        imageSrc={palikhe_02}
        title={"We are Palikhe."}
        subtitle={
          "The world's biggest strength lies in the youth."
        }
      />
      <Slider
        imageSrc={palikhe_03}
        title={"Memories for a lifetime."}
        subtitle={"Alone we can do so little; together we can do so much."}
        flipped={true}
      />
    </div>
  );
}

export default App;
