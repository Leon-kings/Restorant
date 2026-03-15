// /* eslint-disable no-unused-vars */
// import { Restaurant } from "@mui/icons-material";
// import { Box, Button, Container, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import React from "react";
// import hero from "../../assets/image/other/hero.png";
// export default function Hero() {
//   return (
//     <>
//       {/* Hero Section */}
//       <Box className="hero mt-4 mb-2 rounded-2xl bg-gray-900 py-16 md:py-24 lg:py-32">
//         <Container maxWidth="xl">
//           <Box className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
//             <motion.div
//               initial={{ x: 0, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="md:w-1/2 text-center md:text-left"
//             >
//               <Typography
//                 variant="h2"
//                 component="h1"
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
//               >
//                 Enjoy Our
//                 <br />
//                 <span className="text-amber-500">Delicious Meal</span>
//               </Typography>
//               <Typography
//                 variant="body1"
//                 className="text-white mb-8 text-lg max-w-lg"
//               >
//                 Food, substance consisting essentially of protein, carbohydrate,
//                 fat, and other nutrients used in the body of an organism to
//                 sustain growth and vital processes and to furnish energy.
//               </Typography>
//               <Box className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     variant="contained"
//                     size="large"
//                     className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg"
//                   >
//                     Book A Table
//                   </Button>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     variant="outlined"
//                     size="large"
//                     className="border-amber-500 text-amber-500 hover:bg-amber-500/10 font-bold py-3 px-8 rounded-full shadow-lg text-lg"
//                   >
//                     View Menu
//                   </Button>
//                 </motion.div>
//               </Box>
//             </motion.div>

//             <motion.div
//               initial={{ x: 0, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="md:w-1/2 relative"
//             >
//               <motion.div
//                 animate={{
//                   y: [0, -15, 0],
//                   transition: {
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//                 className="relative"
//               >
//                 <img
//                   src={hero}
//                   alt=""
//                   className="w-full max-w-xl mx-auto rounded-lg shadow-2xl"
//                 />
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.8 }}
//                   className="absolute -bottom-6 -right-6 bg-amber-500 p-4 rounded-full shadow-xl"
//                 >
//                   <Restaurant className="text-white text-3xl" />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// }

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/image/other/hero.png";

// Import icons from MUI
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CloseIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import WineBarIcon from "@mui/icons-material/WineBar";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import DinnerDiningIcon2 from "@mui/icons-material/DinnerDining";
import Close from "@mui/icons-material/Close";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Error from "@mui/icons-material/Error";

