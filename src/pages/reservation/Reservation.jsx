// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
//   Button,
//   Modal,
//   IconButton,
//   useMediaQuery,
//   Grid,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { Close, PlayArrow } from "@mui/icons-material";

// export const Reservation = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     datetime: "",
//     people: "1",
//     request: "",
//   });
//   const [videoOpen, setVideoOpen] = useState(false);
//   const isMobile = useMediaQuery("(max-width:900px)");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted:", formData);
//     // You would typically send this data to your backend
//   };

//   const openVideo = () => setVideoOpen(true);
//   const closeVideo = () => setVideoOpen(false);

//   return (
//     <Box className="py-16 mt-4 mb-2 rounded-2xl px-4 md:px-0 bg-gray-800">
//       <Container maxWidth="xl" className="px-0">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 md:grid-cols-2 shadow-xl overflow-hidden rounded-xl"
//         >
//           {/* Video Section */}
//           <motion.div
//             whileHover={{ scale: 1.0 }}
//             className="relative h-64 md:h-auto "
//           >
//             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={openVideo}
//                 className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary hover:bg-primary-dark flex items-center justify-center text-white shadow-lg"
//               >
//                 <PlayArrow fontSize="large" />
//               </motion.button>
//             </div>
//             <img
//               src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//               alt="Restaurant Interior"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* Reservation Form */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="bg-white p-6 md:p-10 flex items-center"
//           >
//             <div className="w-full">
//               <Typography
//                 variant="subtitle1"
//                 className="text-primary font-semibold uppercase tracking-wider mb-2"
//               >
//                 Reservation
//               </Typography>
//               <Typography
//                 variant="h3"
//                 className="text-white mb-6 text-3xl md:text-4xl font-bold"
//               >
//                 Book A Table Online
//               </Typography>

//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       fullWidth
//                       variant="outlined"
//                       label="Your Name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       InputProps={{
//                         className: " text-white rounded-lg",
//                       }}
//                       InputLabelProps={{
//                         className: "text-gray-400",
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       fullWidth
//                       variant="outlined"
//                       label="Your Email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       InputProps={{
//                         className: " text-white rounded-lg",
//                       }}
//                       InputLabelProps={{
//                         className: "text-gray-400",
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       fullWidth
//                       variant="outlined"
//                       label="Date & Time"
//                       name="datetime"
//                       type="datetime-local"
//                       value={formData.datetime}
//                       onChange={handleChange}
//                       required
//                       InputProps={{
//                         className: " text-white rounded-lg",
//                       }}
//                       InputLabelProps={{
//                         className: "text-gray-400",
//                         shrink: true,
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <Select
//                       fullWidth
//                       variant="outlined"
//                       label="No Of People"
//                       name="people"
//                       value={formData.people}
//                       onChange={handleChange}
//                       className=" text-white rounded-lg"
//                       MenuProps={{
//                         PaperProps: {
//                           className: " text-white",
//                         },
//                       }}
//                     >
//                       {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
//                         <MenuItem key={num} value={num.toString()}>
//                           {num} {num === 1 ? "Person" : "People"}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       variant="outlined"
//                       label="Special Request"
//                       name="request"
//                       value={formData.request}
//                       onChange={handleChange}
//                       multiline
//                       rows={4}
//                       InputProps={{
//                         className: " text-white rounded-lg",
//                       }}
//                       InputLabelProps={{
//                         className: "text-gray-400",
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <Button
//                         fullWidth
//                         variant="contained"
//                         size="large"
//                         type="submit"
//                         className="bg-primary hover:bg-primary-dark text-white py-3 text-lg font-bold"
//                       >
//                         Book Now
//                       </Button>
//                     </motion.div>
//                   </Grid>
//                 </Grid>
//               </form>
//             </div>
//           </motion.div>
//         </motion.div>
//       </Container>

//       {/* Video Modal */}
//       <Modal
//         open={videoOpen}
//         onClose={closeVideo}
//         className="flex items-center justify-center p-4"
//       >
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
//         >
//           <IconButton
//             onClick={closeVideo}
//             className="absolute top-2 right-2 z-10 text-white"
//             size="large"
//           >
//             <Close />
//           </IconButton>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               width="100%"
//               height="100%"
//               src="https://www.youtube.com/embed/DWRcNpR6Kdc?autoplay=1"
//               title="Restaurant Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-96 md:h-[500px]"
//             ></iframe>
//           </div>
//         </motion.div>
//       </Modal>
//     </Box>
//   );
// };

























/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Material Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';

