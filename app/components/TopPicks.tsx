import Image from "next/image";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

async function getData() {
  const query = `*[_type == "bestImages"] {
        _id,
        name,
        price,
        cut_price,
        "imageURL":images[0].asset->url,
        "slug":slug.current,
        "categoryName":category->name,
        "subCategoryName":type_category->name
      }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();
  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // );
  // console.log(data);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Top Picks
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 flex justify-center ">
          <Carousel
            className="w-5/6"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="ml-0">
              {data &&
                data.map((product) => {
                  return (
                    <CarouselItem className="pl-1 px-1 mr-1 md:basis-1/2 lg:basis-1/4">
                      <Link href={`/product/${product.slug}`}>
                        <div className="p-1 flex justify-center">
                          <Image
                            src={product.imageURL}
                            alt={"check"}
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              {product.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.categoryName}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            Rs.{product.price}
                          </p>
                        </div>
                      </Link>
                    </CarouselItem>
                  );
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext className=" " />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
