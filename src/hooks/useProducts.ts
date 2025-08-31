import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { api } from "../services/api";
import type { ProductsResponse, UseProductsParams } from "../types/product";

const useProducts=({ page, limit, query }: UseProductsParams)=> {
  const skip = (page - 1) * limit;
  return useQuery<ProductsResponse>({
    queryKey: ["products", { page, limit, query }],
    queryFn: async () => {
      const q = query?.trim();
      const url = q
        ? `/products/search?limit=${limit}&skip=${skip}&q=${encodeURIComponent(
            q
          )}`
        : `/products?limit=${limit}&skip=${skip}`;
      const { data } = await api.get<ProductsResponse>(url);
      return data;
    },
    placeholderData: keepPreviousData,
    staleTime: 60_000, 
  });
}
export default useProducts