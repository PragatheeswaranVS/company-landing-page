import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutMore from './components/AboutMore.jsx'
import MoreServices from './components/MoreService.jsx'
import Contact from "./components/Contact.jsx"
import ErrorPage from './components/ErrorPage.jsx'


const router =createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement:<ErrorPage/>
  },
  {
    path : "/About",
    element : <AboutMore/>
  },
  {
    path : "/Service",
    element : <MoreServices/>
  },
  {
    path : "/Contact",
    element : <Contact/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}/>
  </StrictMode>,
)
