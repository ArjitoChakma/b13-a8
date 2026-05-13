export default function Loading() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-indigo-600 rounded-lg animate-pulse"></div>
          <div className="w-16 h-16 bg-purple-600 rounded-lg animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-16 h-16 bg-pink-600 rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-center text-gray-600 font-semibold">Loading tiles...</p>
      </div>
    </div>
  )
}