export const Hero = ({ onOpenModal }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState({ booking: false, contact: false });

  // Form states
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "regular",
    requests: "",
  });

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  // Menu items
  const menuCategories = [
    {
      name: "Appetizers",
      icon: <LocalDiningIcon className="text-amber-500" />,
      items: [
        {
          name: "Bruschetta",
          price: "$8.99",
          description: "Grilled bread with tomatoes, garlic, and basil",
        },
        {
          name: "Calamari Fritti",
          price: "$12.99",
          description: "Crispy fried calamari with marinara sauce",
        },
        {
          name: "Stuffed Mushrooms",
          price: "$10.99",
          description: "Mushrooms stuffed with cheese and herbs",
        },
        {
          name: "Garlic Bread",
          price: "$5.99",
          description: "Toasted bread with garlic butter",
        },
      ],
    },
    {
      name: "Main Course",
      icon: <RestaurantIcon className="text-amber-500" />,
      items: [
        {
          name: "Grilled Salmon",
          price: "$24.99",
          description: "Fresh salmon with lemon butter sauce",
        },
        {
          name: "Ribeye Steak",
          price: "$32.99",
          description: "12oz ribeye with roasted vegetables",
        },
        {
          name: "Chicken Parmesan",
          price: "$18.99",
          description: "Breaded chicken with marinara and cheese",
        },
        {
          name: "Vegetable Lasagna",
          price: "$16.99",
          description: "Layers of pasta with vegetables and cheese",
        },
      ],
    },
    {
      name: "Pasta",
      icon: <LunchDiningIcon className="text-amber-500" />,
      items: [
        {
          name: "Spaghetti Carbonara",
          price: "$15.99",
          description: "Creamy sauce with bacon and egg",
        },
        {
          name: "Fettuccine Alfredo",
          price: "$16.99",
          description: "Creamy parmesan sauce",
        },
        {
          name: "Penne Arrabbiata",
          price: "$14.99",
          description: "Spicy tomato sauce",
        },
        {
          name: "Ravioli",
          price: "$17.99",
          description: "Stuffed pasta with marinara sauce",
        },
      ],
    },
    {
      name: "Pizza",
      icon: <LocalPizzaIcon className="text-amber-500" />,
      items: [
        {
          name: "Margherita",
          price: "$14.99",
          description: "Tomato sauce, mozzarella, basil",
        },
        {
          name: "Pepperoni",
          price: "$16.99",
          description: "Tomato sauce, mozzarella, pepperoni",
        },
        {
          name: "Quattro Formaggi",
          price: "$18.99",
          description: "Four cheese pizza",
        },
        {
          name: "Vegetarian",
          price: "$15.99",
          description: "Assorted vegetables",
        },
      ],
    },
    {
      name: "Desserts",
      icon: <IcecreamIcon className="text-amber-500" />,
      items: [
        {
          name: "Tiramisu",
          price: "$7.99",
          description: "Classic Italian dessert",
        },
        {
          name: "Cheesecake",
          price: "$6.99",
          description: "New York style cheesecake",
        },
        {
          name: "Chocolate Lava Cake",
          price: "$8.99",
          description: "Warm chocolate cake with molten center",
        },
        {
          name: "Gelato",
          price: "$5.99",
          description: "Italian ice cream, assorted flavors",
        },
      ],
    },
    {
      name: "Beverages",
      icon: <WineBarIcon className="text-amber-500" />,
      items: [
        { name: "House Wine", price: "$8.99", description: "Red or white" },
        {
          name: "Craft Beer",
          price: "$6.99",
          description: "Local craft beer selection",
        },
        {
          name: "Soft Drinks",
          price: "$2.99",
          description: "Coca-Cola products",
        },
        {
          name: "Fresh Juice",
          price: "$4.99",
          description: "Orange, apple, or cranberry",
        },
      ],
    },
  ];

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, booking: true }));
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setModalMessage(
        "Table booked successfully! A confirmation has been sent to your email.",
      );
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setShowBookingModal(false);
        setBookingData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          occasion: "regular",
          requests: "",
        });
      }, 2000);
    } catch (error) {
      setModalMessage("Booking failed. Please try again.");
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
    } finally {
      setLoading((prev) => ({ ...prev, booking: false }));
    }
  };

  const handleContact = async (e) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, contact: true }));
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setModalMessage("Message sent successfully! We'll get back to you soon.");
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setShowContactModal(false);
        setContactData({ name: "", email: "", message: "" });
      }, 2000);
    } catch (error) {
      setModalMessage("Failed to send message. Please try again.");
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
    } finally {
      setLoading((prev) => ({ ...prev, contact: false }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero mt-4 mb-2 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold mb-4">
                  Welcome to Gourmet
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Enjoy Our
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Delicious Meal
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-300 mb-8 text-lg max-w-lg mx-auto md:mx-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Experience exceptional dining with our exquisite cuisine crafted
                by world-class chefs. Every dish tells a story of passion,
                quality, and tradition.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setShowBookingModal(true)}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg flex items-center justify-center space-x-2 group"
                >
                  <EventIcon className="group-hover:rotate-12 transition-transform" />
                  <span>Book A Table</span>
                </motion.button>

                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setShowMenuModal(true)}
                  className="border-2 bg-gradient-to-b from-green-400 to-green-600 font-bold py-4 px-8 rounded-full shadow-lg text-lg flex items-center justify-center space-x-2"
                >
                  <MenuBookIcon />
                  <span>View Menu</span>
                </motion.button>

                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setShowContactModal(true)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg flex items-center justify-center space-x-2"
                >
                  <ContactMailIcon />
                  <span>Contact Us</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto md:mx-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { value: "50+", label: "Dishes" },
                  { value: "200+", label: "Seats" },
                  { value: "4.8", label: "Rating" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-amber-500">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative"
              >
                <img
                  src={hero}
                  alt="Delicious Food"
                  className="w-full max-w-xl mx-auto rounded-2xl shadow-2xl"
                />

                {/* Floating Elements */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-yellow-500 p-4 rounded-full shadow-xl"
                >
                  <RestaurantIcon className="text-white text-3xl" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-xl"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold">Open Now</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setShowBookingModal(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 sm:p-8">
              {/* Header with Image */}
              <div className="relative h-32 sm:h-40 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h2 className="absolute bottom-4 left-6 text-white text-2xl font-bold flex items-center space-x-2">
                  <EventIcon className="text-amber-500" />
                  <span>Book Your Table</span>
                </h2>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowBookingModal(false)}
                className="absolute top-8 right-8 bg-gradient-to-b from-red-500 to-red-700 text-white p-1 rounded-full z-10"
              >
                <CloseIcon />
              </motion.button>

              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={bookingData.name}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your phone"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      value={bookingData.time}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, time: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Guests *
                    </label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          guests: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Occasion
                    </label>
                    <select
                      value={bookingData.occasion}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          occasion: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="regular">Regular Dining</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Meeting</option>
                      <option value="date">Date Night</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Special Requests
                  </label>
                  <textarea
                    value={bookingData.requests}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        requests: e.target.value,
                      })
                    }
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    placeholder="Any special requests or dietary restrictions?"
                  />
                </div>

                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  type="submit"
                  disabled={loading.booking}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold shadow-lg disabled:opacity-50"
                >
                  {loading.booking ? "BOOKING..." : "BOOK NOW"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setShowContactModal(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 sm:p-8">
              {/* Header with Image */}
              <div className="relative h-24 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-transparent"></div>
                <h2 className="absolute bottom-4 left-6 text-white text-2xl font-bold flex items-center space-x-2">
                  <ContactMailIcon />
                  <span>Contact Us</span>
                </h2>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowContactModal(false)}
                className="absolute top-8 right-8 bg-gradient-to-b from-red-500 to-red-700 text-white p-1 rounded-full z-10"
              >
                <CloseIcon />
              </motion.button>

              <form onSubmit={handleContact} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={contactData.name}
                    onChange={(e) =>
                      setContactData({ ...contactData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) =>
                      setContactData({ ...contactData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    value={contactData.message}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        message: e.target.value,
                      })
                    }
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Your message"
                    required
                  />
                </div>

                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  type="submit"
                  disabled={loading.contact}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold shadow-lg disabled:opacity-50"
                >
                  {loading.contact ? "SENDING..." : "SEND MESSAGE"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Menu Modal */}
      {showMenuModal && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setShowMenuModal(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 sm:p-8">
              {/* Header with Image */}
              <div className="relative h-32 sm:h-40 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Menu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h2 className="text-3xl font-bold flex items-center space-x-2">
                    <MenuBookIcon className="text-amber-500" />
                    <span>Our Menu</span>
                  </h2>
                  <p className="text-gray-200 mt-2">
                    Discover our exquisite culinary offerings
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMenuModal(false)}
                className="absolute top-8 right-8 bg-gradient-to-b from-red-500 to-red-700 text-white p-1 rounded-full z-10"
              >
                <CloseIcon />
              </motion.button>

              {/* Menu Categories */}
              <div className="space-y-8">
                {menuCategories.map((category, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center space-x-2 mb-4 pb-2 border-b-2 border-amber-500">
                      {category.icon}
                      <h3 className="text-xl font-bold text-gray-800">
                        {category.name}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-800">
                              {item.name}
                            </h4>
                            <span className="text-amber-600 font-bold">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-8 p-4 bg-amber-50 rounded-lg text-center">
                <p className="text-sm text-gray-600">
                  * Prices are subject to change. Please inform us of any
                  allergies or dietary restrictions.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Success/Error Modals */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[110] bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3"
        >
          <CheckCircle />
          <span>{modalMessage}</span>
        </motion.div>
      )}

      {showErrorModal && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[110] bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3"
        >
          <Error />
          <span>{modalMessage}</span>
        </motion.div>
      )}
    </>
  );
};
