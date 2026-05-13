'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import FeaturedTiles from '@/components/FeaturedTiles'
import Marquee from '@/components/Marquee'
import Loading from '@/components/Loading'

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your Perfect
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Aesthetic
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore premium tiles and ceramics that transform your space into a masterpiece
          </p>
          <Link href="/all-tiles" className="btn btn-primary btn-lg">
            Browse Now
          </Link>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* Featured Tiles Section */}
      <section className="container-main">
        <h2 className="section-title">Featured Collections</h2>
        <Suspense fallback={<Loading />}>
          <FeaturedTiles />
        </Suspense>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands of happy customers who have found their perfect tiles
          </p>
          <Link href="/all-tiles" className="btn btn-light btn-lg">
            Start Shopping
          </Link>
        </div>
      </section>
    </>
  )
}
