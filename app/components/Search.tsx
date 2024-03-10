"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { SearchIcon } from "lucide-react";

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 0);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (!query) {
      router.push(`/products`);
    } else {
      router.push(`/products?search=${query}`);
    }
  }, [query]);

  return (
    <div className="relative rounded-md shadow-sm mb-6 mt-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        value={text}
        placeholder="Search products..."
        onChange={(e) => setText(e.target.value)}
        className="block w-full rounded-xl border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 py-4"
      />
    </div>
  );
};

export default Search;
