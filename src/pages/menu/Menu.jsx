/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Tabs, 
  Tab, 
  Grid, 
  useMediaQuery,
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Paper,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  LocalCafe, 
  Fastfood, 
  Restaurant,
  ShoppingCart,
  Close,
  Delete,
  CreditCard,
  LocalShipping,
  Receipt
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const steps = ['Shipping', 'Payment', 'Review'];

export const FoodMenu = () => {
  const menuCategories = [
    {
      id: 'breakfast',
      label: 'Breakfast',
      icon: <LocalCafe fontSize="large" />,
      subtitle: 'Popular',
      items: [
        { id: 1, name: 'Chicken Burger', price: 115, description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80' },
        { id: 2, name: 'Vegetarian Breakfast', price: 95, description: 'Healthy morning delight with fresh ingredients', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80' },
        { id: 3, name: 'Pancake Stack', price: 85, description: 'Fluffy pancakes with maple syrup', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80' },
        { id: 4, name: 'Avocado Toast', price: 75, description: 'Sourdough bread with fresh avocado', image: 'https://images.unsplash.com/photo-1515446134809-993c501ca304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { id: 5, name: 'Eggs Benedict', price: 105, description: 'Classic breakfast with hollandaise sauce', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80' },
        { id: 6, name: 'French Toast', price: 90, description: 'Caramelized brioche with berries', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1494&q=80' },
        { id: 7, name: 'Smoothie Bowl', price: 80, description: 'Fresh fruits and granola', image: 'https://images.unsplash.com/photo-1505252585461-04db1a846cca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { id: 8, name: 'Breakfast Burrito', price: 110, description: 'Hearty wrap with eggs and sausage', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' }
      ]
    },
    {
      id: 'lunch',
      label: 'Lunch',
      icon: <Fastfood fontSize="large" />,
      subtitle: 'Special',
      items: [
        { id: 1, name: 'Chicken Burger', price: 115, description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80' },
        { id: 2, name: 'Caesar Salad', price: 95, description: 'Crispy romaine with parmesan', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
        { id: 3, name: 'Margherita Pizza', price: 125, description: 'Classic tomato and mozzarella', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1381&q=80' },
        { id: 4, name: 'Beef Tacos', price: 105, description: 'Three soft tacos with salsa', image: 'https://images.unsplash.com/photo-1565299585323-38f6e5f38773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80' },
        { id: 5, name: 'Club Sandwich', price: 110, description: 'Triple decker with turkey and bacon', image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
        { id: 6, name: 'Pasta Carbonara', price: 120, description: 'Creamy sauce with pancetta', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { id: 7, name: 'Beef Burger', price: 130, description: 'Angus beef with cheese', image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
        { id: 8, name: 'Grilled Salmon', price: 145, description: 'With lemon butter sauce', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
      ]
    },
    {
      id: 'dinner',
      label: 'Dinner',
      icon: <Restaurant fontSize="large" />,
      subtitle: 'Lovely',
      items: [
        { id: 1, name: 'Chicken Burger', price: 115, description: 'Ipsum ipsum clita erat amet dolor justo diam', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80' },
        { id: 2, name: 'Filet Mignon', price: 195, description: '8oz tender beef cut', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { id: 3, name: 'Lobster Risotto', price: 175, description: 'Creamy arborio rice with lobster', image: 'https://images.unsplash.com/photo-1600628421060-939639517883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { id: 4, name: 'Duck Confit', price: 165, description: 'Slow cooked duck leg', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { id: 5, name: 'Mushroom Ravioli', price: 135, description: 'Homemade pasta with truffle', image: 'https://images.unsplash.com/photo-1608212589631-1236b6287dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { id: 6, name: 'Rack of Lamb', price: 185, description: 'Herb crusted with mint jelly', image: 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80' },
        { id: 7, name: 'Seafood Paella', price: 155, description: 'Spanish rice with mixed seafood', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { id: 8, name: 'Vegetable Curry', price: 125, description: 'Spicy coconut milk curry', image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
      ]
    }
  ];
  const [activeComponent, setActiveComponent] = useState('menu'); // 'menu' or 'checkout'
  const [activeStep, setActiveStep] = useState(0);
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('restaurantCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('restaurantCart', JSON.stringify(cart));
  }, [cart]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addToOrder = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromOrder(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment here (would connect to your payment gateway)
    console.log('Order submitted:', { shippingData, paymentData, cart, total: calculateTotal() });
    handleNext();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <form className='bg-amber-50 p-6'>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={shippingData.firstName}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={shippingData.lastName}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Address"
                  name="address"
                  value={shippingData.address}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="City"
                  name="city"
                  value={shippingData.city}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="State/Province"
                  name="state"
                  value={shippingData.state}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Zip/Postal Code"
                  name="zip"
                  value={shippingData.zip}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Country"
                  name="country"
                  value={shippingData.country}
                  onChange={handleShippingChange}
                />
              </Grid>
            </Grid>
          </form>
        );
      case 1:
        return (
          <form className='bg-amber-50'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Name on Card"
                  name="cardName"
                  value={paymentData.cardName}
                  onChange={handlePaymentChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Card Number"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="1234 5678 9012 3456"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Expiry Date"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handlePaymentChange}
                  placeholder="MM/YY"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="CVV"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handlePaymentChange}
                  placeholder="123"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="I agree to the terms and conditions"
                />
              </Grid>
            </Grid>
          </form>
        );
      case 2:
        return (
          <Box className='bg-amber-50'>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <List dense>
              {cart.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={`${item.name} x ${item.quantity}`}
                    secondary={`$${(item.price * item.quantity).toFixed(2)}`}
                  />
                </ListItem>
              ))}
              <Divider />
              <ListItem>
                <ListItemText primary="Subtotal" />
                <Typography variant="subtitle1">${calculateTotal().toFixed(2)}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Shipping" />
                <Typography variant="subtitle1">$0.00</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Total" />
                <Typography variant="h6">${calculateTotal().toFixed(2)}</Typography>
              </ListItem>
            </List>
            <Typography variant="body2" color="textSecondary" mt={2}>
              Shipping to: {shippingData.address}, {shippingData.city}, {shippingData.state} {shippingData.zip}, {shippingData.country}
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
              Payment method: **** **** **** {paymentData.cardNumber.slice(-4)}
            </Typography>
          </Box>
        );
      default:
        throw new Error('Unknown step');
    }
  };



  if (activeComponent === 'checkout') {
    return (
      <Box className='bg-white py-8 px-3 rounded-2xl' sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {activeStep === steps.length ? (
              <Box textAlign="center">
                <Typography variant="h5" gutterBottom>
                  Thank you for your order!
                </Typography>
                <Typography variant="body1">
                  Your order number is #2001539. We have emailed your order confirmation.
                </Typography>
                <Button 
                  variant="contained" 
                  sx={{ mt: 3 }}
                  onClick={() => {
                    setActiveComponent('menu');
                    setActiveStep(0);
                    setCart([]);
                  }}
                >
                  Back to Menu
                </Button>
              </Box>
            ) : (
              <Box>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mr: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                    disabled={activeStep === 1 && !agreeTerms}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <List>
                {(cart || []).map(item => (
                  <ListItem key={item.id} sx={{ py: 1 }}>
                    <ListItemText
                      primary={`${item.name} x ${item.quantity}`}
                      secondary={`$${item.price} each`}
                    />
                    <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
                  </ListItem>
                ))}
                <Divider sx={{ my: 1 }} />
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Subtotal" />
                  <Typography>${calculateTotal().toFixed(2)}</Typography>
                </ListItem>
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Shipping" />
                  <Typography>$0.00</Typography>
                </ListItem>
                <Divider sx={{ my: 1 }} />
                <ListItem sx={{ py: 1 }}>
                  <ListItemText primary="Total" />
                  <Typography variant="h6">${calculateTotal().toFixed(2)}</Typography>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box className="py-16 mt-4 mb-2 rounded-2xl md:py-20 lg:py-24 bg-gray-800 text-white dark:text-white relative">
      {/* Cart Icon with Badge */}
      <IconButton
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          right: 0,
          top: 24,
          zIndex: 999,
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark'
          }
        }}
      >
        <Badge badgeContent={cart.reduce((total, item) => total + item.quantity, 0)} color="error">
          <ShoppingCart />
        </Badge>
      </IconButton>

      {/* Order Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: isMobile ? '100%' : 400,
            padding: 2
          }
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight="bold">
            Your Order
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <Close />
          </IconButton>
        </Box>

        <Divider />

        {cart.length === 0 ? (
          <Box textAlign="center" mt={4}>
            <Typography variant="body1">Your cart is empty</Typography>
          </Box>
        ) : (
          <>
            <List>
              {cart.map((item) => (
                <ListItem key={item.id} secondaryAction={
                  <IconButton edge="end" onClick={() => removeFromOrder(item.id)}>
                    <Delete color="error" />
                  </IconButton>
                }>
                  <Box display="flex" alignItems="center" width="100%">
                    <img 
                      src={item.image} 
                      alt=''
                      style={{ 
                        width: 50, 
                        height: 50, 
                        objectFit: 'cover',
                        borderRadius: 8,
                        marginRight: 16
                      }} 
                    />
                    <Box flexGrow={1}>
                      <ListItemText 
                        primary={item.name} 
                        secondary={`$${item.price} x ${item.quantity}`} 
                      />
                    </Box>
                    <Box display="flex" alignItems="center">
                      <IconButton 
                        size="small" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </IconButton>
                      <Typography mx={1}>{item.quantity}</Typography>
                      <IconButton 
                        size="small" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </IconButton>
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>

            <Divider />

            <Box mt={2} mb={4}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" fontWeight="bold">
                  ${calculateTotal().toFixed(2)}
                </Typography>
              </Box>
            </Box>

            <Button 
              variant="contained" 
              color="primary" 
              fullWidth
              size="large"
              onClick={() => {
                setDrawerOpen(false);
                setActiveComponent('checkout');
              }}
            >
              Proceed to Checkout
            </Button>
          </>
        )}
      </Drawer>

      {/* Menu Content */}
      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Typography
            variant="subtitle1"
            className="text-primary italic font-semibold uppercase tracking-wider mb-2"
          >
            Food Menu
          </Typography>
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Most Popular Items
          </Typography>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        {/* Category Tabs */}
        <Box className="flex justify-center mb-12">
          <Tabs
            value={value}
            onChange={handleChange}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            allowScrollButtonsMobile
            aria-label="food menu categories"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 3
              }
            }}
          >
            {menuCategories.map((category, index) => (
              <Tab
                key={index}
                icon={
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary bg-white"
                  >
                    {category.icon}
                  </motion.div>
                }
                label={
                  <Box className="text-left">
                    <Typography variant="caption" className=" text-gray-100 block">
                      {category.subtitle}
                    </Typography>
                    <Typography variant="subtitle1" className="font-bold text-blue-300">
                      {category.label}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Box>

        {/* Menu Items */}
        {menuCategories.map((category, index) => (
          <Box
            key={index}
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            {value === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Grid container spacing={4}>
                  {category.items.map((item, itemIndex) => (
                    <Grid item xs={12} md={6} key={itemIndex}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden flex transition-all duration-300 h-full"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 overflow-hidden"
                        >
                          <img
                            src={item.image}
                            alt=''
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <Box className="p-4 flex flex-col flex-grow">
                          <Box className="flex justify-between items-baseline border-b border-gray-100 pb-2 mb-2">
                            <Typography
                              variant="h5"
                              className="font-bold text-gray-800"
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="h6"
                              className="text-primary font-bold"
                            >
                              ${item.price}
                            </Typography>
                          </Box>
                          <Typography
                            variant="body2"
                            className="text-gray-600 italic flex-grow"
                          >
                            {item.description}
                          </Typography>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-3 self-end"
                          >
                            <button 
                              className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                              onClick={() => addToOrder(item)}
                            >
                              + Add to Order
                            </button>
                          </motion.div>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
};