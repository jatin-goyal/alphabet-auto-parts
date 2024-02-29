import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import alphabet from "/public/images/alphabet.png";
import ImgSlider from "./ImgSlider";

export default function Hero() {
  return (
    <section>
      <ImgSlider />
    </section>
  );
}
