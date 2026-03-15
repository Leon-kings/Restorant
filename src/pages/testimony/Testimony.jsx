// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Box,
//   Typography,
//   Avatar,
//   Paper,
//   useTheme,
//   Hidden,
// } from "@mui/material";
// import { FormatQuote } from "@mui/icons-material";

// export const Testimonial = () => {
//   const theme = useTheme();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Plio Dorak",
//       avatar:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
//       quote:
//         "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       avatar:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
//       quote:
//         "The service was absolutely fantastic! I couldn't be happier with the results. The team went above and beyond to capture our special moments in the most beautiful way possible.",
//     },
//     {
//       id: 3,
//       name: "Michael Johnson",
//       avatar:
//         "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
//       quote:
//         "Professional, creative, and attentive to detail. The photos exceeded all my expectations and I would highly recommend their services to anyone looking for quality photography.",
//     },
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) =>
//         prev === testimonials.length - 1 ? 0 : prev + 1
//       );
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <>
//       <div className="w-full bg-gray-800 rounded-2xl mx-0 mt-4 mb-2 text-white">
//         <Box component="section" className="py-10 text-white">
//           <Box
//             sx={{
//               position: "relative",
//               zIndex: 1,
//               maxWidth: "lg",
//               mx: "auto",
//               px: { xs: 2, sm: 4 },
//             }}
//           >
//             {/* Heading Section */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 mb: { xs: 6, md: 8 },
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, x: 0 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="w-full mx-0"
//               >
//                 <Typography
//                   variant="h3"
//                   className="text-white"
//                   component="h2"
//                   sx={{
//                     mb: 2,
//                     fontWeight: "bold",
//                   }}
//                 >
//                   What Says Customer
//                 </Typography>
//                 <Typography variant="body1" className="text-white">
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page
//                 </Typography>
//               </motion.div>
//             </Box>

//             {/* Testimonial Content */}
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: { xs: "column", lg: "row" },
//                 gap: 4,
//               }}
//             >
//               {/* Testimonial Carousel */}
//               <>
//                 <div className="bg-gray-700 p-8 mx-auto max-w-2xl text-center">
//                   <Paper
//                     elevation={3}
//                     sx={{
//                       borderRadius: 4,
//                       p: { xs: 3, md: 4 },
//                       position: "relative",
//                       height: "100%",
//                     }}
//                   >
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={currentSlide}
//                         className="bg-white rounded-lg shadow-lg p-8 mx-0 max-w-3xl "
//                         initial={{ opacity: 0, x: 0,scale:1 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           alignItems: "center",
//                           gap: theme.spacing(3),
//                           [theme.breakpoints.up("md")]: {
//                             flexDirection: "row",
//                             alignItems: "center",
//                           },
//                         }}
//                       >
//                         <Avatar
//                           src={testimonials[currentSlide].avatar}
//                           alt={testimonials[currentSlide].name}
//                           sx={{
//                             width: { xs: 96, md: 128 },
//                             height: { xs: 96, md: 128 },
//                             flexShrink: 0,
//                           }}
//                         />
//                         <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
//                           <Typography
//                             variant="h6"
//                             component="h4"
//                             sx={{
//                               fontWeight: "bold",
//                               mb: 1,
//                               color: "text.primary",
//                             }}
//                           >
//                             {testimonials[currentSlide].name}
//                           </Typography>
//                           <Box sx={{ position: "relative" }}>
//                             <FormatQuote
//                               sx={{
//                                 position: "absolute",
//                                 top: -24,
//                                 left: -8,
//                                 fontSize: 32,
//                                 opacity: 0.2,
//                                 color: "text.secondary",
//                               }}
//                             />
//                             <Typography
//                               variant="body1"
//                               sx={{
//                                 fontStyle: "italic",
//                                 color: "text.secondary",
//                               }}
//                             >
//                               {testimonials[currentSlide].quote}
//                             </Typography>
//                             <FormatQuote
//                               sx={{
//                                 position: "absolute",
//                                 bottom: -24,
//                                 right: -8,
//                                 fontSize: 32,
//                                 opacity: 0.2,
//                                 color: "text.secondary",
//                                 transform: "rotate(180deg)",
//                               }}
//                             />
//                           </Box>
//                         </Box>
//                       </motion.div>
//                     </AnimatePresence>
//                   </Paper>
//                 </div>
//               </>

