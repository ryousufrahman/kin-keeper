import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout'
import Timeline from './Components/Pages/Timeline/Timeline'
import Home from './Components/Pages/Home/Home'
import Stats from './Components/Pages/State/Stats'

const router =createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout> ,
    children : [
     {
      index : true ,
      element : <Home></Home>
     } ,
     {
        path : '/home' ,
        element : <Home></Home>
     },
     {
      path : '/timeline',
      element : <Timeline></Timeline>
     } ,
     {
      path : '/stats' ,
      element  : <Stats></Stats>
     }

    ]
  }



])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
