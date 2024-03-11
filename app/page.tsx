import Hero from "./components/Hero";
import Badge from "./components/Badge";
import Newest from "./components/Newest";
import TopPicks from "./components/TopPicks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
// import ImgSlider from "./components/ImgSlider";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <Hero />
      <Badge />
      <div className="flex items-center justify-center flex-col lg:flex-row gap-4 mt-8 md:mt-12 ">
        <Link href={"/products"}>
          <Button className="text-lg font-semibold rounded-lg p-8 px-10 md:min-w-96 shadow-xl border-white lg:hover:scale-110  transition duration-150 ease-out hover:ease-in-out duration-300 flex gap-2">
            Search product by name <SearchIcon className="w-4" />
          </Button>
        </Link>
        <Link
          href={
            "https://drive.google.com/file/d/1pAwfZZ-SW8QIIRX4ly6yPXAkM11IcUXv/view?usp=sharing"
          }
          target="_blank"
        >
          <Button className="text-lg font-semibold rounded-lg p-8 px-10 md:min-w-96 shadow-xl border-white lg:hover:scale-110  transition duration-150 ease-out hover:ease-in-out duration-300">
            Download Catalogue
          </Button>
        </Link>{" "}
      </div>
      <TopPicks />
      <Newest />
    </div>
  );
}
