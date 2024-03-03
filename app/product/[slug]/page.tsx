import ImageGallery from "@/app/components/ImageGallery";
import Newest from "@/app/components/Newest";
import TopPicks from "@/app/components/TopPicks";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Box, MessageCircle, PackageSearch, Star, Truck } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
            _id,
            name,
            images,
            price,
            cut_price,
            min_order,
            "slug": slug.current,
            description,
            "categoryName": category->name,
            "subCategoryName":type_category->name,
            price_id
        }`;
  const data = await client.fetch(query);
  return data;
}

async function getCategoryData(slug: string) {
  const query = `*[_type == "product" && ategory->name == "${slug}"][0] {
            _id,
            name,
            images,
            price,
            cut_price,
            min_order,
            "slug": slug.current,
            description,
            "categoryName": category->name,
            "subCategoryName":type_category->name,
            price_id
        }`;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);
  return (
    <div className="bg-white pt-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 pb-8 border-b">
        <div className="grid gap-10 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:pb-4 lg:ml-6">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500 sm:mx-6 lg:mx-0">
                Compatible with
              </span>
              <h2 className="text-3xl font-bold text-gray-800 lg:text-3xl">
                {data.categoryName} {data.name}
              </h2>
            </div>

            {/* <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div> */}

            <div className="mb-4">
              <span className="mb-0.5 text-red-500 line-through">
                Rs.{data.price + 50}
              </span>{" "}
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  Rs.{data.price} / piece
                </span>
              </div>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">
                Minimum Order : {data.min_order ? data.min_order : 500} pieces
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <PackageSearch className="w-6 h-6" />

              <span className="text-sm">Material : Polycarbonate</span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Box className="w-6 h-6" />
              <span className="text-sm">Pack Size : 5 pieces in a box</span>
            </div>

            <div className="flex gap-2.5">
              {/* https://api.whatsapp.com/send/?phone=917217683367&text&type=phone_number&app_absent=0 */}

              <Link
                href="https://forms.visme.co/formsPlayer/vdnoqj43-contact-form"
                target="_blank"
              >
                <Button className="bg-primary text-white">
                  Yes! I am Interested
                </Button>
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=917217683367&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <Button className="bg-secondary text-black hover:text-white">
                  <FaWhatsapp className="mr-1 font-bold" /> Get Latest Price Now
                </Button>
              </Link>
            </div>

            {data.description ? (
              <p className="mt-6 text-base text-gray-500 tracking-wide w-25">
                {" "}
                {data.description}
              </p>
            ) : (
              <p className="mt-6 text-base text-gray-500 tracking-wide w-25 text-justify">
                Introducing the{" "}
                <span className="font-bold">
                  {data.categoryName} {data.name}
                </span>{" "}
                Visor Glass, a top-quality upgrade for your {data.categoryName}{" "}
                {data.name}. Made with strong polycarbonate, this visor is not
                only durable but also comes from the trusted brand, Alphabet.
                It's tough, clear, and fits your budget, offering the best value
                in the market. Improve your two-wheeler's look and shield
                yourself from wind and debris. The Alphabet Visor Glass is a
                smart choice for enhancing your ride without breaking the bank.
              </p>
            )}
          </div>
        </div>
      </div>
      <TopPicks />
    </div>
  );
}
