import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import PapersPage from './ui/pages/PapersPage'
import NewsPage from './ui/pages/NewsPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <PapersPage />
  },
  {
    path: "/news",
    element: <NewsPage />
  }
], { basename: import.meta.env.DEV ? '/' : '/filters-test/' });


function App() {
  return <RouterProvider router={router} />
}

export default App
