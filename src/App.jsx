import { useState } from 'react'
import MainPage from './pages/MainPage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 

  return (
    <>
    <ToastContainer position='top-left' autoClose={2000}/>
     <MainPage/>
    </>
  )
}

export default App
