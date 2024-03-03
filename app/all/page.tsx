import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";

async function getData(cateogry: string) {
  const query = `*[_type == "product"]{
        _id,
          "imageURL": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white pt-8">
      <div className="mx-auto max-w-2xl px-4   lg:max-w-7xl lg:px-8">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 mt-2 mb-2">
            Best Quality <span className="text-primary">Visor Glass</span>{" "}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => {
            return (
              <Link href={`/product/${product.slug}`} key={product._id}>
                <div className="group relative md:hover:scale-110 transition duration-150 ease-out hover:ease-in">
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 h-40 lg:h-60">
                    <Image
                      src={product.imageURL}
                      alt="Alphabet visor glass, alphhabet visor glass, 2-wheeler, two-wheeler, 2 wheeler, two wheeler, visor, visor glass, windshield, wind sheild, fairing, fender, auto part, plastic parts, manufactururer, bawana, delhi, india, Alphabet visor glass hero,hero visor glass, honda visor glass, honda, tvs visor glass, tvs, yamaha visor glass, yamaha, bajaj visor glass, bajaj, mahindra visor glass, mahindra, suzuki visor glass, Suzuki, ktm, bawana, delhi, mumbai, pune, panjab, jharkhand, up, kanpur, lucknow"
                      className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="mt-4 flex justify-between px-2">
                    <div>
                      <h3 className="text-sm text-gray-700">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.categoryName}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Rs.{product.price}/pc
                    </p>
                  </div>
                  <div className="w-full p-2 pt-3">
                    <Button className="w-full p-2">Know more</Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
