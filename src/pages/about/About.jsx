// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Button,
//   useMediaQuery,
// } from "@mui/material";
// import { motion, useAnimation } from "framer-motion";
// import { Restaurant } from "@mui/icons-material";
// import CountUp from "react-countup";
// import about from "../../assets/image/other/about1.jpg";
// import about1 from "../../assets/image/other/about-3.jpg";
// import about2 from "../../assets/image/other/about-4.jpg";
// export const About = () => {
//   const [counterStarted, setCounterStarted] = useState(false);
//   const controls = useAnimation();
//   const isMobile = useMediaQuery("(max-width:900px)");

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 500 && !counterStarted) {
//         setCounterStarted(true);
//         controls.start("visible");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [controls, counterStarted]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       scale: 1.03,
//       transition: { duration: 0.3 },
//     },
//   };

//   const stats = [
//     { value: 15, label: "Years of", sublabel: "Experience" },
//     { value: 50, label: "Popular", sublabel: "Master Chefs" },
//   ];

//   const images = [
//     { id: 1, delay: 0.1, position: "top-left", width: "100%", image: about },
//     {
//       id: 2,
//       delay: 0.3,
//       position: "top-right",
//       width: "75%",
//       margin: "25% 0 0 25%",
//       image: about1,
//     },
//     { id: 3, delay: 0.5, position: "bottom-left", width: "75%", image: about2 },
//     {
//       id: 4,
//       delay: 0.7,
//       position: "bottom-right",
//       width: "100%",
//       image: about,
//     },
//   ];

//   return (
//     <Box className="py-16 mt-4 mb-2 rounded-2xl md:py-20 lg:py-24 text-white bg-gray-800">
//       <Container maxWidth="xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
//           {/* Image Gallery */}
//           <Grid item xs={12} lg={6} order={isMobile ? 2 : 1}>
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={containerVariants}
//               className="grid grid-cols-2 gap-4"
//             >
//               {images.map((img) => (
//                 <motion.div
//                   key={img.id}
//                   variants={imageVariants}
//                   custom={img.delay}
//                   whileHover="hover"
//                   className={`relative overflow-hidden rounded-xl shadow-md ${
//                     img.position.includes("left")
//                       ? "justify-self-start"
//                       : "justify-self-end"
//                   }`}
//                   style={{
//                     width: img.width,
//                     margin: img.margin || "0",
//                   }}
//                 >
//                   <img
//                     src={img.image}
//                     alt="Restaurant"
//                     className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500"
//                     style={{ aspectRatio: "1/1" }}
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </Grid>

//           {/* Content */}
//           <Grid item xs={12} lg={6} order={isMobile ? 1 : 2}>
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={containerVariants}
//             >
//               <motion.div variants={itemVariants}>
//                 <Typography
//                   variant="subtitle1"
//                   className="text-primary font-semibold uppercase tracking-wider mb-2"
//                 >
//                   About Us
//                 </Typography>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <Typography
//                   variant="h2"
//                   className="text-4xl md:text-5xl font-bold text-white mb-6"
//                 >
//                   Welcome to <Restaurant className="text-blue-200 mx-2" />{" "}
//                 </Typography>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <Typography className="text-white pt-8 mb-4 text-lg">
//                   Our Heaven Restaurant is constantly evolving its culinary
//                   approaches with one central theme: modern African cuisine with
//                   local Rwandan ingredients.
//                 </Typography>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <Typography className="text-white pt-6 mb-8 text-lg">
//                   Experience our Afro fusion cuisine at the boho restaurant,
//                   offering stunning views, laid-back vibes, and a perfect
//                   setting for your next business lunch.
//                 </Typography>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <Grid container spacing={3} className="pt-8 mb-8">
//                   {stats.map((stat, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <motion.div
//                         whileHover={{ y: -5 }}
//                         className="flex items-center border-l-4 border-primary pl-4 py-3 h-full bg-gray-50 rounded-r-lg"
//                       >
//                         <Typography
//                           variant="h3"
//                           className="text-primary text-4xl font-bold min-w-[60px]"
//                         >
//                           <CountUp
//                             end={stat.value}
//                             duration={2.5}
//                             className="text-black"
//                             start={counterStarted ? 0 : stat.value}
//                           />
//                         </Typography>
//                         <Box className="ml-4">
//                           <Typography className="text-gray-600">
//                             {stat.label}
//                           </Typography>
//                           <Typography
//                             variant="h6"
//                             className="uppercase font-bold text-gray-800"
//                           >
//                             {stat.sublabel}
//                           </Typography>
//                         </Box>
//                       </motion.div>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-full shadow-lg text-lg font-bold"
//                 >
//                   Read More
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </Grid>
//         </div>
//       </Container>
//     </Box>
//   );
// };

























/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Material Icons
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import WineBarIcon from '@mui/icons-material/WineBar';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CakeIcon from '@mui/icons-material/Cake';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CountUp from "react-countup";

import about from "../../assets/image/other/about1.jpg";
import about1 from "../../assets/image/other/about-3.jpg";
import about2 from "../../assets/image/other/about-4.jpg";

export const About = () => {
  const [counterStarted, setCounterStarted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !counterStarted) {
        setCounterStarted(true);
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, counterStarted]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Enhanced stats with more information
  const stats = [
    { 
      id: 1,
      value: 15, 
      label: "Years of", 
      sublabel: "Experience",
      icon: <EmojiEventsIcon className="text-amber-500" />,
      color: "from-amber-500 to-yellow-500"
    },
    { 
      id: 2,
      value: 50, 
      label: "Expert", 
      sublabel: "Master Chefs",
      icon: <PeopleIcon className="text-amber-500" />,
      color: "from-blue-500 to-blue-600"
    },
    { 
      id: 3,
      value: 200, 
      label: "Unique", 
      sublabel: "Menu Items",
      icon: <RestaurantMenuIcon className="text-amber-500" />,
      color: "from-green-500 to-green-600"
    },
    { 
      id: 4,
      value: 25, 
      label: "Industry", 
      sublabel: "Awards Won",
      icon: <StarIcon className="text-amber-500" />,
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Images with unique IDs
  const images = [
    { 
      id: 'img-1', 
      delay: 0.1, 
      position: "top-left", 
      width: "100%", 
      image: about,
      alt: "Restaurant Interior"
    },
    { 
      id: 'img-2',
      delay: 0.3, 
      position: "top-right", 
      width: "75%", 
      margin: "25% 0 0 25%", 
      image: about1,
      alt: "Chef Preparing Food"
    },
    { 
      id: 'img-3', 
      delay: 0.5, 
      position: "bottom-left", 
      width: "75%", 
      image: about2,
      alt: "Gourmet Dish"
    },
    { 
      id: 'img-4', 
      delay: 0.7, 
      position: "bottom-right", 
      width: "100%", 
      image: about,
      alt: "Restaurant Ambiance"
    },
  ];

  // Restaurant highlights
  const highlights = [
    { id: 'high-1', icon: <LocalDiningIcon />, text: "Farm-to-Table Freshness" },
    { id: 'high-2', icon: <WineBarIcon />, text: "Premium Wine Selection" },
    { id: 'high-3', icon: <CelebrationIcon />, text: "Private Event Space" },
    { id: 'high-4', icon: <FastfoodIcon />, text: "Dietary Accommodations" }
  ];

  // Operating hours
  const hours = [
    { id: 'hour-1', day: "Monday - Thursday", time: "11:00 AM - 10:00 PM" },
    { id: 'hour-2', day: "Friday - Saturday", time: "11:00 AM - 11:00 PM" },
    { id: 'hour-3', day: "Sunday", time: "10:00 AM - 9:00 PM" }
  ];

  return (
    <section className="py-16 mt-4 mb-2 rounded-2xl bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((img) => (
                <motion.div
                  key={img.id}
                  variants={imageVariants}
                  custom={img.delay}
                  whileHover="hover"
                  className={`relative overflow-hidden rounded-xl shadow-2xl ${
                    img.position.includes("left")
                      ? "justify-self-start"
                      : "justify-self-end"
                  }`}
                  style={{
                    width: img.width,
                    margin: img.margin || "0",
                  }}
                >
                  <div className="relative group">
                    <img
                      src={img.image}
                      alt={img.alt}
                      className="w-full h-auto object-cover rounded-xl"
                      style={{ aspectRatio: "1/1" }}
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">{img.alt}</p>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/50 rounded-tr-xl transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-yellow-500 p-4 rounded-full shadow-xl hidden lg:block"
            >
              <RestaurantIcon className="text-white text-3xl" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="order-1 lg:order-2"
          >
            {/* Section Label */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold mb-4">
                About Us
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Gourmet
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Our Heaven Restaurant is constantly evolving its culinary
                approaches with one central theme: modern African cuisine with
                local Rwandan ingredients. We blend tradition with innovation
                to create unforgettable dining experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Experience our Afro fusion cuisine at our boho restaurant,
                offering stunning views, laid-back vibes, and a perfect
                setting for your next business lunch or special celebration.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlights.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <span className="text-amber-500">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} bg-opacity-20 rounded-lg flex items-center justify-center mb-2`}>
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        start={counterStarted ? 0 : stat.value}
                      />
                    </h3>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                    <p className="text-white text-sm font-semibold">{stat.sublabel}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trust Badge */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 flex items-center space-x-4 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-1">
                <CheckCircleIcon className="text-green-500 text-sm" />
                <span>Safety Certified</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircleIcon className="text-green-500 text-sm" />
                <span>Hygiene First</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircleIcon className="text-green-500 text-sm" />
                <span>Quality Assured</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};