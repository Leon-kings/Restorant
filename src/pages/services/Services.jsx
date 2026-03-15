// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
// } from "@mui/material";
// import {
//   Web as WebIcon,
//   PhoneAndroid as MobileIcon,
//   DesignServices as DesignIcon,
//   Cloud as CloudIcon,
//   Close as CloseIcon,
//   CheckCircle as CheckIcon,
//   Restaurant,
//   Headphones,
//   Person,
//   DeliveryDining,
// } from "@mui/icons-material";

// export const Services = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (delay) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: delay,
//         duration: 0.5,
//       },
//     }),
//     hover: { y: -10 },
//   };

//   // Services data
//   const servicesData = [
//     {
//       id: 1,
//       title: "Master Chief",
//       shortDescription: "A chief cook, also known as a head cook or chef.",
//       icon: <Person fontSize="large" />,
//       delay: 0.1,
//       fullDescription:
//         "Member of a cooking team, responsible for planning menus, ordering food, supervising other cooks, and ensuring the quality of meals.",
//       features: [
//         "Menu Planning",
//         "Food Ordering",
//         "Staff Supervision",
//         "Quality Control",
//         "Kitchen Management",
//       ],
//     },
//     {
//       id: 2,
//       title: "Quality Food",
//       shortDescription:
//         " Immediate supervision and job performance of personnel involved in food preparation.",
//       icon: <Restaurant fontSize="large" />,
//       delay: 0.2,
//       fullDescription:
//         "A highly skilled culinary professional responsible for ensuring the quality and consistency of food preparation, while also overseeing the kitchen staff and managing food safety and quality standards. ",
//       features: [
//         "Food Preparation and Cooking",
//         "Kitchen Management",
//         "Menu Development",
//         "Quality Control",
//         "Equipment Maintenance",
//       ],
//     },
//     {
//       id: 3,
//       title: "24/7 Services",
//       shortDescription:
//         "Service that is available at any time and usually, every day.",
//       icon: <Headphones fontSize="large" />,
//       delay: 0.4,
//       fullDescription:
//         "24/7 service means a service is available around the clock, 24 hours a day, 7 days a week, providing continuous support and accessibility.",
//       features: [
//         "Kitchen Open",
//         "Reception Services",
//         "Website automation",
//         "Cost optimization",
//       ],
//     },
//     {
//       id: 4,
//       title: "Delivery Food",
//       shortDescription:
//         " LD offers a detailed and large list of delicious restaurants around you. ",
//       icon: <DeliveryDining className="size-6" fontSize="large" />,
//       delay: 0.4,
//       fullDescription:
//         " Then you are at the right place! LD offers a detailed and large list of delicious restaurants around you. Whether it is a delicious Burger, Pizza, Chinese or any kind of food you are looking for, LD offers an extensive service of food delivered at your door step.",
//       features: ["Lunch Delivery", "Breakfast delivery", "Dinner Delivery"],
//     },
//   ];

//   // State for dialog
//   const [selectedService, setSelectedService] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);

//   // Handle dialog open
//   const handleOpenDialog = (service) => {
//     setSelectedService(service);
//     setOpenDialog(true);
//   };

//   // Handle dialog close
//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setSelectedService(null);
//   };

//   return (
//     <Box className="w-full py-16 bg-gray-800 rounded-2xl my-4">
//       <Container className="mb-8">
//         <Box>
//           <Typography variant="h5" component="h3" className="text-white">
//             Services
//           </Typography>
//         </Box>
//         <Box>
//           <h2 className="text-white text-center">
//             Offering 24/7 service can provide a competitive advantage, enhance{" "}
//             <br />
//             customer satisfaction, and meet the needs of customers in different{" "}
//             <br />
//             time zones.{" "}
//           </h2>
//         </Box>
//       </Container>
//       <Container maxWidth="xl">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerVariants}
//         >
//           <Grid container spacing={4} justifyContent="center">
//             {servicesData.map((service) => (
//               <Grid
//                 item
//                 key={service.id}
//                 xs={12} // 1 column on extra small screens
//                 sm={6} // 2 columns on small screens (sm:grid-cols-1 would actually be 1 column, but you said sm:grid-cols-1)
//                 md={6} // 2 columns on medium screens (md:grid-cols-2)
//                 lg={3} // 4 columns on large screens (lg:grid-cols-4)
//               >
//                 <motion.div
//                   variants={cardVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   whileHover="hover"
//                   custom={service.delay}
//                   className="h-full"
//                 >
//                   <ServiceCard
//                     service={service}
//                     onLearnMore={handleOpenDialog}
//                   />
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>
//       </Container>

