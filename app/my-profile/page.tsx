'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Toaster, toast } from 'react-hot-toast'

interface UserProfile {
  name: string
  email: string
  photoUrl: string
  joinDate: string
}

export default function MyProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john@example.com',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    joinDate: '2025-01-15',
  })

  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <Toaster position="top-right" />
      <div className="container-main">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">My Profile</h1>
            <p className="text-gray-600">Manage your account information</p>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {/* Profile Picture & Basic Info */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 pb-8 border-b">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={profile.photoUrl}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
                <p className="text-gray-600 mb-2">{profile.email}</p>
                <p className="text-sm text-gray-500">
                  Member since {new Date(profile.joinDate).toLocaleDateString()}
                </p>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn btn-primary"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            {/* Profile Information */}
            {!isEditing ? (
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Full Name</p>
                  <p className="text-lg font-semibold">{profile.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Address</p>
                  <p className="text-lg font-semibold">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Photo URL</p>
                  <p className="text-lg font-semibold truncate">{profile.photoUrl}</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">12</div>
                    <p className="text-sm text-gray-600">Orders</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <p className="text-sm text-gray-600">Wishlist Items</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">4</div>
                    <p className="text-sm text-gray-600">Reviews</p>
                  </div>
                </div>
              </div>
            ) : (
              <EditProfileForm
                profile={profile}
                onSave={(updatedProfile) => {
                  setProfile(updatedProfile)
                  setIsEditing(false)
                  toast.success('Profile updated successfully!')
                }}
              />
            )}
          </div>

          {/* Account Actions */}
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold mb-4">Account Actions</h3>
            <button className="btn btn-outline w-full justify-start">
              📦 My Orders
            </button>
            <button className="btn btn-outline w-full justify-start">
              ❤️ My Wishlist
            </button>
            <button className="btn btn-outline w-full justify-start">
              🔐 Change Password
            </button>
            <button className="btn btn-error btn-outline w-full justify-start">
              🚪 Logout
            </button>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

function EditProfileForm({
  profile,
  onSave,
}: {
  profile: UserProfile
  onSave: (profile: UserProfile) => void
}) {
  const [formData, setFormData] = useState(profile)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Photo URL
        </label>
        <input
          type="url"
          value={formData.photoUrl}
          onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
          className="input input-bordered w-full"
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Update Information
      </button>
    </form>
  )
}
