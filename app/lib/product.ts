import { client } from "./sanity";

export default function getData(search: { query: string | undefined }) {
  const searchTerm = search.query ? search.query : "visor";
  const query = `*[_type == "product" && name match '${searchTerm}*' || tags match '${searchTerm}*' || category->name match '${searchTerm}*' || type_category->name match '${searchTerm}*'] {
          _id,
            "imageURL": images[0].asset->url,
            price,
            name,
            "slug": slug.current,
            "categoryName": category->name
        }`;
  const data = client.fetch(query);

  return data;
}
