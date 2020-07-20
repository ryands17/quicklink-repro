import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { withQuicklink } from 'quicklink/dist/react/hoc.js'
import { NavLink } from 'react-router-dom'

export const routes = {
  home: {
    path: '/',
    element: withQuicklink(React.lazy(() => import('pages/home'))),
  },
  about: {
    path: '/about',
    element: withQuicklink(React.lazy(() => import('pages/about'))),
  },
  contact: {
    path: '/contact',
    element: withQuicklink(React.lazy(() => import('pages/contact'))),
  },
}

const routeEntries = Object.values(routes)

const Routes = () => {
  const renderRoutes = useRoutes(
    routeEntries.map((route) => ({
      path: route.path,
      element: <route.element />,
    }))
  )
  return renderRoutes
}

const Nav = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <NavLink to={routes.home.path}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.about.path}>About</NavLink>
        </li>
        <li>
          <NavLink to={routes.contact.path}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <h1>Quicklink</h1>
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App
