export interface simplifiedProduct {
  _id: string;
  name: string;
  price: number;
  cut_price: number;
  imageURL: string;
  slug: string;
  categoryName: string;
  subCategoryName: string;
}

export interface fullProduct {
  _id: string;
  name: string;
  images: any;
  price: number;
  cut_price: number;
  slug: string;
  description: string;
  categoryName: string;
  subCategoryName: string;
  price_id: string;
}
