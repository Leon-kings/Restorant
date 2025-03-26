import React from "react";
import "./App.css";
import { Loading } from "./components/loading/Loading";
import { Navbar } from "./components/nav/Navbar";
import { Services } from "./pages/services/Services";
import { About } from "./pages/about/About";
import { FoodMenu } from "./pages/menu/Menu";
import { Reservation } from "./pages/reservation/Reservation";
import Hero from "./components/hero/Hero";
import { Testimonial } from "./pages/testimony/Testimony";
import { OurTeam } from "./pages/team/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <div className="w-full">
        {/* <Loading/> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A-234/884" element={<About />} />
            <Route path="/S-164/856" element={<Services />} />
            <Route path="/M-278/893" element={<FoodMenu />} />
            <Route path="/T-748/092" element={<Testimonial />} />
            <Route path="/R-664/099" element={<Reservation />} />
            <Route path="/O-290/648" element={<OurTeam />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
