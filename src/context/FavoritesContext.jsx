import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const FavoritesContext = createContext(null)

const STORAGE_KEY = 'derakhshan-pro-favorites'
const COMPARE_KEY = 'derakhshan-pro-compare'

function readList(key) {
  try {
    const raw = localStorage.getItem(key)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => readList(STORAGE_KEY))
  const [compare, setCompare] = useState(() => readList(COMPARE_KEY))

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem(COMPARE_KEY, JSON.stringify(compare))
  }, [compare])

  const value = useMemo(
    () => ({
      favorites,
      compare,
      isFavorite: (id) => favorites.includes(id),
      isCompared: (id) => compare.includes(id),
      toggleFavorite: (id) => {
        setFavorites((prev) =>
          prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
        )
      },
      toggleCompare: (id) => {
        setCompare((prev) => {
          if (prev.includes(id)) return prev.filter((x) => x !== id)
          if (prev.length >= 3) return [...prev.slice(1), id]
          return [...prev, id]
        })
      },
      clearCompare: () => setCompare([]),
      clearFavorites: () => setFavorites([]),
    }),
    [favorites, compare],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}
