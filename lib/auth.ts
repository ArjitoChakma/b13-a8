/**
 * Authentication related utilities
 */

export interface User {
  id: string
  name: string
  email: string
  photoUrl: string
  createdAt: string
}

export interface AuthResponse {
  user: User
  token: string
}

/**
 * Mock authentication - Replace with actual BetterAuth implementation
 */
export const mockAuthService = {
  /**
   * Login user
   */
  login: async (email: string, password: string): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (!email || !password) {
      throw new Error('Email and password are required')
    }

    // Mock successful login
    return {
      user: {
        id: 'user_001',
        name: 'John Doe',
        email,
        photoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        createdAt: new Date().toISOString(),
      },
      token: `token_${Date.now()}`,
    }
  },

  /**
   * Register user
   */
  register: async (
    name: string,
    email: string,
    password: string,
    photoUrl: string
  ): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (!name || !email || !password) {
      throw new Error('All fields are required')
    }

    return {
      user: {
        id: 'user_' + Date.now(),
        name,
        email,
        photoUrl,
        createdAt: new Date().toISOString(),
      },
      token: `token_${Date.now()}`,
    }
  },

  /**
   * Google login
   */
  googleLogin: async (token: string): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (!token) {
      throw new Error('Google token is required')
    }

    return {
      user: {
        id: 'user_google_' + Date.now(),
        name: 'Google User',
        email: 'user@google.com',
        photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=google',
        createdAt: new Date().toISOString(),
      },
      token: `token_${Date.now()}`,
    }
  },

  /**
   * Logout
   */
  logout: async (): Promise<void> => {
    localStorage.removeItem('user_token')
    localStorage.removeItem('user_data')
  },

  /**
   * Get current user from storage
   */
  getCurrentUser: (): User | null => {
    if (typeof window === 'undefined') return null

    const userData = localStorage.getItem('user_data')
    return userData ? JSON.parse(userData) : null
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false
    return !!localStorage.getItem('user_token')
  },

  /**
   * Update user profile
   */
  updateProfile: async (
    userId: string,
    updates: Partial<User>
  ): Promise<User> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const currentUser = mockAuthService.getCurrentUser()
    if (!currentUser) throw new Error('User not authenticated')

    const updatedUser = { ...currentUser, ...updates }
    localStorage.setItem('user_data', JSON.stringify(updatedUser))

    return updatedUser
  },
}

/**
 * Token management utilities
 */
export const tokenUtils = {
  /**
   * Save token to localStorage
   */
  saveToken: (token: string): void => {
    localStorage.setItem('user_token', token)
  },

  /**
   * Get token from localStorage
   */
  getToken: (): string | null => {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('user_token')
  },

  /**
   * Remove token from localStorage
   */
  removeToken: (): void => {
    localStorage.removeItem('user_token')
  },

  /**
   * Check if token exists
   */
  hasToken: (): boolean => {
    return !!tokenUtils.getToken()
  },
}

/**
 * User storage utilities
 */
export const userStorage = {
  /**
   * Save user data to localStorage
   */
  saveUser: (user: User): void => {
    localStorage.setItem('user_data', JSON.stringify(user))
  },

  /**
   * Get user from localStorage
   */
  getUser: (): User | null => {
    if (typeof window === 'undefined') return null
    const userData = localStorage.getItem('user_data')
    return userData ? JSON.parse(userData) : null
  },

  /**
   * Remove user from localStorage
   */
  removeUser: (): void => {
    localStorage.removeItem('user_data')
  },

  /**
   * Update user in localStorage
   */
  updateUser: (updates: Partial<User>): User | null => {
    const user = userStorage.getUser()
    if (!user) return null

    const updatedUser = { ...user, ...updates }
    userStorage.saveUser(updatedUser)
    return updatedUser
  },
}
