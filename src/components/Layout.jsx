import { Outlet, ScrollRestoration } from 'react-router-dom'
import CompareTray from './CompareTray'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        پرش به محتوای اصلی
      </a>
      <Header />
      <main id="main" className="page-main">
        <Outlet />
      </main>
      <Footer />
      <CompareTray />
      <ScrollRestoration />
    </>
  )
}
