import axios, { AxiosInstance, AxiosError } from 'axios'

/**
 * API Client for making HTTP requests
 */
class APIClient {
  private client: AxiosInstance

  constructor(baseURL: string = process.env.NEXT_PUBLIC_API_URL || '/api') {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Add token to requests if available
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('user_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    // Handle errors
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('user_token')
          localStorage.removeItem('user_data')
          window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
  }

  /**
   * GET request
   */
  async get<T>(url: string, config?: any): Promise<T> {
    try {
      const response = await this.client.get<T>(url, config)
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  /**
   * POST request
   */
  async post<T>(url: string, data?: any, config?: any): Promise<T> {
    try {
      const response = await this.client.post<T>(url, data, config)
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  /**
   * PUT request
   */
  async put<T>(url: string, data?: any, config?: any): Promise<T> {
    try {
      const response = await this.client.put<T>(url, data, config)
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  /**
   * DELETE request
   */
  async delete<T>(url: string, config?: any): Promise<T> {
    try {
      const response = await this.client.delete<T>(url, config)
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  /**
   * Handle request errors
   */
  private handleError(error: any): Error {
    if (error.response) {
      return new Error(
        error.response.data?.message || `Error: ${error.response.status}`
      )
    }
    if (error.request) {
      return new Error('No response from server')
    }
    return new Error(error.message || 'Request failed')
  }
}

export const apiClient = new APIClient()

/**
 * API Methods for tiles
 */
export const tilesAPI = {
  /**
   * Get all tiles
   */
  getAllTiles: async (params?: any) => {
    return apiClient.get('/tiles', { params })
  },

  /**
   * Get single tile by ID
   */
  getTileById: async (id: string) => {
    return apiClient.get(`/tiles/${id}`)
  },

  /**
   * Search tiles
   */
  searchTiles: async (query: string) => {
    return apiClient.get('/tiles/search', { params: { q: query } })
  },

  /**
   * Get featured tiles
   */
  getFeaturedTiles: async () => {
    return apiClient.get('/tiles/featured')
  },
}

/**
 * API Methods for authentication
 */
export const authAPI = {
  /**
   * User login
   */
  login: async (email: string, password: string) => {
    return apiClient.post('/auth/login', { email, password })
  },

  /**
   * User registration
   */
  register: async (userData: any) => {
    return apiClient.post('/auth/register', userData)
  },

  /**
   * Google login
   */
  googleLogin: async (token: string) => {
    return apiClient.post('/auth/google', { token })
  },

  /**
   * Logout
   */
  logout: async () => {
    return apiClient.post('/auth/logout')
  },

  /**
   * Get current user
   */
  getCurrentUser: async () => {
    return apiClient.get('/auth/me')
  },
}

/**
 * API Methods for user profile
 */
export const userAPI = {
  /**
   * Get user profile
   */
  getProfile: async (userId: string) => {
    return apiClient.get(`/users/${userId}`)
  },

  /**
   * Update user profile
   */
  updateProfile: async (userId: string, data: any) => {
    return apiClient.put(`/users/${userId}`, data)
  },

  /**
   * Update user avatar
   */
  updateAvatar: async (userId: string, photoUrl: string) => {
    return apiClient.put(`/users/${userId}/avatar`, { photoUrl })
  },
}
