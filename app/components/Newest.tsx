import Image from "next/image";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

async function getData() {
  const query = `*[_type == "product"][0...4] {
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
  // console.log(data);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-2 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data &&
            data.map((product) => {
              // console.log(product);
              return (
                <div key={product._id} className="group relative">
                  <Link href={`/product/${product.slug}`}>
                    <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-60 sm:h-40">
                      <Image
                        src={product.imageURL}
                        alt="Product image"
                        className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                        width={300}
                        height={150}
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
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
