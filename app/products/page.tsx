import getMovies from "../lib/product";
import ProductsList from "../components/ProductsList";
import Search from "../components/Search";
import { Suspense } from "react";
import Skeleton from "../components/Skeleton";

export default async function CategoryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const promise = getMovies({ query: search });

  return (
    <div className="bg-white pt-4">
      <div className="mx-auto max-w-2xl px-4   lg:max-w-7xl lg:px-8">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 mt-2 mb-2">
            Best Quality <span className="text-primary">Visor Glass</span>{" "}
          </h2>
        </div>
        <div className="grow">
          <Search search={search} />
        </div>

        <Suspense fallback={<Skeleton />}>
          <ProductsList promise={promise} />
        </Suspense>
      </div>
    </div>
  );
}
