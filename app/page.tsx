import Hero from "./components/Hero";
import Badge from "./components/Badge";
import Newest from "./components/Newest";
import TopPicks from "./components/TopPicks";
// import ImgSlider from "./components/ImgSlider";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <Hero />
      <Badge />
      <TopPicks />
      <Newest />
    </div>
  );
}
