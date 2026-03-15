// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Tabs,
//   Tab,
//   Grid,
//   useMediaQuery,
//   Badge,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Button,
//   Stepper,
//   Step,
//   StepLabel,
//   TextField,
//   Paper,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import {
//   LocalCafe,
//   Fastfood,
//   Restaurant,
//   ShoppingCart,
//   Close,
//   Delete,
//   CreditCard,
//   LocalShipping,
//   Receipt,
// } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

// const steps = ["Shipping", "Payment", "Review"];

// export const FoodMenu = () => {
//   const menuCategories = [
//     {
//       id: "breakfast",
//       label: "Breakfast",
//       icon: <LocalCafe fontSize="large" />,
//       subtitle: "Popular",
//       items: [
//         {
//           id: 1,
//           name: "Chicken Burger",
//           price: 115,
//           description:
//             "Chicken burger recipes · Sriracha-glazed chicken burger & pickled cabbage · Caesar brussels slaw & parmesan chicken schnitzel burgers.",
//           image:
//             "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
//         },
//         {
//           id: 2,
//           name: "Vegetarian Breakfast",
//           price: 95,
//           description:
//             "A collection of tasty vegetarian breakfast recipes. Loads of really straightforward and simple recipes with plenty of flavour!",
//           image:
//             "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
//         },
//         {
//           id: 3,
//           name: "Pancake Stack",
//           price: 85,
//           description:
//             "Our world-famous buttermilk pancake stacks served with maple-flavoured syrup and your choice of whipped butter, cream, or vanilla ice cream.",
//           image:
//             "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80",
//         },
//         {
//           id: 4,
//           name: "Avocado Toast",
//           price: 75,
//           description:
//             "This perfect avocado toast recipe is simple - all you need is good toasted bread, avocado, lemon juice, and salt! Plus, find 5 delicious variations.",
//           image:
//             "https://images.unsplash.com/photo-1515446134809-993c501ca304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         },
//         {
//           id: 5,
//           name: "Eggs Benedict",
//           price: 105,
//           description:
//             "Eggs Benedict is a common American breakfast or brunch dish, consisting of two halves of an English muffin, each topped with Canadian bacon or sliced ham.",
//           image:
//             "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
//         },
//         {
//           id: 6,
//           name: "French Toast",
//           price: 90,
//           description:
//             "Thick slices of bread, soaked in a mixture of beaten eggs with milk and cinnamon, toasted in a frying pan, and served with butter and maple syrup.",
//           image:
//             "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1494&q=80",
//         },
//         {
//           id: 7,
//           name: "Smoothie Bowl",
//           price: 80,
//           description:
//             " A smoothie bowl is a smoothie eaten from a bowl instead of a cup. Smoothie bowls are more nutrient-dense, with toppings like granola, seeds, and dried fruit.",
//           image:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeKD7oE-wB5Z4sj3Dd-T7n6EPlz5bROML-xSfISynap4pY-ou6BWQxClqgC2-0dDFnk0aAGlJLgZgy8-BY-h2Y5hx0Jd2bCp7Fz6ndA",
//         },
//         {
//           id: 8,
//           name: "Breakfast Burrito",
//           price: 110,
//           description:
//             "Burrito, a common cylindrical food item of Mexican and American origin consisting of a tortilla wrapped around a mixed filling of such ingredients as meat, cheese, beans, and vegetables.",
//           image:
//             "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//         },
//       ],
//     },
//     {
//       id: "lunch",
//       label: "Lunch",
//       icon: <Fastfood fontSize="large" />,
//       subtitle: "Special",
//       items: [
//         {
//           id: 1,
//           name: "Chicken Burger",
//           price: 115,
//           description:
//             "Chicken burger recipes · Sriracha-glazed chicken burger & pickled cabbage · Caesar brussels slaw & parmesan chicken schnitzel burgers.",
//           image:
//             "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
//         },
//         {
//           id: 2,
//           name: "Caesar Salad",
//           price: 95,
//           description:
//             "A Caesar salad also known as Caesar's salad, is a green salad of romaine lettuce and croutons dressed with lemon juice (or lime juice), olive oil, eggs.",
//           image:
//             "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//         },
//         {
//           id: 3,
//           name: "Margherita Pizza",
//           price: 125,
//           description:
//             "Pizza Margherita, also known as Margherita pizza, is, together with the pizza marinara, the typical Neapolitan pizza. It is roundish in shape with a raised.",
//           image:
//             "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1381&q=80",
//         },
//         {
//           id: 4,
//           name: "Beef Tacos",
//           price: 105,
//           description:
//             "Make these vibrant beef tacos with a pack of mince. Go to the extra effort of making your own spice mix for even more flavour, and use soft tortillas.",
//           image:
//             "https://funwithoutfodmaps.com/wp-content/uploads/2022/07/Low-FODMAP-Beef-Tacos-Square.jpg",
//         },
//         {
//           id: 5,
//           name: "Club Sandwich",
//           price: 110,
//           description:
//             "A club sandwich or clubhouse sandwich, is a three-layer sandwich consisting of three slices of bread (traditionally toasted), sliced cooked poultry, fried bacon .",
//           image:
//             "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//         },
//         {
//           id: 6,
//           name: "Pasta Carbonara",
//           price: 120,
//           description:
//             " Pasta carbonara topped with flaky salt in a bowl with a fork made with spaghetti, egg yolks, Pecorino Romano and guanciale.",
//           image:
//             "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         },
//         {
//           id: 7,
//           name: "Beef Burger",
//           price: 130,
//           description:
//             "A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world.",
//           image:
//             "https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//         },
//         {
//           id: 8,
//           name: "Grilled Salmon",
//           price: 145,
//           description:
//             "Glaze succulent salmon fillets in miso, balsamic vinegar and soy, then serve on a bed of noodles and beansprouts for an easy and quick .",
//           image:
//             "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         },
//       ],
//     },
//     {
//       id: "dinner",
//       label: "Dinner",
//       icon: <Restaurant fontSize="large" />,
//       subtitle: "Lovely",
//       items: [
//         {
//           id: 1,
//           name: "Chicken Burger",
//           price: 115,
//           description:
//             "Chicken burger recipes · Sriracha-glazed chicken burger & pickled cabbage · Caesar brussels slaw & parmesan chicken schnitzel burgers.",
//           image:
//             "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
//         },
//         {
//           id: 2,
//           name: "Filet Mignon",
//           price: 195,
//           description:
//             "Filet mignon is usually presented as a round cut taken from the thinner end of a piece of tenderloin. It is often the most tender and lean cut.",
//           image:
//             "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         },
//         {
//           id: 3,
//           name: "Lobster Risotto",
//           price: 175,
//           description:
//             "This delicious and decadent Lobster Risotto is made with chunks of lobster and cherry tomatoes in a sherry wine sauce.",
//           image:
//             "https://images.unsplash.com/photo-1600628421060-939639517883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         },
//         {
//           id: 4,
//           name: "Duck Confit",
//           price: 165,
//           description:
//             "Duck confit is a French dish made with whole duck. In Gascony, according to the families perpetuating the tradition of duck confit, all the pieces of duck .",
//           image:
//             "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         },
//         {
//           id: 5,
//           name: "Mushroom Ravioli",
//           price: 135,
//           description:
//             "A quick cheese ravioli with buttery, balsamic caramelized mushrooms, and fresh garden herbs. When you're in need of an easy, 30 minute dinner.",
//           image:
//             "https://thecozycook.com/wp-content/uploads/2022/05/Mushroom-Ravioli-Sauce-f.jpg",
//         },
//         {
//           id: 6,
//           name: "Rack of Lamb",
//           price: 185,
//           description:
//             "Rack of lamb is so elegant. Season rack of lamb with rosemary, thyme, and garlic, then slather with olive oil and roast in the oven.",
//           image:
//             "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
//         },
//         {
//           id: 7,
//           name: "Seafood Paella",
//           price: 155,
//           description:
//             "This Seafood Paella recipe is packed with shrimp, calamari, mussels and delicious flavors and makes a fantastic, impressive dinner.",
//           image:
//             "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         },
//         {
//           id: 8,
//           name: "Vegetable Curry",
//           price: 125,
//           description:
//             "An easy veggie curry that makes a cheap and healthy meal. It uses basic store cupboard ingredients so is very quick and easy to cook.",
//           image:
//             "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//         },
//       ],
//     },
//   ];
//   const [activeComponent, setActiveComponent] = useState("menu"); // 'menu' or 'checkout'
//   const [activeStep, setActiveStep] = useState(0);
//   const [value, setValue] = useState(0);
//   const [cart, setCart] = useState([]);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [shippingData, setShippingData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     country: "",
//   });
//   const [paymentData, setPaymentData] = useState({
//     cardName: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//   });
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const isMobile = useMediaQuery("(max-width:600px)");
//   const navigate = useNavigate();

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("restaurantCart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("restaurantCart", JSON.stringify(cart));
//   }, [cart]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const addToOrder = (item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromOrder = (itemId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
//   };

//   const updateQuantity = (itemId, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromOrder(itemId);
//       return;
//     }
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === itemId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handleNext = () => setActiveStep((prev) => prev + 1);
//   const handleBack = () => setActiveStep((prev) => prev - 1);

//   const handleShippingChange = (e) => {
//     const { name, value } = e.target;
//     setShippingData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePaymentChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process payment here (would connect to your payment gateway)
//     console.log("Order submitted:", {
//       shippingData,
//       paymentData,
//       cart,
//       total: calculateTotal(),
//     });
//     handleNext();
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <form className="bg-amber-50 p-6">
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="First Name"
//                   name="firstName"
//                   value={shippingData.firstName}
//                   onChange={handleShippingChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Last Name"
//                   name="lastName"
//                   value={shippingData.lastName}
//                   onChange={handleShippingChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Address"
//                   name="address"
//                   value={shippingData.address}
//                   onChange={handleShippingChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="City"
//                   name="city"
//                   value={shippingData.city}
//                   onChange={handleShippingChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="State/Province"
//                   name="state"
//                   value={shippingData.state}
//                   onChange={handleShippingChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Zip/Postal Code"
//                   name="zip"
//                   value={shippingData.zip}
//                   onChange={handleShippingChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Country"
//                   name="country"
//                   value={shippingData.country}
//                   onChange={handleShippingChange}
//                 />
//               </Grid>
//             </Grid>
//           </form>
//         );
//       case 1:
//         return (
//           <form className="bg-amber-50">
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Name on Card"
//                   name="cardName"
//                   value={paymentData.cardName}
//                   onChange={handlePaymentChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Card Number"
//                   name="cardNumber"
//                   value={paymentData.cardNumber}
//                   onChange={handlePaymentChange}
//                   placeholder="1234 5678 9012 3456"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="Expiry Date"
//                   name="expiryDate"
//                   value={paymentData.expiryDate}
//                   onChange={handlePaymentChange}
//                   placeholder="MM/YY"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   label="CVV"
//                   name="cvv"
//                   value={paymentData.cvv}
//                   onChange={handlePaymentChange}
//                   placeholder="123"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={agreeTerms}
//                       onChange={(e) => setAgreeTerms(e.target.checked)}
//                       color="primary"
//                     />
//                   }
//                   label="I agree to the terms and conditions"
//                 />
//               </Grid>
//             </Grid>
//           </form>
//         );
//       case 2:
//         return (
//           <Box className="bg-amber-50">
//             <Typography variant="h6" gutterBottom>
//               Order Summary
//             </Typography>
//             <List dense>
//               {cart.map((item) => (
//                 <ListItem key={item.id}>
//                   <ListItemText
//                     primary={`${item.name} x ${item.quantity}`}
//                     secondary={`$${(item.price * item.quantity).toFixed(2)}`}
//                   />
//                 </ListItem>
//               ))}
//               <Divider />
//               <ListItem>
//                 <ListItemText primary="Subtotal" />
//                 <Typography variant="subtitle1">
//                   ${calculateTotal().toFixed(2)}
//                 </Typography>
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Shipping" />
//                 <Typography variant="subtitle1">
//                   ${calculateTotal() / 100}
//                 </Typography>
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Total" />
//                 <Typography variant="h6">
//                   ${(calculateTotal() + calculateTotal() / 100).toFixed(2)}
//                 </Typography>
//               </ListItem>
//             </List>
//             <Typography variant="body2" color="textSecondary" mt={2}>
//               <span className="text-gray-950"> Shipping to:</span>{" "}
//               <b className="text-blue-400 font-bold">
//                 {shippingData.firstName}
//                 {shippingData.lastName}
//               </b>
//               <br />
//               at <b className="text-amber-300">{shippingData.address}</b>,{" "}
//               {shippingData.city},<br />
//               {shippingData.state}- zipcode: {shippingData.zip},{" "}
//               {shippingData.country}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" mt={1}>
//               Payment method: **** **** **** {paymentData.cardNumber.slice(-4)}
//             </Typography>
//           </Box>
//         );
//       default:
//         throw new Error("Unknown step");
//     }
//   };

//   if (activeComponent === "checkout") {
//     return (
//       <Box
//         className="bg-white py-8 px-3 rounded-2xl"
//         sx={{ maxWidth: 800, mx: "auto", my: 4 }}
//       >
//         <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>

//         <Grid container spacing={4}>
//           <Grid item xs={12} md={8}>
//             {activeStep === steps.length ? (
//               <Box textAlign="center">
//                 <Typography variant="h5" gutterBottom>
//                   Thank you for your order!
//                 </Typography>
//                 <Typography variant="body1">
//                   Your order number is {(Math.random() * 1000000).toFixed(7)}.
//                   We have emailed your order confirmation.
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   sx={{ mt: 3 }}
//                   onClick={() => {
//                     setActiveComponent("menu");
//                     setActiveStep(0);
//                     setCart([]);
//                   }}
//                 >
//                   Back to Menu
//                 </Button>
//               </Box>
//             ) : (
//               <Box>
//                 {getStepContent(activeStep)}
//                 <Box
//                   sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}
//                 >
//                   {activeStep !== 0 && (
//                     <Button onClick={handleBack} sx={{ mr: 1 }}>
//                       Back
//                     </Button>
//                   )}
//                   <Button
//                     variant="contained"
//                     onClick={
//                       activeStep === steps.length - 1
//                         ? handleSubmit
//                         : handleNext
//                     }
//                     disabled={activeStep === 1 && !agreeTerms}
//                   >
//                     {activeStep === steps.length - 1 ? "Place order" : "Next"}
//                   </Button>
//                 </Box>
//               </Box>
//             )}
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Paper elevation={3} sx={{ p: 2 }}>
//               <Typography variant="h6" gutterBottom>
//                 Order Summary
//               </Typography>
//               <List>
//                 {(cart || []).map((item) => (
//                   <ListItem key={item.id} sx={{ py: 1 }}>
//                     <ListItemText
//                       primary={`${item.name} x ${item.quantity}`}
//                       secondary={`$${item.price} each`}
//                     />
//                     <Typography>
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </Typography>
//                   </ListItem>
//                 ))}
//                 <Divider sx={{ my: 1 }} />
//                 <ListItem sx={{ py: 1 }}>
//                   <ListItemText primary="Subtotal" />
//                   <Typography>${calculateTotal().toFixed(2)}</Typography>
//                 </ListItem>
//                 <ListItem sx={{ py: 1 }}>
//                   <ListItemText primary="Shipping" />
//                   <Typography>${calculateTotal() / 100}</Typography>
//                 </ListItem>
//                 <Divider sx={{ my: 1 }} />
//                 <ListItem sx={{ py: 1 }}>
//                   <ListItemText primary="Total" />
//                   <Typography variant="h6">
//                     ${(calculateTotal() + calculateTotal() / 100).toFixed(2)}
//                   </Typography>
//                 </ListItem>
//               </List>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   }

//   return (
//     <Box className="py-16 mt-4 mb-2 rounded-2xl md:py-20 lg:py-24 bg-gray-800 text-white dark:text-white relative">
//       {/* Cart Icon with Badge */}
//       <IconButton
//         onClick={() => setDrawerOpen(true)}
//         sx={{
//           position: "fixed",
//           right: 0,
//           top: 24,
//           zIndex: 999,
//           backgroundColor: "primary.main",
//           color: "white",
//           "&:hover": {
//             backgroundColor: "primary.dark",
//           },
//         }}
//       >
//         <Badge
//           badgeContent={cart.reduce((total, item) => total + item.quantity, 0)}
//           color="error"
//         >
//           <ShoppingCart />
//         </Badge>
//       </IconButton>

//       {/* Order Drawer */}
//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         PaperProps={{
//           sx: {
//             width: isMobile ? "100%" : 400,
//             padding: 2,
//           },
//         }}
//       >
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           mb={2}
//         >
//           <Typography variant="h5" fontWeight="bold">
//             Your Order
//           </Typography>
//           <IconButton onClick={() => setDrawerOpen(false)}>
//             <Close />
//           </IconButton>
//         </Box>

//         <Divider />

//         {cart.length === 0 ? (
//           <Box textAlign="center" mt={4}>
//             <Typography variant="body1">Your cart is empty</Typography>
//           </Box>
//         ) : (
//           <>
//             <List>
//               {cart.map((item) => (
//                 <ListItem
//                   key={item.id}
//                   secondaryAction={
//                     <IconButton
//                       edge="end"
//                       onClick={() => removeFromOrder(item.id)}
//                     >
//                       <Delete color="error" />
//                     </IconButton>
//                   }
//                 >
//                   <Box display="flex" alignItems="center" width="100%">
//                     <img
//                       src={item.image}
//                       alt=""
//                       style={{
//                         width: 50,
//                         height: 50,
//                         objectFit: "cover",
//                         borderRadius: 8,
//                         marginRight: 16,
//                       }}
//                     />
//                     <Box flexGrow={1}>
//                       <ListItemText
//                         primary={item.name}
//                         secondary={`$${item.price} x ${item.quantity}`}
//                       />
//                     </Box>
//                     <Box display="flex" alignItems="center">
//                       <IconButton
//                         size="small"
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity - 1)
//                         }
//                       >
//                         -
//                       </IconButton>
//                       <Typography mx={1}>{item.quantity}</Typography>
//                       <IconButton
//                         size="small"
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity + 1)
//                         }
//                       >
//                         +
//                       </IconButton>
//                     </Box>
//                   </Box>
//                 </ListItem>
//               ))}
//             </List>

