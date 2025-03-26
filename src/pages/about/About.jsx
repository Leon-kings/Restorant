/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Restaurant } from "@mui/icons-material";
import CountUp from "react-countup";
import about from "../../assets/image/other/about1.jpg";
import about1 from "../../assets/image/other/about-3.jpg";
import about2 from "../../assets/image/other/about-4.jpg";
export const About = () => {
  const [counterStarted, setCounterStarted] = useState(false);
  const controls = useAnimation();
  const isMobile = useMediaQuery("(max-width:900px)");

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
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  const stats = [
    { value: 15, label: "Years of", sublabel: "Experience" },
    { value: 50, label: "Popular", sublabel: "Master Chefs" },
  ];

  const images = [
    { id: 1, delay: 0.1, position: "top-left", width: "100%", image: about },
    {
      id: 2,
      delay: 0.3,
      position: "top-right",
      width: "75%",
      margin: "25% 0 0 25%",
      image: about1,
    },
    { id: 3, delay: 0.5, position: "bottom-left", width: "75%", image: about2 },
    {
      id: 4,
      delay: 0.7,
      position: "bottom-right",
      width: "100%",
      image: about,
    },
  ];

  return (
    <Box className="py-16 mt-4 mb-2 rounded-2xl md:py-20 lg:py-24 text-white bg-gray-800">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
          {/* Image Gallery */}
          <Grid item xs={12} lg={6} order={isMobile ? 2 : 1}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {images.map((img) => (
                <motion.div
                  key={img.id}
                  variants={imageVariants}
                  custom={img.delay}
                  whileHover="hover"
                  className={`relative overflow-hidden rounded-xl shadow-md ${
                    img.position.includes("left")
                      ? "justify-self-start"
                      : "justify-self-end"
                  }`}
                  style={{
                    width: img.width,
                    margin: img.margin || "0",
                  }}
                >
                  <img
                    src={img.image}
                    alt="Restaurant"
                    className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: "1/1" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </Grid>

          {/* Content */}
          <Grid item xs={12} lg={6} order={isMobile ? 1 : 2}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="subtitle1"
                  className="text-primary font-semibold uppercase tracking-wider mb-2"
                >
                  About Us
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Welcome to <Restaurant className="text-blue-200 mx-2" />{" "}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography className="text-white pt-8 mb-4 text-lg">
                  Our Heaven Restaurant is constantly evolving its culinary
                  approaches with one central theme: modern African cuisine with
                  local Rwandan ingredients.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography className="text-white pt-6 mb-8 text-lg">
                  Experience our Afro fusion cuisine at the boho restaurant,
                  offering stunning views, laid-back vibes, and a perfect
                  setting for your next business lunch.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Grid container spacing={3} className="pt-8 mb-8">
                  {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="flex items-center border-l-4 border-primary pl-4 py-3 h-full bg-gray-50 rounded-r-lg"
                      >
                        <Typography
                          variant="h3"
                          className="text-primary text-4xl font-bold min-w-[60px]"
                        >
                          <CountUp
                            end={stat.value}
                            duration={2.5}
                            className="text-black"
                            start={counterStarted ? 0 : stat.value}
                          />
                        </Typography>
                        <Box className="ml-4">
                          <Typography className="text-gray-600">
                            {stat.label}
                          </Typography>
                          <Typography
                            variant="h6"
                            className="uppercase font-bold text-gray-800"
                          >
                            {stat.sublabel}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  variant="contained"
                  size="large"
                  className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-full shadow-lg text-lg font-bold"
                >
                  Read More
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
        </div>
      </Container>
    </Box>
  );
};
