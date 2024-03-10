import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProductsList(promise: any) {
  const products = await promise.promise;
  return (
    <div
      className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 min-h-96 bg-white"
      style={{ minHeight: "50vh" }}
    >
      {products?.map((product: any) => {
        return (
          <Link href={`/product/${product.slug}`} key={product._id}>
            <div className="group relative lg:hover:scale-110 transition duration-150 ease-out hover:ease-in">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:group-hover:opacity-75 h-40 lg:h-60">
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
  );
}
