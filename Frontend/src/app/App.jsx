import { RouterProvider } from 'react-router'
import { routes } from './app.routes.jsx'
import './App.css'

const App = () => (
  <RouterProvider router={routes} />
)

export default App
