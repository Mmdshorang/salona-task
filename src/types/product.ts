// src/types/product.ts

export type ProductReview = {
  rating: number;
  comment: string;
  date: string; // ISO string
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductDimensions = {
  width: number;
  height: number;
  depth: number;
};

export type ProductMeta = {
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  barcode: string;
  qrCode: string; // URL
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;

  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;

  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;

  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;

  meta: ProductMeta;

  images: string[];
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
export type UseProductsParams = {
  page: number; // 1-based
  limit: number; // items per page
  query: string; // search term
};