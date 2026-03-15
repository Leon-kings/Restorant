// import React from "react";
// import "./App.css";
// import { Navbar } from "./components/nav/Navbar";
// import { Services } from "./pages/services/Services";
// import { About } from "./pages/about/About";
// import { FoodMenu } from "./pages/menu/Menu";
// import { Reservation } from "./pages/reservation/Reservation";
// import { Testimonial } from "./pages/testimony/Testimony";
// import { OurTeam } from "./pages/team/Team";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
// import { Footer } from "./components/footer/Footer";

// export default function App() {
//   return (
//     <>
//       <div className="w-full">
//         {/* <Loading/> */}
//         <BrowserRouter>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/menu" element={<FoodMenu />} />
//             <Route path="/testimony" element={<Testimonial />} />
//             <Route path="/R-664/099" element={<Reservation />} />
//             <Route path="/O-290/648" element={<OurTeam />} />
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }










import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/nav/Navbar";
import { Services } from "./pages/services/Services";
import { About } from "./pages/about/About";
import { FoodMenu } from "./pages/menu/Menu";
import { Reservation } from "./pages/reservation/Reservation";
import { Testimonial } from "./pages/testimony/Testimony";
import { OurTeam } from "./pages/team/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="w-full relative">
        {/* <Loading/> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/menu" element={<FoodMenu />} />
            <Route path="/testimony" element={<Testimonial />} />
            <Route path="/R-664/099" element={<Reservation />} />
            <Route path="/O-290/648" element={<OurTeam />} />
          </Routes>
          <Footer />
          
          {/* Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Back to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          )}
        </BrowserRouter>
      </div>
    </>
  );
}