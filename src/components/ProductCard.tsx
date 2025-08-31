import type { Product } from '../types/product';
import { Star, TrendingUp } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.discountPercentage.toFixed(0)}% OFF
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate group-hover:text-blue-600">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-xl font-bold text-gray-900">
              ${discountedPrice.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={20} fill="currentColor" />
            <span className="font-bold text-gray-700">{product.rating}</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-green-600 font-semibold flex items-center gap-1">
          <TrendingUp size={16} />
          <span>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};