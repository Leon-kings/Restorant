/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import {
  Web as WebIcon,
  PhoneAndroid as MobileIcon,
  DesignServices as DesignIcon,
  Cloud as CloudIcon,
  Close as CloseIcon,
  CheckCircle as CheckIcon,
  Restaurant,
  Headphones,
  Person,
} from "@mui/icons-material";

export const Services = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    }),
    hover: { y: -10 },
  };

  // Services data
  const servicesData = [
    {
      id: 1,
      title: "Master Chief",
      shortDescription: "A chief cook, also known as a head cook or chef.",
      icon: <Person fontSize="large" />,
      delay: 0.1,
      fullDescription:
        "Member of a cooking team, responsible for planning menus, ordering food, supervising other cooks, and ensuring the quality of meals.",
      features: ["Menu Planning", "Food Ordering", "Staff Supervision","Quality Control","Kitchen Management"],
    },
    {
      id: 2,
      title: "Quality Food",
      shortDescription:
        " Immediate supervision and job performance of personnel involved in food preparation.",
      icon: <Restaurant fontSize="large" />,
      delay: 0.2,
      fullDescription:
        "A highly skilled culinary professional responsible for ensuring the quality and consistency of food preparation, while also overseeing the kitchen staff and managing food safety and quality standards. ",
      features: [
        "Food Preparation and Cooking",
        "Kitchen Management",
        "Menu Development",
        "Quality Control",
        "Equipment Maintenance",
      ],
    },

    {
      id: 3,
      title: "24/7 Services",
      shortDescription:
        "Service that is available at any time and usually, every day.",
      icon: <Headphones fontSize="large" />,
      delay: 0.4,
      fullDescription:
        "24/7 service means a service is available around the clock, 24 hours a day, 7 days a week, providing continuous support and accessibility.",
      features: [
        "Kitchen Open",
        "Reception Services",
        "Website automation",
        "Cost optimization",
      ],
    },
  ];

  // State for dialog
  const [selectedService, setSelectedService] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Handle dialog open
  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  // Handle dialog close
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
  };

  return (
    <Box className="w-full py-16 bg-gray-800 rounded-2xl my-4">
      <Container className="mb-8">
        <Box>
          <Typography variant="h5" component="h3" className="text-white">
            Services
          </Typography>
        </Box>
        <Box>
          <h2 className="text-white text-center">
            Offering 24/7 service can provide a competitive advantage, enhance{" "}
            <br />
            customer satisfaction, and meet the needs of customers in different{" "}
            <br />
            time zones.{" "}
          </h2>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Grid
            container
            spacing={2}
            className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4"
            justifyContent="center"
          >
            {servicesData.map((service) => (
              <Grid item xs={16} lg={8} md={4} key={service.id}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  custom={service.delay}
                  className="h-full"
                >
                  <ServiceCard
                    service={service}
                    onLearnMore={handleOpenDialog}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Service Details Dialog */}
      {selectedService && (
        <ServiceDialog
          open={openDialog}
          onClose={handleCloseDialog}
          service={selectedService}
        />
      )}
    </Box>
  );
};

// Service Card Component
const ServiceCard = ({ service, onLearnMore }) => {
  return (
    <Box
      className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 h-full flex flex-col transition-all duration-300"
      sx={{
        borderTop: "4px solid",
        borderColor: "primary.main",
        "&:hover": {
          borderColor: "secondary.main",
          "& .service-icon": {
            transform: "scale(1.1)",
            color: "secondary.main",
          },
        },
      }}
    >
      <Box
        className="service-icon mb-4 text-primary transition-all duration-300"
        sx={{
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "primary.light",
          margin: "0 auto",
        }}
      >
        {service.icon}
      </Box>
      <Typography
        variant="h5"
        component="h3"
        className="text-center font-bold mb-3 text-gray-800"
      >
        {service.title}
      </Typography>
      <Typography
        variant="body1"
        className="text-center text-gray-600 flex-grow"
      >
        {service.shortDescription}
      </Typography>
      <motion.div
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 text-center"
      >
        <Button
          onClick={() => onLearnMore(service)}
          className="text-primary hover:text-secondary font-medium"
          sx={{
            position: "relative",
            textTransform: "none",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "0",
              height: "2px",
              bottom: "0",
              left: "0",
              backgroundColor: "secondary.main",
              transition: "width 0.3s ease",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          Learn More
        </Button>
      </motion.div>
    </Box>
  );
};

// Service Dialog Component
const ServiceDialog = ({ open, onClose, service }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle
        sx={{
          bgcolor: "primary.main",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">{service.title}</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                  color: "white",
                }}
              >
                {React.cloneElement(service.icon, { fontSize: "large" })}
              </Box>
              <Typography
                variant="h6"
                color="text.secondary"
                textAlign="center"
              >
                {service.shortDescription}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              {service.fullDescription}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Key Features
            </Typography>
            <List dense>
              {service.features.map((feature, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="body1">{feature}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "center",
          py: 3,
          bgcolor: "grey.100",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{
            px: 6,
            py: 1.5,
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
