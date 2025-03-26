/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
  Card,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, Restaurant, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/A-234/884" },
    { name: "Service", path: "/S-164/856" },
    { name: "Menu", path: "/M-278/893" },
    {
      name: "Pages",
      subItems: [
        { name: "Booking", path: "/R-664/099" },
        { name: "Our Team", path: "/O-290/648" },
        { name: "Testimonial", path: "/T-748/092" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box className="relative bg-gray-900 w-full">
      {/* Navigation Bar */}
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between py-4 px-0">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to={"/"}>
              <Restaurant className="text-amber-500 mr-2 text-3xl" />
            </Link>
          </motion.div>

          {!isMobile ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6"
            >
              {navItems.map((item, index) => (
                <Box key={index}>
                  {item.subItems ? (
                    <>
                      <Link to={item.path} id={`pages-button-${index}`}>
                        <button
                          id={`pages-button-${index}`}
                          aria-controls={
                            open ? `pages-menu-${index}` : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                          className="text-white hover:text-amber-400 px-3 py-2 text-base font-medium"
                        >
                          {item.name}
                        </button>
                      </Link>
                      <Menu
                        id={`pages-menu-${index}`}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": `pages-button-${index}`,
                        }}
                        PaperProps={{
                          className: "bg-gray-800 text-white mt-2",
                        }}
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <Link key={subIndex} to={subItem.path}>
                            <MenuItem
                              key={subIndex}
                              onClick={handleClose}
                              className="hover:bg-gray-700"
                            >
                              {subItem.name}
                            </MenuItem>
                          </Link>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <motion.div variants={itemVariants}>
                      <Link to={item.path}>
                        <button
                          href={item.path}
                          className="text-white hover:text-amber-400 px-3 py-2 text-base font-medium"
                        >
                          {item.name}
                        </button>
                      </Link>
                    </motion.div>
                  )}
                </Box>
              ))}
              <motion.div variants={itemVariants}>
                <Link to={"/R-664/099"}>
                  <Button
                    variant="contained"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Book A Table
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white"
            >
              {mobileOpen ? (
                <Close className="text-red-500" />
              ) : (
                <MenuIcon className="text-white" />
              )}
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 w-full overflow-hidden"
          >
            <Card>
              <Box className="flex flex-col py-4 px-4 gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.subItems ? (
                      <Box>
                        <Button
                          fullWidth
                          className="text-white justify-start text-left hover:bg-gray-700"
                        >
                          {item.name}
                        </Button>
                        <Box className="ml-4">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link key={subIndex} to={subItem.path}>
                              <Button
                                key={subIndex}
                                fullWidth
                                className="text-gray-300 justify-start text-left hover:bg-gray-700"
                              >
                                {subItem.name}
                              </Button>
                            </Link>
                          ))}
                        </Box>
                      </Box>
                    ) : (
                      <Link to={item.path}>
                        <Button
                          fullWidth
                          className="text-white justify-start text-left hover:bg-gray-700"
                        >
                          {item.name}
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                ))}
                <Button
                  variant="contained"
                  fullWidth
                  className="bg-amber-500 hover:bg-amber-600 mt-2"
                >
                  Book A Table
                </Button>
              </Box>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
