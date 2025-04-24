import { Toaster } from 'react-hot-toast'
import './App.css'
import { router } from './Routes/AppRoutes.jsx'
import { RouterProvider } from 'react-router'



function App() {

  return (
    <>
    <Toaster></Toaster>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
