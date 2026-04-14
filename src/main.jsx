import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout'
import Timeline from './Components/Pages/Timeline/Timeline'
import Home from './Components/Pages/Home/Home'
import Stats from './Components/Pages/State/Stats'
import GlobalContext from './GlobalContext/GlobalContext'
import DetailsFriends from './Components/AllFriends/DetailsFriends'

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
     } ,
     {
      path : 'friendsDetails/:id',
      element : <DetailsFriends></DetailsFriends>
     }

    ]
  }



])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContext>
      <RouterProvider router={router}></RouterProvider>
    </GlobalContext>
  </StrictMode>,
)
