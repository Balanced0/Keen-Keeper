import './App.css'
import { Outlet } from "react-router";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';

export const timelineContext = createContext();

function App() {

  const[calls, setCalls] = useState([]);
  const[texts, setTexts] = useState([]);
  const[videos, setVideos] = useState([]);
  const[tl, setTl] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <timelineContext.Provider value={{calls, setCalls, texts, setTexts, videos, setVideos, tl, setTl}}>
        <Outlet></Outlet>
      </timelineContext.Provider>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
