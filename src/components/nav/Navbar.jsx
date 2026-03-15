
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { 
  Menu as MenuIcon, 
  Close,
  Restaurant,
  ContactMail,
  Dashboard,
  CheckCircle,
  Error,
  Logout,
  Person,
  AdminPanelSettings,
  CalendarMonth,
  Phone,
  Email,
  Message,
  Event,
  AccessTime,
  People,
  DinnerDining,
  PersonAdd,
  LockReset,
  ArrowBack,
  Star,
  LocalDining,
  WineBar,
  Facebook,
  Twitter,
  Instagram,
  LocationOn,
  Schedule,
  Security
} from "@mui/icons-material";
import axios from "axios";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [loginTab, setLoginTab] = useState(0);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  
  // Form states
  const [loginData, setLoginData] = useState({ 
    email: '', 
    password: '', 
    remember: false 
  });
  
  const [registerData, setRegisterData] = useState({ 
    fullName: '',
    email: '', 
    password: '', 
    confirmPassword: '',
    phone: '',
    agreeTerms: false
  });
  
  const [contactData, setContactData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    subject: '',
    message: '' 
  });
  
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'regular',
    requests: '',
    tablePreference: 'any'
  });

  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState({
    login: false,
    register: false,
    contact: false,
    booking: false,
    forgotPassword: false
  });

  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedRole = localStorage.getItem('userRole');
    if (savedUser && savedRole) {
      setUser(JSON.parse(savedUser));
      setUserRole(savedRole);
    }
  }, []);

  // API Handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(prev => ({ ...prev, login: true }));
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockUser = { username: loginData.email.split('@')[0] };
      setUser(mockUser);
      setUserRole('user');
      
      if (loginData.remember) {
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('userRole', 'user');
      }
      
      setModalMessage(`Welcome ${mockUser.username}!`);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setActiveModal(null);
        setLoginData({ email: '', password: '', remember: false });
      }, 2000);
      
    } catch (error) {
      setModalMessage('Invalid email or password');
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
    } finally {
      setLoading(prev => ({ ...prev, login: false }));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      setModalMessage('Passwords do not match');
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
      return;
    }
    
    if (!registerData.agreeTerms) {
      setModalMessage('Please agree to the terms');
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
      return;
    }
    
    setLoading(prev => ({ ...prev, register: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setModalMessage('Registration successful! Please login.');
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setLoginTab(0);
        setRegisterData({ 
          fullName: '', email: '', password: '', 
          confirmPassword: '', phone: '', agreeTerms: false 
        });
      }, 2000);
      
    } catch (error) {
      setModalMessage('Registration failed');
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
    } finally {
      setLoading(prev => ({ ...prev, register: false }));
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (forgotPasswordData.newPassword !== forgotPasswordData.confirmPassword) {
      setModalMessage('Passwords do not match');
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
      return;
    }
    
    setLoading(prev => ({ ...prev, forgotPassword: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setModalMessage('Password reset successful!');
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setShowForgotPassword(false);
        setForgotPasswordData({ email: '', newPassword: '', confirmPassword: '' });
      }, 2000);
      
    } catch (error) {
      setModalMessage('Password reset failed');
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
    } finally {
      setLoading(prev => ({ ...prev, forgotPassword: false }));
    }
  };

  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(prev => ({ ...prev, contact: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setModalMessage('Message sent successfully!');
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setActiveModal(null);
        setContactData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 2000);
      
    } catch (error) {
      setModalMessage('Failed to send message');
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
    } finally {
      setLoading(prev => ({ ...prev, contact: false }));
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(prev => ({ ...prev, booking: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setModalMessage('Table booked successfully! Check your email for confirmation.');
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setActiveModal(null);
        setBookingData({
          name: '', email: '', phone: '', date: '', time: '', 
          guests: '2', occasion: 'regular', requests: '', tablePreference: 'any'
        });
      }, 2000);
      
    } catch (error) {
      setModalMessage('Booking failed');
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 2000);
    } finally {
      setLoading(prev => ({ ...prev, booking: false }));
    }
  };

  const handleLogout = async () => {
    try {
      setUser(null);
      setUserRole(null);
      localStorage.removeItem('user');
      localStorage.removeItem('userRole');
      setModalMessage('Logged out successfully');
      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 2000);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleDashboardClick = () => {
    if (userRole === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'MENU', path: '/menu' },
    { name: 'SERVICES', path: '/services' },
    { name: 'TESTIMONY', path: '/testimony' },
  ];

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    })
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

  const buttonHoverVariants = {
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  // Modal Images
  const modalImages = {
    login: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    register: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    contact: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    booking: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    forgot: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 via-gray-900 to-black border-b border-gray-800 shadow-2xl"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Left */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Restaurant className="text-amber-500 text-2xl sm:text-3xl" />
                </motion.div>
                <span className="text-white font-bold text-lg sm:text-xl bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  GOURMET
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-500 text-sm font-medium tracking-wide transition-colors relative group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                className="h-8 w-px bg-gradient-to-b from-transparent via-amber-500 to-transparent"
              />

              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setActiveModal('contact')}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                CONTACT
              </motion.button>

              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                className="h-8 w-px bg-gradient-to-b from-transparent via-amber-500 to-transparent"
              />

              <motion.button
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setActiveModal('booking')}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                BOOK TABLE
              </motion.button>

              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                className="h-8 w-px bg-gradient-to-b from-transparent via-amber-500 to-transparent"
              />
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {user ? (
                <>
                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleDashboardClick}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium shadow-lg"
                  >
                    {userRole === 'admin' ? <AdminPanelSettings className="text-base" /> : <Dashboard className="text-base" />}
                    <span className="hidden lg:inline">DASHBOARD</span>
                  </motion.button>

                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium shadow-lg"
                  >
                    <Logout className="text-base" />
                    <span className="hidden lg:inline">LOGOUT</span>
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => {
                      setActiveModal('login');
                      setLoginTab(0);
                    }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium shadow-lg"
                  >
                    <span className="hidden lg:inline">LOGIN</span>
                  </motion.button>

                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => {
                      setActiveModal('login');
                      setLoginTab(1);
                    }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium shadow-lg"
                  >
                    <span className="hidden lg:inline">REGISTER</span>
                  </motion.button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.button
                    key="close"
                    className="bg-gradient-to-t from-red-500 to-red-700 text-white"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <Close />
                  </motion.button>
                ) : (
                  <motion.button
                    key="menu"
                    className="bg-gradient-to-t from-blue-500 to-indigo-400 text-white"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                  >
                    <MenuIcon />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gradient-to-b from-gray-900 to-black border-t border-gray-800"
            >
              <div className="container mx-auto px-4 py-4 sm:py-6">
                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className="block text-gray-300 hover:text-amber-500 py-3 px-4 text-base font-medium bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg transition-all hover:shadow-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => {
                      setActiveModal('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium shadow-lg"
                  >
                    <span>CONTACT</span>
                  </motion.button>

                  <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => {
                      setActiveModal('booking');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium shadow-lg"
                  >
                    <span>BOOK</span>
                  </motion.button>
                </div>

                <div className="mt-4 space-y-3">
                  {user ? (
                    <>
                      <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => {
                          handleDashboardClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium shadow-lg"
                      >
                        {userRole === 'admin' ? <AdminPanelSettings /> : <Dashboard />}
                        <span>DASHBOARD</span>
                      </motion.button>

                      <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium shadow-lg"
                      >
                        <span>LOGOUT</span>
                      </motion.button>
                    </>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => {
                          setActiveModal('login');
                          setLoginTab(0);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg"
                      >
                        <span>LOGIN</span>
                      </motion.button>

                      <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        onClick={() => {
                          setActiveModal('login');
                          setLoginTab(1);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg"
                      >
                        <span>REGISTER</span>
                      </motion.button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-16 sm:h-20" />

      {/* Login/Register Modal with Image */}
      <AnimatePresence>
        {activeModal === 'login' && !showForgotPassword && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side - Image */}
              <div className="md:w-1/2 relative h-48 md:h-auto overflow-hidden">
                <img 
                  src={loginTab === 0 ? modalImages.login : modalImages.register}
                  alt={loginTab === 0 ? "Login" : "Register"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {loginTab === 0 ? 'Welcome Back!' : 'Join Us Today!'}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {loginTab === 0 
                      ? 'Sign in to access your account and manage your bookings.'
                      : 'Create an account to enjoy exclusive offers and easy reservations.'}
                  </p>
                  <div className="flex mt-4 space-x-2">
                    {[1,2,3].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-amber-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:w-1/2 p-6 sm:p-8">
                {/* Tabs */}
             

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 text-white bg-gradient-to-t from-red-500 to-red-700 p-1 rounded-full z-10"
                >
                  <Close />
                </motion.button>

                {/* Login Form */}
                {loginTab === 0 && (
                  <motion.form
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    onSubmit={handleLogin}
                  >
                    <div className="mb-4">
                      <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Email Address</label>
                      <input
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Password</label>
                      <input
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        placeholder="Enter password"
                        required
                      />
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={loginData.remember}
                          onChange={(e) => setLoginData({...loginData, remember: e.target.checked})}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-xs sm:text-sm text-gray-600">Remember me</span>
                      </label>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Forgot password?
                      </motion.button>
                    </div>

                    <motion.button
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      type="submit"
                      disabled={loading.login}
                      className="w-full py-2 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-medium shadow-lg disabled:opacity-50"
                    >
                      {loading.login ? 'LOGGING IN...' : 'LOGIN'}
                    </motion.button>
                  </motion.form>
                )}

                {/* Register Form */}
                {loginTab === 1 && (
                  <motion.form
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    onSubmit={handleRegister}
                  >
                    <div className="mb-4">
                      <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Full Name</label>
                      <input
                        type="text"
                        value={registerData.fullName}
                        onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        value={registerData.phone}
                        onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Password</label>
                      <input
                        type="password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Create password"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Confirm Password</label>
                      <input
                        type="password"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Confirm password"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={registerData.agreeTerms}
                          onChange={(e) => setRegisterData({...registerData, agreeTerms: e.target.checked})}
                          className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                        />
                        <span className="text-xs sm:text-sm text-gray-600">
                          I agree to the Terms of Service and Privacy Policy
                        </span>
                      </label>
                    </div>

                    <motion.button
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      type="submit"
                      disabled={loading.register}
                      className="w-full py-2 sm:py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-sm sm:text-base font-medium shadow-lg disabled:opacity-50"
                    >
                      {loading.register ? 'REGISTERING...' : 'REGISTER'}
                    </motion.button>
                  </motion.form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Forgot Password Modal with Image */}
      <AnimatePresence>
        {showForgotPassword && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setShowForgotPassword(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side - Image */}
              <div className="md:w-1/2 relative h-48 md:h-auto overflow-hidden">
                <img 
                  src={modalImages.forgot}
                  alt="Reset Password"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Reset Password</h3>
                  <p className="text-gray-200 text-sm">
                    Don't worry! Enter your email and choose a new password to regain access to your account.
                  </p>
                  <div className="flex mt-4 space-x-2">
                    <LockReset className="text-amber-500 text-3xl" />
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:w-1/2 p-6 sm:p-8">
                {/* Back Button */}
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowForgotPassword(false)}
                  className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 bg-gray-100 p-1 rounded-full z-10"
                >
                  <ArrowBack />
                </motion.button>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setShowForgotPassword(false);
                    setActiveModal(null);
                  }}
                  className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 text-white p-1 rounded-full z-10"
                >
                  <Close />
                </motion.button>

                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <LockReset className="text-white text-2xl" />
                  </motion.div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Reset Your Password
                  </h2>
                  <p className="text-sm text-gray-600">
                    Enter your email and choose a new password
                  </p>
                </div>

                <form onSubmit={handleForgotPassword}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={forgotPasswordData.email}
                      onChange={(e) => setForgotPasswordData({...forgotPasswordData, email: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={forgotPasswordData.newPassword}
                      onChange={(e) => setForgotPasswordData({...forgotPasswordData, newPassword: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter new password"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={forgotPasswordData.confirmPassword}
                      onChange={(e) => setForgotPasswordData({...forgotPasswordData, confirmPassword: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Confirm new password"
                      required
                    />
                  </div>

                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    disabled={loading.forgotPassword}
                    className="w-full py-2 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-medium shadow-lg disabled:opacity-50"
                  >
                    {loading.forgotPassword ? (
                      <span className="flex items-center justify-center space-x-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>RESETTING...</span>
                      </span>
                    ) : (
                      'RESET PASSWORD'
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal with Image */}
      <AnimatePresence>
        {activeModal === 'contact' && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side - Image */}
              <div className="md:w-1/2 relative h-48 md:h-auto overflow-hidden">
                <img 
                  src={modalImages.contact}
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Get in Touch</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-200">
                      <Phone className="text-amber-500 text-sm" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-200">
                      <Email className="text-amber-500 text-sm" />
                      <span className="text-sm">contact@gourmet.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-200">
                      <LocationOn className="text-amber-500 text-sm" />
                      <span className="text-sm">123 Gourmet Street, NY</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:w-1/2 p-6 sm:p-8">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 text-white p-1 rounded-full z-10"
                >
                  <Close />
                </motion.button>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  CONTACT US
                </h2>

                <form onSubmit={handleContact}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      value={contactData.name}
                      onChange={(e) => setContactData({...contactData, name: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        value={contactData.email}
                        onChange={(e) => setContactData({...contactData, email: e.target.value})}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Your email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Phone</label>
                      <input
                        type="tel"
                        value={contactData.phone}
                        onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Your phone"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      value={contactData.subject}
                      onChange={(e) => setContactData({...contactData, subject: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Message subject"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-xs sm:text-sm mb-2 font-medium">Message</label>
                    <textarea
                      value={contactData.message}
                      onChange={(e) => setContactData({...contactData, message: e.target.value})}
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                      placeholder="Your message"
                      required
                    />
                  </div>

                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    disabled={loading.contact}
                    className="w-full py-2 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-medium shadow-lg disabled:opacity-50"
                  >
                    {loading.contact ? 'SENDING...' : 'SEND MESSAGE'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal with Image */}
      <AnimatePresence>
        {activeModal === 'booking' && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side - Image */}
              <div className="md:w-1/2 relative h-48 md:h-auto overflow-hidden">
                <img 
                  src={modalImages.booking}
                  alt="Book a Table"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Reserve Your Table</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Experience exceptional dining in an elegant atmosphere. Book your table now for an unforgettable culinary journey.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Schedule className="text-amber-500 text-sm" />
                      <span className="text-white text-xs">Open 11am - 11pm</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Restaurant className="text-amber-500 text-sm" />
                      <span className="text-white text-xs">50+ Dishes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:w-1/2 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 text-white p-1 rounded-full z-10"
                >
                  <Close />
                </motion.button>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                  BOOK A TABLE
                </h2>

                <form onSubmit={handleBooking}>
                  {/* Personal Information */}
                  <div className="mb-6">
                    <h3 className="text-gray-700 font-semibold mb-3 flex items-center space-x-2">
                      <Person className="text-green-500" />
                      <span className="text-sm">Personal Information</span>
                    </h3>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-gray-700 text-xs mb-1 font-medium">Full Name *</label>
                        <input
                          type="text"
                          value={bookingData.name}
                          onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-gray-700 text-xs mb-1 font-medium">Email *</label>
                          <input
                            type="email"
                            value={bookingData.email}
                            onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                            placeholder="Your email"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-xs mb-1 font-medium">Phone *</label>
                          <input
                            type="tel"
                            value={bookingData.phone}
                            onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                            placeholder="Phone"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="mb-6">
                    <h3 className="text-gray-700 font-semibold mb-3 flex items-center space-x-2">
                      <CalendarMonth className="text-green-500" />
                      <span className="text-sm">Booking Details</span>
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-gray-700 text-xs mb-1 font-medium">Date *</label>
                          <input
                            type="date"
                            value={bookingData.date}
                            onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-xs mb-1 font-medium">Time *</label>
                          <input
                            type="time"
                            value={bookingData.time}
                            onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-gray-700 text-xs mb-1 font-medium">Guests *</label>
                          <select
                            value={bookingData.guests}
                            onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          >
                            {[1,2,3,4,5,6,7,8].map(num => (
                              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-700 text-xs mb-1 font-medium">Table Preference</label>
                          <select
                            value={bookingData.tablePreference}
                            onChange={(e) => setBookingData({...bookingData, tablePreference: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          >
                            <option value="any">Any</option>
                            <option value="window">Window Side</option>
                            <option value="indoor">Indoor</option>
                            <option value="outdoor">Outdoor</option>
                            <option value="private">Private Room</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-xs mb-1 font-medium">Occasion</label>
                        <select
                          value={bookingData.occasion}
                          onChange={(e) => setBookingData({...bookingData, occasion: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        >
                          <option value="regular">Regular Dining</option>
                          <option value="birthday">Birthday</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="business">Business Meeting</option>
                          <option value="date">Date Night</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="mb-6">
                    <h3 className="text-gray-700 font-semibold mb-3 flex items-center space-x-2">
                      <Message className="text-green-500" />
                      <span className="text-sm">Special Requests</span>
                    </h3>
                    
                    <textarea
                      value={bookingData.requests}
                      onChange={(e) => setBookingData({...bookingData, requests: e.target.value})}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                      placeholder="Any dietary restrictions, allergies, or special requests?"
                    />
                  </div>

                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    disabled={loading.booking}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-sm sm:text-base font-medium shadow-lg disabled:opacity-50"
                  >
                    {loading.booking ? (
                      <span className="flex items-center justify-center space-x-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Event />
                        </motion.div>
                        <span>BOOKING...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <CalendarMonth />
                        <span>BOOK NOW</span>
                      </span>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success/Error Modals */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-20 sm:top-24 left-1/2 transform -translate-x-1/2 z-[70] bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-2xl flex items-center space-x-2 text-sm sm:text-base"
          >
            <CheckCircle />
            <span>{modalMessage}</span>
          </motion.div>
        )}

        {showErrorModal && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-20 sm:top-24 left-1/2 transform -translate-x-1/2 z-[70] bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-2xl flex items-center space-x-2 text-sm sm:text-base"
          >
            <Error />
            <span>{modalMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};