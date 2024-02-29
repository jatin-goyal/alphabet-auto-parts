import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
            _id,
            name,
            images,
            price,
            cut_price,
            "slug": slug.current,
            description,
            "categoryName": category->name,
            "subCategoryName":type_category->name
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
  const data: fullProduct = await getData(params.slug);
  return (
    <div>
      <h1>hhello from product page</h1>
    </div>
  );
}