//             <Divider />

//             <Box mt={2} mb={4}>
//               <Box display="flex" justifyContent="space-between">
//                 <Typography variant="h6">Total:</Typography>
//                 <Typography variant="h6" fontWeight="bold">
//                   ${calculateTotal().toFixed(2)}
//                 </Typography>
//               </Box>
//             </Box>

//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               size="large"
//               onClick={() => {
//                 setDrawerOpen(false);
//                 setActiveComponent("checkout");
//               }}
//             >
//               Proceed to Checkout
//             </Button>
//           </>
//         )}
//       </Drawer>

//       {/* Menu Content */}
//       <Container maxWidth="xl">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <Typography
//             variant="subtitle1"
//             className="text-primary italic font-semibold uppercase tracking-wider mb-2"
//           >
//             Food Menu
//           </Typography>
//           <Typography
//             variant="h2"
//             className="text-4xl md:text-5xl font-bold text-white mb-2"
//           >
//             Most Popular Items
//           </Typography>
//           <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
//         </motion.div>

//         {/* Category Tabs */}
//         <Box className="flex justify-center mb-12">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             variant={isMobile ? "scrollable" : "standard"}
//             scrollButtons={isMobile ? "auto" : false}
//             allowScrollButtonsMobile
//             aria-label="food menu categories"
//             sx={{
//               "& .MuiTabs-indicator": {
//                 backgroundColor: "primary.main",
//                 height: 3,
//               },
//             }}
//           >
//             {menuCategories.map((category, index) => (
//               <Tab
//                 key={index}
//                 icon={
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="text-primary bg-white"
//                   >
//                     {category.icon}
//                   </motion.div>
//                 }
//                 label={
//                   <Box className="text-left">
//                     <Typography
//                       variant="caption"
//                       className=" text-gray-100 block"
//                     >
//                       {category.subtitle}
//                     </Typography>
//                     <Typography
//                       variant="subtitle1"
//                       className="font-bold text-blue-300"
//                     >
//                       {category.label}
//                     </Typography>
//                   </Box>
//                 }
//               />
//             ))}
//           </Tabs>
//         </Box>

