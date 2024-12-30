export function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
      {/* Skeleton Card 1 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 animate-pulse">
        <div className="w-full h-48 bg-gray-300" />
        <div className="px-6 py-4">
          <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>

      {/* Skeleton Card 2 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 animate-pulse">
        <div className="w-full h-48 bg-gray-300" />
        <div className="px-6 py-4">
          <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>

      {/* Skeleton Card 3 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 animate-pulse">
        <div className="w-full h-48 bg-gray-300" />
        <div className="px-6 py-4">
          <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
