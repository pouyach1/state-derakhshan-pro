import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Compare from './pages/Compare'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'properties', element: <Properties /> },
      { path: 'properties/:slug', element: <PropertyDetail /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'compare', element: <Compare /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
