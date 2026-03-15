// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// import { Box, Container, Typography, IconButton } from "@mui/material";
// import { Facebook, Twitter, Instagram } from "@mui/icons-material";
// import { teamMembers } from "../../assets/data/data";

// export const OurTeam = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <Box className="w-full py-20 mt-4 mb-2 rounded-2xl bg-gray-800 ">
//       <Container maxWidth="xl">
//         <Box className="text-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <Typography
//               variant="subtitle1"
//               className="text-center text-white text-primary font-normal"
//             >
//               Team Members
//             </Typography>
//             <Typography variant="h2" className="mb-12 text-white">
//               Our Master Chefs
//             </Typography>
//           </motion.div>
//         </Box>

//         <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl pb-4 bg-white gap-8">
//           {teamMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               transition={{ duration: 0.5, delay: member.delay }}
//             >
//               <Box className="text-center rounded-lg overflow-hidden">
//                 <Box className="rounded-full overflow-hidden mx-auto my-6 w-40 h-40">
//                   <img
//                     className="w-full h-full object-cover"
//                     src={member.image}
//                     alt={member.name}
//                   />
//                 </Box>
//                 <Typography variant="h5" className="mb-1">
//                   {member.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {member.position}
//                 </Typography>
//                 <Box className="flex justify-center mt-4 space-x-2">
//                   <IconButton
//                     color="primary"
//                     className="bg-primary bg-opacity-10 hover:bg-opacity-20"
//                   >
//                     <Facebook fontSize="small" />
//                   </IconButton>
//                   <IconButton
//                     color="primary"
//                     className="bg-primary bg-opacity-10 hover:bg-opacity-20"
//                   >
//                     <Twitter fontSize="small" />
//                   </IconButton>
//                   <IconButton
//                     color="primary"
//                     className="bg-primary bg-opacity-10 hover:bg-opacity-20"
//                   >
//                     <Instagram fontSize="small" />
//                   </IconButton>
//                 </Box>
//               </Box>
//             </motion.div>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// };












/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

// Material Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalDiningIcon from '@mui/icons-material/LocalDining';



export const OurTeam = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

 const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Executive Chef",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=500&q=80",
    delay: 0.1,
    experience: "15+ Years",
    rating: 5,
    reviews: 128,
    specialties: ["French Cuisine", "Molecular Gastronomy", "Wine Pairing"],
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80",
    delay: 0.2,
    experience: "10+ Years",
    rating: 5,
    reviews: 95,
    specialties: ["Desserts", "Bread Baking", "Chocolate Art"],
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Sous Chef",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=500&q=80",
    delay: 0.3,
    experience: "8+ Years",
    rating: 4,
    reviews: 67,
    specialties: ["Asian Fusion", "Seafood", "Sushi"],
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Sarah Johnson",
    position: "Sommelier",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sarah_Goldberg_at_the_2025_Sundance_Film_Festival_01_%28cropped%29.jpg/960px-Sarah_Goldberg_at_the_2025_Sundance_Film_Festival_01_%28cropped%29.jpg",
    delay: 0.4,
    experience: "12+ Years",
    rating: 5,
    reviews: 112,
    specialties: ["Wine Selection", "Pairing", "Spirits"],
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <section className="w-full py-20 mt-4 mb-2 rounded-2xl bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 text-amber-500/10">
        <RestaurantIcon sx={{ fontSize: 80 }} />
      </div>
      <div className="absolute bottom-40 right-10 text-amber-500/10">
        <LocalDiningIcon sx={{ fontSize: 80 }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-amber-500">Master Chefs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate culinary artists dedicated to creating exceptional dining experiences
            with creativity, expertise, and love for food.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              whileHover="hover"
              custom={member.delay}
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="aspect-square"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </motion.div>

                  {/* Overlay with quick actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-6"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white"
                    >
                      <EmailIcon fontSize="small" />
                    </motion.button>
                  </motion.div>

                  {/* Experience Badge */}
                  {member.experience && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center space-x-1">
                      <EmojiEventsIcon fontSize="small" />
                      <span>{member.experience}</span>
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-500 text-sm font-medium mb-2">
                    {member.position}
                  </p>

                  {/* Specialty Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.specialties?.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 rounded-full text-gray-400 text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Rating */}
                  {member.rating && (
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={i < member.rating ? "text-amber-500" : "text-gray-600"}
                          fontSize="small"
                        />
                      ))}
                      <span className="text-gray-400 text-xs ml-1">({member.reviews})</span>
                    </div>
                  )}

                  {/* Social Links */}
                  <div className="flex justify-center space-x-2">
                    <motion.a
                      href={member.social?.facebook || "#"}
                      variants={socialIconVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-colors"
                    >
                      <FacebookIcon fontSize="small" />
                    </motion.a>
                    <motion.a
                      href={member.social?.twitter || "#"}
                      variants={socialIconVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-colors"
                    >
                      <TwitterIcon fontSize="small" />
                    </motion.a>
                    <motion.a
                      href={member.social?.instagram || "#"}
                      variants={socialIconVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-colors"
                    >
                      <InstagramIcon fontSize="small" />
                    </motion.a>
                    <motion.a
                      href={member.social?.linkedin || "#"}
                      variants={socialIconVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-colors"
                    >
                      <LinkedInIcon fontSize="small" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {[
            { icon: <RestaurantIcon />, value: "50+", label: "Years Combined Experience" },
            { icon: <EmojiEventsIcon />, value: "25+", label: "Awards Won" },
            { icon: <StarIcon />, value: "4.9", label: "Average Rating" },
            { icon: <LocalDiningIcon />, value: "100+", label: "Signature Dishes" }
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

      </div>
    </section>
  );
};