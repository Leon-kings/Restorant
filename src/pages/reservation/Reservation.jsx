/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Modal,
  IconButton,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Close, PlayArrow } from "@mui/icons-material";

export const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
    people: "1",
    request: "",
  });
  const [videoOpen, setVideoOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
  };

  const openVideo = () => setVideoOpen(true);
  const closeVideo = () => setVideoOpen(false);

  return (
    <Box className="py-16 mt-4 mb-2 rounded-2xl px-4 md:px-0 bg-gray-800">
      <Container maxWidth="xl" className="px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 shadow-xl overflow-hidden rounded-xl"
        >
          {/* Video Section */}
          <motion.div
            whileHover={{ scale: 1.0 }}
            className="relative h-64 md:h-auto "
          >
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openVideo}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary hover:bg-primary-dark flex items-center justify-center text-white shadow-lg"
              >
                <PlayArrow fontSize="large" />
              </motion.button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-10 flex items-center"
          >
            <div className="w-full">
              <Typography
                variant="subtitle1"
                className="text-primary font-semibold uppercase tracking-wider mb-2"
              >
                Reservation
              </Typography>
              <Typography
                variant="h3"
                className="text-white mb-6 text-3xl md:text-4xl font-bold"
              >
                Book A Table Online
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      InputProps={{
                        className: " text-white rounded-lg",
                      }}
                      InputLabelProps={{
                        className: "text-gray-400",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      InputProps={{
                        className: " text-white rounded-lg",
                      }}
                      InputLabelProps={{
                        className: "text-gray-400",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Date & Time"
                      name="datetime"
                      type="datetime-local"
                      value={formData.datetime}
                      onChange={handleChange}
                      required
                      InputProps={{
                        className: " text-white rounded-lg",
                      }}
                      InputLabelProps={{
                        className: "text-gray-400",
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Select
                      fullWidth
                      variant="outlined"
                      label="No Of People"
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      className=" text-white rounded-lg"
                      MenuProps={{
                        PaperProps: {
                          className: " text-white",
                        },
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <MenuItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Person" : "People"}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Special Request"
                      name="request"
                      value={formData.request}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      InputProps={{
                        className: " text-white rounded-lg",
                      }}
                      InputLabelProps={{
                        className: "text-gray-400",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        type="submit"
                        className="bg-primary hover:bg-primary-dark text-white py-3 text-lg font-bold"
                      >
                        Book Now
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Video Modal */}
      <Modal
        open={videoOpen}
        onClose={closeVideo}
        className="flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
        >
          <IconButton
            onClick={closeVideo}
            className="absolute top-2 right-2 z-10 text-white"
            size="large"
          >
            <Close />
          </IconButton>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DWRcNpR6Kdc?autoplay=1"
              title="Restaurant Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-96 md:h-[500px]"
            ></iframe>
          </div>
        </motion.div>
      </Modal>
    </Box>
  );
};
