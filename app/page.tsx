import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Badge from "./components/Badge";
// import ImgSlider from "./components/ImgSlider";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fffcfc" }}>
      <Navbar />
      <Hero />
      <Badge />
    </div>
  );
}