//               {/* Camera Image - Hidden on small screens */}
//             </Box>
//           </Box>
//         </Box>
//       </div>
//     </>
//   );
// };

















/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Material Icons
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Critic",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      quote:
        "The culinary experience at Gourmet is simply unparalleled. Every dish tells a story of passion and precision. The attention to detail and quality of ingredients makes this my go-to restaurant for special occasions.",
      rating: 5,
      date: "March 2024",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
      quote:
        "I've been dining here for years and the consistency in quality is remarkable. The service is impeccable and the atmosphere is always inviting. Highly recommended for anyone seeking an exceptional dining experience.",
      rating: 5,
      date: "February 2024",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Event Planner",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      quote:
        "As an event planner, I've worked with many restaurants, but Gourmet stands out. Their team goes above and beyond to ensure every detail is perfect. The private dining space is absolutely stunning.",
      rating: 5,
      date: "January 2024",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Wine Enthusiast",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      quote:
        "The wine selection here is extraordinary. The sommelier's recommendations perfectly complement the chef's creations. A true gem for food and wine lovers alike.",
      rating: 5,
      date: "December 2023",
      verified: true
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrevious = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <section className="w-full bg-black rounded-2xl mt-4 mb-2 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-amber-500/20">
        <FormatQuoteIcon sx={{ fontSize: 120 }} />
      </div>
      <div className="absolute bottom-20 right-10 text-amber-500/20 transform rotate-180">
        <FormatQuoteIcon sx={{ fontSize: 120 }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-amber-500">Customers Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
            about their dining experiences at Gourmet.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Main Testimonial Section */}
        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-800 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Avatar Section */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-md opacity-50"></div>
                      <img
                        src={testimonials[currentSlide].avatar}
                        alt={testimonials[currentSlide].name}
                        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-amber-500"
                      />
                    </motion.div>
                    
                    {/* Verified Badge */}
                    {testimonials[currentSlide].verified && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1"
                      >
                        <VerifiedIcon className="text-white text-sm" />
                      </motion.div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating Stars */}
                    <div className="flex justify-center md:justify-start mb-3">
                      {[...Array(5)].map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {index < testimonials[currentSlide].rating ? (
                            <StarIcon className="text-amber-500" />
                          ) : (
                            <StarBorderIcon className="text-amber-500" />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <FormatQuoteIcon className="text-amber-500/30 text-4xl mb-2" />

                    {/* Quote Text */}
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 italic">
                      "{testimonials[currentSlide].quote}"
                    </p>

                    {/* Author Info */}
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-amber-500 text-sm">
                        {testimonials[currentSlide].role}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {testimonials[currentSlide].date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-amber-500 transition-colors border border-gray-700"
              >
                <ArrowBackIcon />
              </motion.button>
              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-amber-500 transition-colors border border-gray-700"
              >
                <ArrowForwardIcon />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-amber-500'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
          >
            {[
              { icon: <PersonIcon />, value: "500+", label: "Happy Customers" },
              { icon: <RestaurantIcon />, value: "50+", label: "Menu Items" },
              { icon: <LocalDiningIcon />, value: "4.8", label: "Average Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center"
              >
                <div className="text-amber-500 text-3xl mb-2">{stat.icon}</div>
                <div className="text-white text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {['Google Reviews', 'TripAdvisor', 'Michelin Guide', 'Zagat'].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-900 rounded-full border border-gray-800"
              >
                <span className="text-gray-400 text-sm">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};