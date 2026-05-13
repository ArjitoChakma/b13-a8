'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <nav className="navbar container mx-auto px-4">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            🧱 Tiles Gallery
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 flex-1 justify-center">
          <Link href="/" className="btn btn-ghost btn-sm">
            Home
          </Link>
          <Link href="/all-tiles" className="btn btn-ghost btn-sm">
            All Tiles
          </Link>
          <Link href="/my-profile" className="btn btn-ghost btn-sm">
            My Profile
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex-none gap-2">
          {isLoggedIn ? (
            <>
              <Link href="/my-profile" className="btn btn-neutral btn-sm">
                Profile
              </Link>
              <button className="btn btn-outline btn-sm" onClick={() => setIsLoggedIn(false)}>
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-100 border-t">
          <div className="p-4 space-y-2">
            <Link href="/" className="block btn btn-ghost btn-block justify-start">
              Home
            </Link>
            <Link href="/all-tiles" className="block btn btn-ghost btn-block justify-start">
              All Tiles
            </Link>
            <Link href="/my-profile" className="block btn btn-ghost btn-block justify-start">
              My Profile
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
