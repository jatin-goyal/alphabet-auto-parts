"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5 w-100">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg bg-gray-100 md:hover:scale-110 transition duration-150 ease-out hover:ease-in"
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="Alphabet visor glass, alphhabet visor glass, 2-wheeler, two-wheeler, 2 wheeler, two wheeler, visor, visor glass, windshield, wind sheild, fairing, fender, auto part, plastic parts, manufactururer, bawana, delhi, india, Alphabet visor glass hero,hero visor glass, honda visor glass, honda, tvs visor glass, tvs, yamaha visor glass, yamaha, bajaj visor glass, bajaj, mahindra visor glass, mahindra, suzuki visor glass, Suzuki, ktm, bawana, delhi, mumbai, pune, panjab, jharkhand, up, kanpur, lucknow"
              className="h-20  w-20 lg:h-full lg:w-full object-cover object-center cursor-pointer "
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 h-full lg:h-4/5 hover:origin-top md:hover:scale-150  transition duration-150 ease-out hover:ease-in-out duration-300">
        <Image
          src={urlFor(bigImage).url()}
          alt="Alphabet visor glass, alphhabet visor glass, 2-wheeler, two-wheeler, 2 wheeler, two wheeler, visor, visor glass, windshield, wind sheild, fairing, fender, auto part, plastic parts, manufactururer, bawana, delhi, india, Alphabet visor glass hero,hero visor glass, honda visor glass, honda, tvs visor glass, tvs, yamaha visor glass, yamaha, bajaj visor glass, bajaj, mahindra visor glass, mahindra, suzuki visor glass, Suzuki, ktm, bawana, delhi, mumbai, pune, panjab, jharkhand, up, kanpur, lucknow"
          width={300}
          height={300}
          className="h-90 w-full object-cover object-center"
        />

        {/* <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span> */}
      </div>
    </div>
  );
}
