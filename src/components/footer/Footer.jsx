// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import { about } from "../../assets/data/data";
// import { Button, Card } from "@mui/material";
// import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     try {
//       const response = await fetch("https://your-api-endpoint.com/subscribe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to subscribe");
//       }

//       const result = await response.json();
//       setSuccess(true);
//       setEmail("");
//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       {" "}
//       <div className="w-full bg-white text-black rounded-2xl pt-20 pb-20">
//         <div className="container mx-auto px-4">
//           <div className="row flex flex-wrap items-center">
//             <div className="col-lg-6 w-full lg:w-1/2">
//               <motion.div
//                 className="subscribe_title mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="title text-2xl font-bold">
//                   Subscribe Our Newsletter
//                 </h4>
//                 <p className="text-gray-400">To receive monthly updates</p>
//               </motion.div>
//             </div>
//             <div className="col-lg-6 w-full lg:w-1/2">
//               <motion.div
//                 className="subscribe_form mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex text-black border-black bg-gray-500"
//                 >
//                   <input
//                     type="email"
//                     placeholder="Enter Your Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="px-6 py-3 dark:bg-blue-400 dark:text-white text-white rounded-r-lg  transition-colors duration-300"
//                   >
//                     {loading ? "Sending..." : "Subscribe"}
//                   </button>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="footer_widget pt-20 pb-20">
//         <div className="container mx-auto px-4">
//           <div className="row flex flex-wrap">
//             {/* About Us */}
//             <div className="col-lg-4 col-md-4 w-full lg:w-1/3">
//               <motion.div
//                 className="footer_about mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="footer_title text-xl font-bold mb-4">
//                   About Us
//                 </h4>
//                 <motion.span
//                   className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.span
//                     className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   ></motion.span>
//                 </motion.span>
//                 <p className="text-gray-400 pt-4">
//                   By drinking this coffee, you are investing in women farmers as
//                   they produce high quality products that increase economic
//                   independence for themselves and their families.
//                 </p>
//                 <ul className="social flex mt-4 space-x-4">
//                   <li>
//                     <Button
//                       href="#"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <Facebook className="size-6" />
//                     </Button>
//                   </li>
//                   <li>
//                     <Button
//                       href="#"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <Twitter className="size-6" />
//                     </Button>
//                   </li>
//                   <li>
//                     <Button
//                       href="#"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <Instagram className="size-6" />
//                     </Button>
//                   </li>
//                   <li>
//                     <Button
//                       href="#"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <LinkedIn className="size-6" />
//                     </Button>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Opening Hours */}
//             <div className="col-lg-4 w-full lg:w-1/3">
//               <motion.div
//                 className="footer_link mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="footer_title text-xl font-bold mb-4">
//                   Opening Hours
//                 </h4>
//                 <motion.span
//                   className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.span
//                     className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   ></motion.span>
//                 </motion.span>
//                 <ul className="text-gray-400 pt-4">
//                   <li>
//                     Mon-Fri: <b> 08.00 A.M - 10.00 P.M</b>
//                   </li>
//                   <li>
//                     Saturday: <b> 08.00 A.M - 02.00 P.M</b>
//                   </li>
//                   <li>
//                     Sunday: <b> Closed</b>
//                   </li>
//                   <li>
//                     Half-Holidays: <b> 08.00 A.M - 02.00 P.M</b>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Instagram Feed */}
//             <div className="col-lg-4 col-md-4 w-full lg:w-1/3">
//               <motion.div
//                 className="footer_instagram mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="footer_title text-xl font-bold mb-4">
//                   Instagram Feed
//                 </h4>
//                 <motion.span
//                   className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.span
//                     className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   ></motion.span>
//                 </motion.span>
//                 <div className="grid grid-cols-4 gap-2 pt-4">
//                   {about.map((image) => (
//                     <Card key={image.id}>
//                       <img
//                         src={image.url}
//                         alt=""
//                         className="w-full h-24 object-cover rounded-lg"
//                       />
//                     </Card>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";
import { about } from "../../assets/data/data";

// Material Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setTimeout(() => setError(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 },
    },
    tap: { scale: 0.9 },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="w-full bg-black text-white rounded-2xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter Text */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold mb-4">
                Newsletter
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400">
                Get the latest updates on new dishes and special offers
              </p>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-md mx-auto lg:mx-0 lg:ml-auto w-full"
            >
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <EmailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-gray-500 transition-colors"
                      required
                    />
                  </div>
                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg font-semibold disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <SendIcon />
                        <span>Subscribe</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Success Message */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-0 text-green-500 flex items-center space-x-1"
                  >
                    <CheckCircleIcon fontSize="small" />
                    <span className="text-sm">Successfully subscribed!</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-0 text-red-500 flex items-center space-x-1"
                  >
                    <ErrorIcon fontSize="small" />
                    <span className="text-sm">{error}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Widgets */}
      <div className="relative z-10 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* About Us */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                <RestaurantIcon className="text-amber-500" />
                <span>About Us</span>
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>

              <p className="text-gray-400 text-sm leading-relaxed">
                By drinking this coffee, you are investing in women farmers as
                they produce high quality products that increase economic
                independence for themselves and their families.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3 pt-4">
                <motion.a
                  href="#"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-800 transition-colors border border-gray-800"
                >
                  <FacebookIcon fontSize="small" />
                </motion.a>
                <motion.a
                  href="#"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-800 transition-colors border border-gray-800"
                >
                  <TwitterIcon fontSize="small" />
                </motion.a>
                <motion.a
                  href="#"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-800 transition-colors border border-gray-800"
                >
                  <InstagramIcon fontSize="small" />
                </motion.a>
                <motion.a
                  href="#"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-800 transition-colors border border-gray-800"
                >
                  <LinkedInIcon fontSize="small" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                <LocationOnIcon className="text-amber-500" />
                <span>Contact Info</span>
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>

              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-3">
                  <LocationOnIcon className="text-amber-500 text-sm mt-1" />
                  <span className="text-sm">
                    123 Gourmet Street, New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <PhoneIcon className="text-amber-500 text-sm" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <EmailIcon className="text-amber-500 text-sm" />
                  <span className="text-sm">info@gourmet.com</span>
                </li>
              </ul>
            </motion.div>

            {/* Opening Hours */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                <AccessTimeIcon className="text-amber-500" />
                <span>Opening Hours</span>
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>

              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between text-sm">
                  <span>Monday - Friday</span>
                  <span className="text-amber-500 font-semibold">
                    08:00 - 22:00
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Saturday</span>
                  <span className="text-amber-500 font-semibold">
                    08:00 - 14:00
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Sunday</span>
                  <span className="text-red-500 font-semibold">Closed</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Holidays</span>
                  <span className="text-amber-500 font-semibold">
                    08:00 - 14:00
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Instagram Feed */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                <InstagramIcon className="text-amber-500" />
                <span>Instagram Feed</span>
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>

              <div className="grid grid-cols-3 gap-2">
                {about.slice(0, 6).map((image, index) => (
                  <motion.a
                    key={image.id || index}
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="block aspect-square overflow-hidden rounded-lg"
                  >
                    <img
                      src={image.url}
                      alt=""
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="inline-flex items-center space-x-1 text-amber-500 text-sm mt-2"
              >
                <span>Follow us on Instagram</span>
                <InstagramIcon fontSize="small" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center space-x-1"
            >
              <CopyrightIcon fontSize="small" />
              <span className="text-white">{currentYear} </span> Gourmet
              Restaurant. All rights reserved.
            </motion.div>

            {/* Footer Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                Sitemap
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};