//         {/* Menu Items */}
//         {menuCategories.map((category, index) => (
//           <Box
//             key={index}
//             role="tabpanel"
//             hidden={value !== index}
//             id={`tabpanel-${index}`}
//             aria-labelledby={`tab-${index}`}
//           >
//             {value === index && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Grid container spacing={4}>
//                   {category.items.map((item, itemIndex) => (
//                     <Grid item xs={12} md={6} key={itemIndex}>
//                       <motion.div
//                         whileHover={{ y: -5 }}
//                         className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden flex transition-all duration-300 h-full"
//                       >
//                         <motion.div
//                           whileHover={{ scale: 1.05 }}
//                           className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 overflow-hidden"
//                         >
//                           <img
//                             src={item.image}
//                             alt=""
//                             className="w-full h-full object-cover"
//                           />
//                         </motion.div>
//                         <Box className="p-4 flex flex-col flex-grow">
//                           <Box className="flex justify-between items-baseline border-b border-gray-100 pb-2 mb-2">
//                             <Typography
//                               variant="h5"
//                               className="font-bold text-gray-800"
//                             >
//                               {item.name}
//                             </Typography>
//                             <Typography
//                               variant="h6"
//                               className="text-primary font-bold"
//                             >
//                               ${item.price}
//                             </Typography>
//                           </Box>
//                           <Typography
//                             variant="body2"
//                             className="text-gray-600 italic flex-grow"
//                           >
//                             {item.description}
//                           </Typography>
//                           <motion.div
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="mt-3 self-end"
//                           >
//                             <button
//                               className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
//                               onClick={() => addToOrder(item)}
//                             >
//                               + Add to Order
//                             </button>
//                           </motion.div>
//                         </Box>
//                       </motion.div>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </motion.div>
//             )}
//           </Box>
//         ))}
//       </Container>
//     </Box>
//   );
// };


