export const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: "2",
    request: "",
    occasion: "regular",
    phone: "",
  });

  const [videoOpen, setVideoOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setModalMessage("Table booked successfully! A confirmation has been sent to your email.");
      setShowSuccessModal(true);
      
      // Reset form after successful booking
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        people: "2",
        request: "",
        occasion: "regular",
        phone: "",
      });
      
      setTimeout(() => setShowSuccessModal(false), 3000);
    } catch (error) {
      setModalMessage("Booking failed. Please try again.");
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  const openVideo = () => setVideoOpen(true);
  const closeVideo = () => setVideoOpen(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const videoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 30 }
    }
  };

  const buttonHoverVariants = {
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  // Available time slots
  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"
  ];

  // Occasion options
  const occasions = [
    { value: "regular", label: "Regular Dining" },
    { value: "birthday", label: "Birthday" },
    { value: "anniversary", label: "Anniversary" },
    { value: "business", label: "Business Meeting" },
    { value: "date", label: "Date Night" },
    { value: "family", label: "Family Gathering" }
  ];

  return (
    <>
      <section className="py-16 mt-4 mb-2 rounded-2xl bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold mb-4">
              Reservation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your <span className="text-amber-500">Table</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience exceptional dining. Reserve your table now for an unforgettable culinary journey.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl overflow-hidden rounded-2xl bg-gray-900 border border-gray-800"
          >
            {/* Video/Image Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-64 lg:h-auto group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />

              {/* Play Button */}
              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={openVideo}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform"
              >
                <PlayArrowIcon fontSize="large" />
              </motion.button>

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white text-2xl font-bold mb-2">Fine Dining Experience</h3>
                <p className="text-gray-300 text-sm">Watch our restaurant video</p>
              </div>

              {/* Floating Badges */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm rounded-lg p-3 z-20"
              >
                <div className="flex items-center space-x-2">
                  <AccessTimeIcon className="text-amber-500" />
                  <div>
                    <p className="text-white text-xs">Open Daily</p>
                    <p className="text-amber-500 text-sm font-bold">11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 p-6 lg:p-10"
            >
              <div className="w-full">
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 flex items-center space-x-2">
                    <RestaurantIcon className="text-amber-500" />
                    <span>Book A Table Online</span>
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Fill in the details below and we'll confirm your reservation
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        <PersonIcon className="text-amber-500 inline mr-1" fontSize="small" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        <EmailIcon className="text-amber-500 inline mr-1" fontSize="small" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        <PhoneIcon className="text-amber-500 inline mr-1" fontSize="small" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 234 567 890"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Number of People */}
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        <PeopleIcon className="text-amber-500 inline mr-1" fontSize="small" />
                        Number of Guests *
                      </label>
                      <select
                        name="people"
                        value={formData.people}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <option key={num} value={num} className="bg-gray-800">
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date Field */}
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        <EventIcon className="text-amber-500 inline mr-1" fontSize="small" />
                        Reservation Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Time Field */}
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        <ScheduleIcon className="text-amber-500 inline mr-1" fontSize="small" />
                        Reservation Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time} className="bg-gray-800">
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Occasion Field */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 text-sm mb-2">
                        <CelebrationIcon className="text-amber-500 inline mr-1" fontSize="small" />
                        Occasion
                      </label>
                      <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        {occasions.map(occasion => (
                          <option key={occasion.value} value={occasion.value} className="bg-gray-800">
                            {occasion.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Special Request */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 text-sm mb-2">
                        <MessageIcon className="text-amber-500 inline mr-1" fontSize="small" />
                        Special Requests
                      </label>
                      <textarea
                        name="request"
                        value={formData.request}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Any dietary restrictions, allergies, or special requests?"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold text-lg shadow-lg disabled:opacity-50 relative overflow-hidden group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                      style={{ opacity: 0.2 }}
                    />
                    {loading ? (
                      <span className="flex items-center justify-center space-x-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>BOOKING...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <RestaurantIcon />
                        <span>BOOK NOW</span>
                      </span>
                    )}
                  </motion.button>

                  {/* Additional Info */}
                  <p className="text-center text-gray-500 text-xs mt-4">
                    By booking, you agree to our cancellation policy. Tables are held for 15 minutes past reservation time.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Restaurant Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
          >
            {[
              { icon: <AccessTimeIcon />, label: "Open Hours", value: "11:00 AM - 11:00 PM" },
              { icon: <LocationOnIcon />, label: "Location", value: "123 Gourmet Street, NY" },
              { icon: <PhoneIcon />, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: <LocalDiningIcon />, label: "Cuisine", value: "International Fusion" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl p-4 border border-gray-800 text-center"
              >
                <div className="text-amber-500 mb-2">{item.icon}</div>
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              variants={videoVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <h3 className="text-white font-semibold">Restaurant Video Tour</h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeVideo}
                  className="text-gray-400 hover:text-white"
                >
                  <CloseIcon />
                </motion.button>
              </div>

              {/* Video */}
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/DWRcNpR6Kdc?autoplay=1"
                  title="Restaurant Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-800">
                <p className="text-gray-400 text-sm">
                  Experience the ambiance and culinary excellence at Gourmet Restaurant
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3"
          >
            <CheckCircleIcon />
            <span>{modalMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {showErrorModal && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3"
          >
            <ErrorIcon />
            <span>{modalMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};