//       {/* Service Details Dialog */}
//       {selectedService && (
//         <ServiceDialog
//           open={openDialog}
//           onClose={handleCloseDialog}
//           service={selectedService}
//         />
//       )}
//     </Box>
//   );
// };

// // Service Card Component
// const ServiceCard = ({ service, onLearnMore }) => {
//   return (
//     <Box
//       className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 h-full flex flex-col transition-all duration-300"
//       sx={{
//         borderTop: "4px solid",
//         borderColor: "primary.main",
//         "&:hover": {
//           borderColor: "secondary.main",
//           "& .service-icon": {
//             transform: "scale(1.1)",
//             color: "secondary.main",
//           },
//         },
//       }}
//     >
//       <Box
//         className="service-icon mb-4 text-primary transition-all duration-300"
//         sx={{
//           width: "80px",
//           height: "80px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           borderRadius: "50%",
//           backgroundColor: "primary.light",
//           margin: "0 auto",
//         }}
//       >
//         {service.icon}
//       </Box>
//       <Typography
//         variant="h5"
//         component="h3"
//         className="text-center font-bold mb-3 text-gray-800"
//       >
//         {service.title}
//       </Typography>
//       <Typography
//         variant="body1"
//         className="text-center text-gray-600 flex-grow"
//       >
//         {service.shortDescription}
//       </Typography>
//       <motion.div
//         whileHover={{ scale: 1.0 }}
//         whileTap={{ scale: 0.95 }}
//         className="mt-6 text-center"
//       >
//         <Button
//           onClick={() => onLearnMore(service)}
//           className="text-primary hover:text-secondary font-medium"
//           sx={{
//             position: "relative",
//             textTransform: "none",
//             "&::after": {
//               content: '""',
//               position: "absolute",
//               width: "0",
//               height: "2px",
//               bottom: "0",
//               left: "0",
//               backgroundColor: "secondary.main",
//               transition: "width 0.3s ease",
//             },
//             "&:hover::after": {
//               width: "100%",
//             },
//           }}
//         >
//           Learn More
//         </Button>
//       </motion.div>
//     </Box>
//   );
// };

// // Service Dialog Component
// const ServiceDialog = ({ open, onClose, service }) => {
//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="md"
//       fullWidth
//       PaperProps={{
//         sx: {
//           borderRadius: "16px",
//           overflow: "hidden",
//         },
//       }}
//     >
//       <DialogTitle
//         sx={{
//           bgcolor: "primary.main",
//           color: "white",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h4">{service.title}</Typography>
//         <IconButton
//           edge="end"
//           color="inherit"
//           onClick={onClose}
//           aria-label="close"
//         >
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>

//       <DialogContent dividers sx={{ py: 4 }}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 120,
//                   height: 120,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: "50%",
//                   bgcolor: "primary.light",
//                   color: "white",
//                 }}
//               >
//                 {React.cloneElement(service.icon, { fontSize: "large" })}
//               </Box>
//               <Typography
//                 variant="h6"
//                 color="text.secondary"
//                 textAlign="center"
//               >
//                 {service.shortDescription}
//               </Typography>
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={8}>
//             <Typography variant="body1" paragraph>
//               {service.fullDescription}
//             </Typography>

//             <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//               Key Features
//             </Typography>
//             <List dense>
//               {service.features.map((feature, index) => (
//                 <ListItem key={index} disableGutters>
//                   <ListItemIcon sx={{ minWidth: 32 }}>
//                     <CheckIcon color="primary" fontSize="small" />
//                   </ListItemIcon>
//                   <Typography variant="body1">{feature}</Typography>
//                 </ListItem>
//               ))}
//             </List>
//           </Grid>
//         </Grid>
//       </DialogContent>

//       <DialogActions
//         sx={{
//           justifyContent: "center",
//           py: 3,
//           bgcolor: "grey.100",
//         }}
//       >
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={onClose}
//           sx={{
//             px: 6,
//             py: 1.5,
//             borderRadius: "8px",
//             textTransform: "none",
//             fontSize: "1rem",
//           }}
//         >
//           Close
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };












