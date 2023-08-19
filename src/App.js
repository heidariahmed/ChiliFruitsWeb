import React, {useEffect}  from 'react';
import ChiliFruitList from './ChiliFruitList';
import UpdateQuantity from './UpdateQuantity';
import {Route, Routes } from "react-router-dom"
import useMediaQuery from '@mui/material/useMediaQuery';
import About from "./pages/About"
import Navbar from './Navbar';
import {setDarkMode} from './darkMode'

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme) {
    currentTheme = prefersDarkMode ? 'dark' : 'light';
  }
  setDarkMode(currentTheme);
  
  useEffect(() => {
    setDarkMode(prefersDarkMode ? 'dark' : 'light');
  },[prefersDarkMode])
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<ChiliFruitList />}/>
      <Route path="/update/:chiliFruitId" element={<UpdateQuantity />} />
      <Route path="/update" element={<UpdateQuantity />} />
      <Route path="/about" element={<About/>} />
      </Routes>

    </>
  );
}

export default App;