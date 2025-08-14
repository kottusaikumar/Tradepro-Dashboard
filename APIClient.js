// API Client for backend communication
class APIClient {
  constructor(baseURL = "/api") {
    this.baseURL = baseURL
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error)
      throw error
    }
  }

  async getSymbols() {
    return this.get("/symbols")
  }

  async getFeatures() {
    return this.get("/features")
  }

  async getChartData(symbol, timeframe, pane1, pane2) {
    const params = new URLSearchParams({
      symbol,
      timeframe,
      pane1: pane1 || "CurrentPrice",
      pane2: pane2 || "AllExchangesVolume",
    })
    return this.get(`/chart-data?${params}`)
  }

  async getHealth() {
    return this.get("/health")
  }
}

// Data processing utilities
export class DataProcessor {
  static formatPrice(price) {
    if (price === null || price === undefined) return "0.00"
    return Number.parseFloat(price).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  static formatChange(change, changePercent) {
    const sign = change >= 0 ? "+" : ""
    const formattedChange = this.formatPrice(Math.abs(change))
    const formattedPercent = Math.abs(changePercent).toFixed(2)
    return `${sign}${formattedChange} (${sign}${formattedPercent}%)`
  }

  static formatVolume(volume) {
    if (volume === null || volume === undefined) return "0"
    if (volume >= 1000000) {
      return (volume / 1000000).toFixed(1) + "M"
    } else if (volume >= 1000) {
      return (volume / 1000).toFixed(1) + "K"
    }
    return volume.toFixed(0)
  }
}

// Storage utility for user preferences
export class Storage {
  static set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error("Storage set error:", error)
    }
  }

  static get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error("Storage get error:", error)
      return defaultValue
    }
  }
}

// Utility functions
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export default APIClient