/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Material Icons
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const steps = ["Shipping", "Payment", "Review"];

export const FoodMenu = () => {
  const menuCategories = [
    {
      id: "breakfast",
      label: "Breakfast",
      icon: <LocalCafeIcon fontSize="large" />,
      subtitle: "Popular",
      items: [
        {
          id: 1,
          name: "Chicken Burger",
          price: 115,
          description:
            "Chicken burger recipes · Sriracha-glazed chicken burger & pickled cabbage · Caesar brussels slaw & parmesan chicken schnitzel burgers.",
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
        },
        {
          id: 2,
          name: "Vegetarian Breakfast",
          price: 95,
          description:
            "A collection of tasty vegetarian breakfast recipes. Loads of really straightforward and simple recipes with plenty of flavour!",
          image:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        },
        {
          id: 3,
          name: "Pancake Stack",
          price: 85,
          description:
            "Our world-famous buttermilk pancake stacks served with maple-flavoured syrup and your choice of whipped butter, cream, or vanilla ice cream.",
          image:
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80",
        },
        {
          id: 4,
          name: "Avocado Toast",
          price: 75,
          description:
            "This perfect avocado toast recipe is simple - all you need is good toasted bread, avocado, lemon juice, and salt! Plus, find 5 delicious variations.",
          image:
            "https://images.unsplash.com/photo-1515446134809-993c501ca304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 5,
          name: "Eggs Benedict",
          price: 105,
          description:
            "Eggs Benedict is a common American breakfast or brunch dish, consisting of two halves of an English muffin, each topped with Canadian bacon or sliced ham.",
          image:
            "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
        },
        {
          id: 6,
          name: "French Toast",
          price: 90,
          description:
            "Thick slices of bread, soaked in a mixture of beaten eggs with milk and cinnamon, toasted in a frying pan, and served with butter and maple syrup.",
          image:
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1494&q=80",
        },
        {
          id: 7,
          name: "Smoothie Bowl",
          price: 80,
          description:
            " A smoothie bowl is a smoothie eaten from a bowl instead of a cup. Smoothie bowls are more nutrient-dense, with toppings like granola, seeds, and dried fruit.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeKD7oE-wB5Z4sj3Dd-T7n6EPlz5bROML-xSfISynap4pY-ou6BWQxClqgC2-0dDFnk0aAGlJLgZgy8-BY-h2Y5hx0Jd2bCp7Fz6ndA",
        },
        {
          id: 8,
          name: "Breakfast Burrito",
          price: 110,
          description:
            "Burrito, a common cylindrical food item of Mexican and American origin consisting of a tortilla wrapped around a mixed filling of such ingredients as meat, cheese, beans, and vegetables.",
          image:
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        },
      ],
    },
    {
      id: "lunch",
      label: "Lunch",
      icon: <FastfoodIcon fontSize="large" />,
      subtitle: "Special",
      items: [
        {
          id: 1,
          name: "Chicken Burger",
          price: 115,
          description:
            "Chicken burger recipes · Sriracha-glazed chicken burger & pickled cabbage · Caesar brussels slaw & parmesan chicken schnitzel burgers.",
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
        },
        {
          id: 2,
          name: "Caesar Salad",
          price: 95,
          description:
            "A Caesar salad also known as Caesar's salad, is a green salad of romaine lettuce and croutons dressed with lemon juice (or lime juice), olive oil, eggs.",
          image:
            "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        },
        {
          id: 3,
          name: "Margherita Pizza",
          price: 125,
          description:
            "Pizza Margherita, also known as Margherita pizza, is, together with the pizza marinara, the typical Neapolitan pizza. It is roundish in shape with a raised.",
          image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1381&q=80",
        },
        {
          id: 4,
          name: "Beef Tacos",
          price: 105,
          description:
            "Make these vibrant beef tacos with a pack of mince. Go to the extra effort of making your own spice mix for even more flavour, and use soft tortillas.",
          image:
            "https://funwithoutfodmaps.com/wp-content/uploads/2022/07/Low-FODMAP-Beef-Tacos-Square.jpg",
        },
        {
          id: 5,
          name: "Club Sandwich",
          price: 110,
          description:
            "A club sandwich or clubhouse sandwich, is a three-layer sandwich consisting of three slices of bread (traditionally toasted), sliced cooked poultry, fried bacon .",
          image:
            "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        },
        {
          id: 6,
          name: "Pasta Carbonara",
          price: 120,
          description:
            " Pasta carbonara topped with flaky salt in a bowl with a fork made with spaghetti, egg yolks, Pecorino Romano and guanciale.",
          image:
            "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 7,
          name: "Beef Burger",
          price: 130,
          description:
            "A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world.",
          image:
            "https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        },
        {
          id: 8,
          name: "Grilled Salmon",
          price: 145,
          description:
            "Glaze succulent salmon fillets in miso, balsamic vinegar and soy, then serve on a bed of noodles and beansprouts for an easy and quick .",
          image:
            "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ],
    },
    {
      id: "dinner",
      label: "Dinner",
      icon: <RestaurantIcon fontSize="large" />,
      subtitle: "Lovely",
      items: [
        {
          id: 1,
          name: "Chicken Burger",
          price: 115,
          description:
            "Chicken burger recipes · Sriracha-glazed chicken burger & pickled cabbage · Caesar brussels slaw & parmesan chicken schnitzel burgers.",
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
        },
        {
          id: 2,
          name: "Filet Mignon",
          price: 195,
          description:
            "Filet mignon is usually presented as a round cut taken from the thinner end of a piece of tenderloin. It is often the most tender and lean cut.",
          image:
            "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 3,
          name: "Lobster Risotto",
          price: 175,
          description:
            "This delicious and decadent Lobster Risotto is made with chunks of lobster and cherry tomatoes in a sherry wine sauce.",
          image:
            "https://images.unsplash.com/photo-1600628421060-939639517883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 4,
          name: "Duck Confit",
          price: 165,
          description:
            "Duck confit is a French dish made with whole duck. In Gascony, according to the families perpetuating the tradition of duck confit, all the pieces of duck .",
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 5,
          name: "Mushroom Ravioli",
          price: 135,
          description:
            "A quick cheese ravioli with buttery, balsamic caramelized mushrooms, and fresh garden herbs. When you're in need of an easy, 30 minute dinner.",
          image:
            "https://thecozycook.com/wp-content/uploads/2022/05/Mushroom-Ravioli-Sauce-f.jpg",
        },
        {
          id: 6,
          name: "Rack of Lamb",
          price: 185,
          description:
            "Rack of lamb is so elegant. Season rack of lamb with rosemary, thyme, and garlic, then slather with olive oil and roast in the oven.",
          image:
            "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
        },
        {
          id: 7,
          name: "Seafood Paella",
          price: 155,
          description:
            "This Seafood Paella recipe is packed with shrimp, calamari, mussels and delicious flavors and makes a fantastic, impressive dinner.",
          image:
            "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 8,
          name: "Vegetable Curry",
          price: 125,
          description:
            "An easy veggie curry that makes a cheap and healthy meal. It uses basic store cupboard ingredients so is very quick and easy to cook.",
          image:
            "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ],
    },
  ];

  const [activeComponent, setActiveComponent] = useState("menu");
  const [activeStep, setActiveStep] = useState(0);
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState({ checkout: false, payment: false });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
    phone: "",
  });

  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();

  // Animation variants
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

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("restaurantCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("restaurantCart", JSON.stringify(cart));
  }, [cart]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    
    setModalMessage(`${item.name} added to cart!`);
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 2000);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e?.preventDefault();
    setLoading(prev => ({ ...prev, payment: true }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newOrderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
      setOrderNumber(newOrderNumber);
      setShowCheckoutModal(false);
      setShowSuccessModal(true);
      setModalMessage(`Order #${newOrderNumber} placed successfully!`);
      
      // Clear cart after successful order
      setCart([]);
      setActiveStep(0);
      setShippingData({
        firstName: "", lastName: "", address: "", city: "", 
        state: "", zip: "", country: "", email: "", phone: ""
      });
      setPaymentData({ cardName: "", cardNumber: "", expiryDate: "", cvv: "" });
      setAgreeTerms(false);
      
      setTimeout(() => setShowSuccessModal(false), 3000);
    } catch (error) {
      setModalMessage("Payment failed. Please try again.");
      setShowErrorModal(true);
      setTimeout(() => setShowErrorModal(false), 3000);
    } finally {
      setLoading(prev => ({ ...prev, payment: false }));
    }
  };

  // Pagination logic
  const getPaginatedItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const totalPages = (items) => Math.ceil(items.length / itemsPerPage);

  return (
    <section className="py-16 mt-4 mb-2 rounded-2xl bg-black relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-semibold mb-4">
            Food Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Most Popular <span className="text-amber-500">Items</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our most beloved dishes, crafted with passion and the finest ingredients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Cart Button */}
        <motion.button
          variants={buttonHoverVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setShowCartModal(true)}
          className="fixed top-24 right-4 z-40 bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-3 rounded-full shadow-2xl"
        >
          <div className="relative">
            <ShoppingCartIcon />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </div>
        </motion.button>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 p-1 rounded-xl inline-flex flex-wrap">
            {menuCategories.map((category, index) => (
              <motion.button
                key={category.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChange(null, index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                  value === index 
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <div className="text-left">
                  <span className="text-xs block opacity-75">{category.subtitle}</span>
                  <span className="font-semibold">{category.label}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {menuCategories.map((category, index) => (
          <div key={category.id} className={value !== index ? 'hidden' : ''}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getPaginatedItems(category.items).map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <div className="flex">
                      <div className="w-32 h-32 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-white">{item.name}</h3>
                          <span className="text-amber-500 font-bold">${item.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex justify-end">
                          <motion.button
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => addToCart(item)}
                            className="text-amber-500 hover:text-amber-400 text-sm font-medium flex items-center space-x-1"
                          >
                            <AddIcon fontSize="small" />
                            <span>Add to Cart</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages(category.items) > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <ArrowBackIcon />
                  </motion.button>
                  
                  {[...Array(totalPages(category.items))].map((_, i) => (
                    <motion.button
                      key={`page-${i + 1}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-full ${
                        currentPage === i + 1
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white'
                          : 'bg-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {i + 1}
                    </motion.button>
                  ))}
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages(category.items)))}
                    disabled={currentPage === totalPages(category.items)}
                    className="w-10 h-10 rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <ArrowForwardIcon />
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      <AnimatePresence>
        {showCartModal && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCartModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                    <ShoppingCartIcon className="text-amber-500" />
                    <span>Your Cart</span>
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowCartModal(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <CloseIcon />
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCartIcon className="text-6xl text-gray-700 mb-4" />
                    <p className="text-gray-400">Your cart is empty</p>
                    <motion.button
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setShowCartModal(false)}
                      className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg"
                    >
                      Continue Shopping
                    </motion.button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">{item.name}</h3>
                            <p className="text-amber-500">${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white"
                            >
                              <RemoveIcon fontSize="small" />
                            </motion.button>
                            <span className="text-white w-8 text-center">{item.quantity}</span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white"
                            >
                              <AddIcon fontSize="small" />
                            </motion.button>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-400"
                          >
                            <DeleteIcon />
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>

                    <div className="border-t border-gray-800 pt-4">
                      <div className="flex justify-between text-white mb-4">
                        <span className="text-lg">Total:</span>
                        <span className="text-2xl font-bold text-amber-500">
                          ${calculateTotal().toFixed(2)}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <motion.button
                          variants={buttonHoverVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => setShowCartModal(false)}
                          className="py-3 border border-gray-700 text-white rounded-lg hover:bg-gray-800"
                        >
                          Continue Shopping
                        </motion.button>
                        <motion.button
                          variants={buttonHoverVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => {
                            setShowCartModal(false);
                            setShowCheckoutModal(true);
                          }}
                          className="py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg font-semibold"
                        >
                          Checkout
                        </motion.button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckoutModal && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCheckoutModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-800 z-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                    <CreditCardIcon className="text-amber-500" />
                    <span>Checkout</span>
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowCheckoutModal(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <CloseIcon />
                  </motion.button>
                </div>

                {/* Stepper */}
                <div className="flex justify-between mt-6">
                  {steps.map((step, index) => (
                    <div key={step} className="flex-1">
                      <div className="flex items-center">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          index < activeStep ? 'bg-green-500' :
                          index === activeStep ? 'bg-amber-500' : 'bg-gray-700'
                        } text-white text-sm font-semibold`}>
                          {index < activeStep ? <CheckCircleIcon fontSize="small" /> : index + 1}
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`flex-1 h-1 mx-2 ${
                            index < activeStep ? 'bg-green-500' : 'bg-gray-700'
                          }`} />
                        )}
                      </div>
                      <span className={`text-xs mt-1 block ${
                        index === activeStep ? 'text-amber-500' : 'text-gray-500'
                      }`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Form Section */}
                  <div className="lg:col-span-2">
                    {activeStep === 0 && (
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                          <LocationOnIcon className="text-amber-500" />
                          <span>Shipping Information</span>
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name *"
                            value={shippingData.firstName}
                            onChange={handleShippingChange}
                            className="col-span-2 sm:col-span-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name *"
                            value={shippingData.lastName}
                            onChange={handleShippingChange}
                            className="col-span-2 sm:col-span-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={shippingData.email}
                            onChange={handleShippingChange}
                            className="col-span-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone *"
                            value={shippingData.phone}
                            onChange={handleShippingChange}
                            className="col-span-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="text"
                            name="address"
                            placeholder="Address *"
                            value={shippingData.address}
                            onChange={handleShippingChange}
                            className="col-span-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="text"
                            name="city"
                            placeholder="City *"
                            value={shippingData.city}
                            onChange={handleShippingChange}
                            className="col-span-2 sm:col-span-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="text"
                            name="state"
                            placeholder="State *"
                            value={shippingData.state}
                            onChange={handleShippingChange}
                            className="col-span-2 sm:col-span-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="text"
                            name="zip"
                            placeholder="ZIP Code *"
                            value={shippingData.zip}
                            onChange={handleShippingChange}
                            className="col-span-2 sm:col-span-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="text"
                            name="country"
                            placeholder="Country *"
                            value={shippingData.country}
                            onChange={handleShippingChange}
                            className="col-span-2 sm:col-span-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 1 && (
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                          <PaymentIcon className="text-amber-500" />
                          <span>Payment Information</span>
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="cardName"
                            placeholder="Name on Card *"
                            value={paymentData.cardName}
                            onChange={handlePaymentChange}
                            className="col-span-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number *"
                            value={paymentData.cardNumber}
                            onChange={handlePaymentChange}
                            className="col-span-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="text"
                            name="expiryDate"
                            placeholder="MM/YY *"
                            value={paymentData.expiryDate}
                            onChange={handlePaymentChange}
                            className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                          <input
                            type="text"
                            name="cvv"
                            placeholder="CVV *"
                            value={paymentData.cvv}
                            onChange={handlePaymentChange}
                            className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                            required
                          />
                        </div>

                        <div className="flex items-center space-x-2 mt-4">
                          <input
                            type="checkbox"
                            id="terms"
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                            className="w-4 h-4 text-amber-500 rounded focus:ring-amber-500"
                          />
                          <label htmlFor="terms" className="text-sm text-gray-400">
                            I agree to the terms and conditions
                          </label>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 flex items-start space-x-3">
                          <SecurityIcon className="text-blue-500 mt-1" />
                          <div>
                            <p className="text-blue-500 font-semibold">Secure Payment</p>
                            <p className="text-sm text-gray-400">
                              Your payment information is encrypted and secure
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 2 && (
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                          <ReceiptIcon className="text-amber-500" />
                          <span>Review Order</span>
                        </h3>

                        <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                          <h4 className="text-white font-semibold">Shipping To:</h4>
                          <p className="text-gray-400 text-sm">
                            {shippingData.firstName} {shippingData.lastName}<br />
                            {shippingData.address}<br />
                            {shippingData.city}, {shippingData.state} {shippingData.zip}<br />
                            {shippingData.country}<br />
                            {shippingData.email}<br />
                            {shippingData.phone}
                          </p>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3">Payment Method:</h4>
                          <div className="flex items-center space-x-3">
                            <CreditCardIcon className="text-amber-500" />
                            <span className="text-gray-400">
                              **** **** **** {paymentData.cardNumber?.slice(-4)}
                            </span>
                          </div>
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                          <p className="text-amber-500 text-sm">
                            Please review your order carefully before placing it.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Order Summary */}
                  <div className="lg:col-span-1">
                    <div className="bg-gray-800 rounded-lg p-4 sticky top-24">
                      <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
                      
                      <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
                        {cart.map((item) => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span className="text-gray-400">
                              {item.name} x {item.quantity}
                            </span>
                            <span className="text-white">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-700 pt-3 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Subtotal</span>
                          <span className="text-white">${calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Shipping</span>
                          <span className="text-white">${(calculateTotal() / 100).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold pt-2 border-t border-gray-700">
                          <span className="text-white">Total</span>
                          <span className="text-amber-500">
                            ${(calculateTotal() + calculateTotal() / 100).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex space-x-2">
                        {activeStep > 0 && (
                          <motion.button
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={handleBack}
                            className="flex-1 py-2 border border-gray-700 text-white rounded-lg text-sm"
                          >
                            Back
                          </motion.button>
                        )}
                        <motion.button
                          variants={buttonHoverVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={activeStep === steps.length - 1 ? handlePlaceOrder : handleNext}
                          disabled={activeStep === 1 && !agreeTerms}
                          className="flex-1 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg text-sm font-semibold disabled:opacity-50"
                        >
                          {loading.payment ? (
                            <span className="flex items-center justify-center space-x-2">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                              />
                              <span>Processing...</span>
                            </span>
                          ) : activeStep === steps.length - 1 ? (
                            'Place Order'
                          ) : (
                            'Continue'
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3"
          >
            <CheckCircleIcon />
            <span>{modalMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {showErrorModal && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3"
          >
            <ErrorIcon />
            <span>{modalMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};






