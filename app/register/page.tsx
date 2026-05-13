'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Toaster, toast } from 'react-hot-toast'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (name && email && password && photoUrl) {
        toast.success('Registration successful! Redirecting to login...')
        setTimeout(() => {
          router.push('/login')
        }, 1500)
      } else {
        toast.error('Please fill in all fields')
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleRegister = async () => {
    toast.success('Google registration coming soon!')
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Create Account
              </h1>
              <p className="text-gray-600">Join our tile community</p>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL
                </label>
                <input
                  type="url"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full mt-6"
              >
                {isLoading ? 'Creating Account...' : 'Register'}
              </button>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Register */}
            <button
              onClick={handleGoogleRegister}
              className="btn btn-outline w-full gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C15.503,2.988,13.712,2,11.85,2 C6.367,2,2,6.367,2,11.95c0,5.583,4.367,9.95,9.85,9.95c9.102,0,10.097-8.622,9.427-11.87H12.545z" />
              </svg>
              Google Register
            </button>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-indigo-600 font-semibold hover:text-indigo-700">
                  Login here
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Link */}
          <div className="text-center mt-6">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
