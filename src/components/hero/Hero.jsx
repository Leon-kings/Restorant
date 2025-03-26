/* eslint-disable no-unused-vars */
import { Restaurant } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import hero from "../../assets/image/other/hero.png";
export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <Box className="hero mt-4 mb-2 rounded-2xl bg-gray-900 py-16 md:py-24 lg:py-32">
        <Container maxWidth="xl">
          <Box className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <Typography
                variant="h2"
                component="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Enjoy Our
                <br />
                <span className="text-amber-500">Delicious Meal</span>
              </Typography>
              <Typography
                variant="body1"
                className="text-white mb-8 text-lg max-w-lg"
              >
                Food, substance consisting essentially of protein, carbohydrate,
                fat, and other nutrients used in the body of an organism to
                sustain growth and vital processes and to furnish energy.
              </Typography>
              <Box className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg"
                  >
                    Book A Table
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    className="border-amber-500 text-amber-500 hover:bg-amber-500/10 font-bold py-3 px-8 rounded-full shadow-lg text-lg"
                  >
                    View Menu
                  </Button>
                </motion.div>
              </Box>
            </motion.div>

            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
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
                  alt=""
                  className="w-full max-w-xl mx-auto rounded-lg shadow-2xl"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 bg-amber-500 p-4 rounded-full shadow-xl"
                >
                  <Restaurant className="text-white text-3xl" />
                </motion.div>
              </motion.div>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </>
  );
}
