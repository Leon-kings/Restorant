/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  useTheme,
  Hidden,
} from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

export const Testimonial = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Plio Dorak",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      quote:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
      quote:
        "The service was absolutely fantastic! I couldn't be happier with the results. The team went above and beyond to capture our special moments in the most beautiful way possible.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      quote:
        "Professional, creative, and attentive to detail. The photos exceeded all my expectations and I would highly recommend their services to anyone looking for quality photography.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <div className="w-full bg-gray-800 rounded-2xl mx-0 mt-4 mb-2 text-white">
        <Box component="section" className="py-10 text-white">
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "lg",
              mx: "auto",
              px: { xs: 2, sm: 4 },
            }}
          >
            {/* Heading Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mb: { xs: 6, md: 8 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full mx-0"
              >
                <Typography
                  variant="h3"
                  className="text-white"
                  component="h2"
                  sx={{
                    mb: 2,
                    fontWeight: "bold",
                  }}
                >
                  What Says Customer
                </Typography>
                <Typography variant="body1" className="text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page
                </Typography>
              </motion.div>
            </Box>

            {/* Testimonial Content */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: 4,
              }}
            >
              {/* Testimonial Carousel */}
              <>
                <div className="bg-gray-700 p-8 mx-auto max-w-2xl text-center">
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: 4,
                      p: { xs: 3, md: 4 },
                      position: "relative",
                      height: "100%",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        className="bg-white rounded-lg shadow-lg p-8 mx-0 max-w-3xl "
                        initial={{ opacity: 0, x: 0,scale:1 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: theme.spacing(3),
                          [theme.breakpoints.up("md")]: {
                            flexDirection: "row",
                            alignItems: "center",
                          },
                        }}
                      >
                        <Avatar
                          src={testimonials[currentSlide].avatar}
                          alt={testimonials[currentSlide].name}
                          sx={{
                            width: { xs: 96, md: 128 },
                            height: { xs: 96, md: 128 },
                            flexShrink: 0,
                          }}
                        />
                        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                          <Typography
                            variant="h6"
                            component="h4"
                            sx={{
                              fontWeight: "bold",
                              mb: 1,
                              color: "text.primary",
                            }}
                          >
                            {testimonials[currentSlide].name}
                          </Typography>
                          <Box sx={{ position: "relative" }}>
                            <FormatQuote
                              sx={{
                                position: "absolute",
                                top: -24,
                                left: -8,
                                fontSize: 32,
                                opacity: 0.2,
                                color: "text.secondary",
                              }}
                            />
                            <Typography
                              variant="body1"
                              sx={{
                                fontStyle: "italic",
                                color: "text.secondary",
                              }}
                            >
                              {testimonials[currentSlide].quote}
                            </Typography>
                            <FormatQuote
                              sx={{
                                position: "absolute",
                                bottom: -24,
                                right: -8,
                                fontSize: 32,
                                opacity: 0.2,
                                color: "text.secondary",
                                transform: "rotate(180deg)",
                              }}
                            />
                          </Box>
                        </Box>
                      </motion.div>
                    </AnimatePresence>
                  </Paper>
                </div>
              </>

              {/* Camera Image - Hidden on small screens */}
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};
