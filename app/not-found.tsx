import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <span className="text-9xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            404
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-300 mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link href="/" className="btn btn-primary btn-lg">
          Go Home
        </Link>
      </div>
    </div>
  )
}
