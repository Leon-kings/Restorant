// src/components/CheckoutForm.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { CreditCard, LocalShipping, Receipt } from '@mui/icons-material';

const steps = ['Shipping', 'Payment', 'Review'];

export const Payment = ({ cart, total }) => {
  const [activeStep, setActiveStep] = useState(0);
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
    console.log('Order submitted:', { shippingData, paymentData, cart, total });
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
                    secondary={`$${(item.price * item.quantity)}`}
                  />
                </ListItem>
              ))}
              <Divider />
              <ListItem>
                <ListItemText primary="Subtotal" />
                <Typography variant="subtitle1">${total}</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Shipping" />
                <Typography variant="subtitle1">$0.00</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Total" />
                <Typography variant="h6">${total}</Typography>
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
                  <Typography>${(item.price * item.quantity)}</Typography>
                </ListItem>
              ))}
              <Divider sx={{ my: 1 }} />
              <ListItem sx={{ py: 1 }}>
                <ListItemText primary="Subtotal" />
                <Typography>${total}</Typography>
              </ListItem>
              <ListItem sx={{ py: 1 }}>
                <ListItemText primary="Shipping" />
                <Typography>$0.00</Typography>
              </ListItem>
              <Divider sx={{ my: 1 }} />
              <ListItem sx={{ py: 1 }}>
                <ListItemText primary="Total" />
                <Typography variant="h6">${total}</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

