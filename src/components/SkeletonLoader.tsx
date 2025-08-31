const SkeletonCard = () => (
  <div className="border border-gray-200 rounded-lg p-4 animate-pulse">
    <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
  </div>
);

type SkeletonLoaderProps = {
  count: number;
};

export const SkeletonLoader = ({ count }: SkeletonLoaderProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};