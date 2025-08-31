import { useState, useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { Pagination } from '../components/Pagination';
import { SkeletonLoader } from '../components/SkeletonLoader';
import { Search } from 'lucide-react';
import { ITEMS_PER_PAGE } from '../constants/pagination';
import { ErrorDisplay } from '../components/ErrorDisplay';



export const ProductsPage = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
            setPage(1);
        }, 300);

        return () => clearTimeout(handler);
    }, [query]);

    const { data, isLoading, isError } = useProducts({
        page,
        limit: ITEMS_PER_PAGE,
        query: debouncedQuery,
    });

    const totalPages = data ? Math.ceil(data.total / ITEMS_PER_PAGE) : 0;

    return (
        <div className="bg-gray-50 min-h-screen">
            <main className="container mx-auto px-4 py-8">
                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-800">Our Products</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Discover our exclusive collection of high-quality products.
                    </p>
                </header>

                {/* Search */}
                <div className="relative mb-8 max-w-lg mx-auto">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for products..."
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Products */}
                {isLoading ? (
                    <SkeletonLoader count={ITEMS_PER_PAGE} />
                ) : isError ? (
                    <ErrorDisplay message="Failed to load products. Please try again later." />
                ) : (
                <>
                    {data && data.products.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {data.products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                            <Pagination
                                currentPage={page}
                                totalPages={totalPages}
                                onPageChange={setPage}
                            />
                        </>
                    ) : (
                        <div className="text-center text-gray-500 mt-8">
                            No products found.
                        </div>
                    )}
                </>
        )}
            </main>
        </div>
    );
};