/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Material Icons
import PersonIcon from '@mui/icons-material/Person';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import WineBarIcon from '@mui/icons-material/WineBar';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WifiIcon from '@mui/icons-material/Wifi';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: { 
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      transition: { type: "spring", stiffness: 300 }
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Enhanced services data with more restaurant information
  const servicesData = [
    {
      id: 1,
      title: "Master Chef",
      shortDescription: "World-class culinary experts crafting exceptional dishes",
      icon: <PersonIcon fontSize="large" />,
      icon2: <LocalDiningIcon />,
      delay: 0.1,
      fullDescription: "Our master chefs are culinary artists with decades of experience in fine dining. Trained in the world's best culinary institutes, they bring innovation, passion, and expertise to every dish they create.",
      features: [
        "Michelin-star trained chefs",
        "Farm-to-table expertise",
        "International cuisine specialization",
        "Custom menu creation",
        "Cooking workshops & classes"
      ],
      stats: {
        experience: "25+ Years",
        chefs: "15 Experts",
        awards: "50+ Awards"
      },
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Quality Food",
      shortDescription: "Premium ingredients, exceptional taste, uncompromising quality",
      icon: <RestaurantIcon fontSize="large" />,
      icon2: <BreakfastDiningIcon />,
      delay: 0.2,
      fullDescription: "We source only the finest ingredients from trusted local farmers and international suppliers. Every dish is prepared with meticulous attention to detail, ensuring an unforgettable dining experience.",
      features: [
        "Organic & locally-sourced ingredients",
        "Handcrafted signature dishes",
        "Seasonal menu rotations",
        "Dietary accommodations",
        "Wine pairing recommendations"
      ],
      stats: {
        ingredients: "100+ Fresh",
        dishes: "75+ Varieties",
        suppliers: "30+ Partners"
      },
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "24/7 Service",
      shortDescription: "Round-the-clock dining excellence, anytime you crave",
      icon: <HeadphonesIcon fontSize="large" />,
      icon2: <AccessTimeIcon />,
      delay: 0.3,
      fullDescription: "Whether it's a midnight craving or an early morning breakfast, our kitchen is always ready to serve you. Our dedicated team ensures consistent quality and service at any hour.",
      features: [
        "24-hour kitchen operation",
        "Late night dining menu",
        "Early breakfast service",
        "Holiday & special hours",
        "Emergency catering"
      ],
      stats: {
        hours: "24/7 Open",
        staff: "40+ Staff",
        tables: "Always Ready"
      },
      image: "https://images.unsplash.com/photo-1552566624-52f8b3cced73?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Food Delivery",
      shortDescription: "Restaurant-quality meals delivered to your doorstep",
      icon: <DeliveryDiningIcon fontSize="large" />,
      icon2: <OutdoorGrillIcon />,
      delay: 0.4,
      fullDescription: "Experience our exquisite cuisine in the comfort of your home. Our efficient delivery service ensures your food arrives hot, fresh, and perfectly packaged, maintaining the same quality as in-restaurant dining.",
      features: [
        "Free delivery within 5 miles",
        "Contactless delivery option",
        "Real-time order tracking",
        "Special packaging for freshness",
        "Corporate lunch deliveries"
      ],
      stats: {
        deliveryTime: "30-45 min",
        coverage: "10 Miles",
        deliveries: "1000+ Daily"
      },
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Restaurant amenities
  const amenities = [
    { icon: <LocalParkingIcon />, name: "Free Parking" },
    { icon: <WifiIcon />, name: "Free WiFi" },
    { icon: <AccessibilityNewIcon />, name: "Wheelchair Access" },
    { icon: <ChildCareIcon />, name: "Kids Friendly" },
    { icon: <PetsIcon />, name: "Pet Friendly" },
    { icon: <SmokingRoomsIcon />, name: "Smoking Area" },
    { icon: <MusicNoteIcon />, name: "Live Music" },
    { icon: <CelebrationIcon />, name: "Event Space" }
  ];

  // Restaurant hours
  const hours = [
    { day: "Monday - Thursday", time: "11:00 AM - 11:00 PM" },
    { day: "Friday - Saturday", time: "11:00 AM - 1:00 AM" },
    { day: "Sunday", time: "10:00 AM - 10:00 PM" }
  ];

  // Payment methods
  const payments = [
    { icon: <CreditCardIcon />, name: "All Major Cards" },
    { icon: <PaymentIcon />, name: "Cash" },
    { icon: <PaymentIcon />, name: "Digital Wallets" }
  ];

  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
  };

  return (
    <section className="w-full py-16 bg-black rounded-2xl my-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Premium <span className="text-amber-500">Services</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Offering 24/7 service with exceptional quality and attention to detail. 
            Experience dining excellence with our comprehensive range of premium services 
            designed to exceed your expectations.
          </p>

          {/* Decorative Line */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              custom={service.delay}
              whileHover="hover"
              className="h-full"
            >
              <ServiceCard
                service={service}
                onLearnMore={handleOpenDialog}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Restaurant Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Amenities */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <StarIcon className="text-amber-500" />
              <span>Amenities</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-400">
                  <span className="text-amber-500">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hours & Location */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <AccessTimeIcon className="text-amber-500" />
              <span>Hours & Location</span>
            </h3>
            <div className="space-y-3 mb-4">
              {hours.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-400">{item.day}</span>
                  <span className="text-white font-medium">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-gray-400 border-t border-gray-800 pt-4">
              <LocationOnIcon className="text-amber-500" />
              <span className="text-sm">123 Gourmet Street, New York, NY 10001</span>
            </div>
          </div>

          {/* Contact & Payment */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <PaymentIcon className="text-amber-500" />
              <span>Contact & Payment</span>
            </h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <PhoneIcon className="text-amber-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <EmailIcon className="text-amber-500" />
                <span className="text-sm">info@gourmet.com</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-white text-sm font-semibold mb-2">We Accept</h4>
              <div className="flex flex-wrap gap-2">
                {payments.map((item, index) => (
                  <div key={index} className="flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-full">
                    <span className="text-amber-500 text-sm">{item.icon}</span>
                    <span className="text-gray-300 text-xs">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-800">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-colors"
              >
                <FacebookIcon fontSize="small" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-colors"
              >
                <InstagramIcon fontSize="small" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-colors"
              >
                <TwitterIcon fontSize="small" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-colors"
              >
                <YouTubeIcon fontSize="small" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {openDialog && selectedService && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseDialog}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCloseDialog}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800/80 p-2 rounded-full z-10"
                >
                  <CloseIcon />
                </motion.button>

                <div className="absolute bottom-4 left-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                      {React.cloneElement(selectedService.icon, { className: "text-amber-500 text-2xl" })}
                    </div>
                    <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Stats & Icon */}
                  <div className="lg:col-span-1">
                    <div className="bg-gray-800 rounded-xl p-6 text-center mb-4">
                      <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {React.cloneElement(selectedService.icon2 || selectedService.icon, { className: "text-amber-500 text-3xl" })}
                      </div>
                      <h3 className="text-white font-semibold mb-2">Service Stats</h3>
                      <div className="space-y-2">
                        {Object.entries(selectedService.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-gray-400 capitalize">{key}:</span>
                            <span className="text-amber-500 font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-white font-semibold mb-3 flex items-center space-x-2">
                        <CheckCircleIcon className="text-amber-500" />
                        <span>Key Features</span>
                      </h3>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <CheckCircleIcon className="text-amber-500 text-sm mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Description */}
                  <div className="lg:col-span-2">
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-white font-semibold mb-4 text-lg">About This Service</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {selectedService.fullDescription}
                      </p>

                      <h4 className="text-white font-semibold mb-3">Why Choose This Service?</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <StarIcon className="text-amber-500" />
                            <span className="text-white font-medium">Expert Team</span>
                          </div>
                          <p className="text-gray-400 text-sm">
                            Dedicated professionals with years of experience
                          </p>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <AccessTimeIcon className="text-amber-500" />
                            <span className="text-white font-medium">24/7 Availability</span>
                          </div>
                          <p className="text-gray-400 text-sm">
                            Always ready to serve you anytime
                          </p>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <RestaurantIcon className="text-amber-500" />
                            <span className="text-white font-medium">Quality Assured</span>
                          </div>
                          <p className="text-gray-400 text-sm">
                            100% satisfaction guaranteed
                          </p>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <GroupIcon className="text-amber-500" />
                            <span className="text-white font-medium">Personalized Service</span>
                          </div>
                          <p className="text-gray-400 text-sm">
                            Tailored to your specific needs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service, onLearnMore }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 h-full flex flex-col border border-gray-800 hover:border-amber-500/50 transition-all duration-300 group">
      {/* Icon */}
      <motion.div 
        className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 5 }}
      >
        <div className="text-amber-500 text-3xl">
          {service.icon}
        </div>
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm flex-grow mb-4">
        {service.shortDescription}
      </p>

      {/* Stats Preview */}
      <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-800/50 rounded-lg">
        {Object.entries(service.stats).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-amber-500 text-xs font-semibold">{value}</div>
            <div className="text-gray-500 text-xs capitalize">{key}</div>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <motion.button
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onLearnMore(service)}
        className="text-amber-500 font-medium flex items-center justify-center space-x-1 group-hover:space-x-2 transition-all"
      >
        <span>Learn More</span>
        <span className="text-lg">→</span>
      </motion.button>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/50 rounded-tr-2xl transition-all duration-300"></div>
    </div>
  );
};