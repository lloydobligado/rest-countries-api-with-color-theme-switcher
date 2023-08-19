import React from 'react'
import Navbar from './components/nav/navbar'
import { Route, Routes } from "react-router-dom";
import { ROUTES } from './utils/constants'
import HomePage from './pages/home/home';
import CountryInformationPage from './pages/country-information/country-information';
import NotFound from './pages/not-found/not-found';
import RegionPage from './pages/region/region';

const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage/>} />
          <Route path={ROUTES.REGION} element={<RegionPage/>} />
          <Route path={ROUTES.INFORMATION} element={<CountryInformationPage/>} />
          <Route path={ROUTES.ERROR} element={<NotFound/>} />
        </Routes>
    </>
  )
}

export default App
