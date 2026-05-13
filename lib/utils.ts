// Utility functions for the application

/**
 * Format number as currency
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Check if user is logged in (from localStorage)
 */
export const isUserLoggedIn = (): boolean => {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem('user_token')
}

/**
 * Get user from localStorage
 */
export const getStoredUser = () => {
  if (typeof window === 'undefined') return null
  const user = localStorage.getItem('user_data')
  return user ? JSON.parse(user) : null
}

/**
 * Save user to localStorage
 */
export const saveUserData = (userData: any) => {
  localStorage.setItem('user_data', JSON.stringify(userData))
  localStorage.setItem('user_token', 'token_' + Date.now())
}

/**
 * Clear user data from localStorage
 */
export const clearUserData = () => {
  localStorage.removeItem('user_data')
  localStorage.removeItem('user_token')
}

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate password strength
 */
export const isStrongPassword = (password: string): boolean => {
  return password.length >= 8
}

/**
 * Format date to readable string
 */
export const formatDate = (date: string | Date): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Debounce function for search
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}
