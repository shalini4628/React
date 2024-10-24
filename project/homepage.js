// import React from 'react';
// import './home.css';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Box,
//   Container,
//   Grid,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GoogleIcon from '@mui/icons-material/Google';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import HotelIcon from '@mui/icons-material/Hotel';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       {/* Top bar with contact info and social media icons */}
//       <Box sx={{ backgroundColor: '#f5f5f5', py: 1 }}>
//         <Container>
//           <Grid container alignItems="center">
//             <Grid item xs={6}>
//               <Typography variant="body2" sx={{ color: '#000000' }}>
//                 Contact: +123 456 7890 | Email: info@townresort.com
//               </Typography>
//             </Grid>
//             <Grid item xs={6} sx={{ textAlign: 'right' }}>
//               <IconButton color="primary" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FacebookIcon />
//               </IconButton>
//               <IconButton color="primary" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                 <TwitterIcon />
//               </IconButton>
//               <IconButton color="primary" href="https://google.com" target="_blank" rel="noopener noreferrer">
//                 <GoogleIcon />
//               </IconButton>
//               <IconButton color="primary" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <LinkedInIcon />
//               </IconButton>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Main AppBar */}
//       <AppBar position="static" color="default" elevation={2}>
//         <Toolbar>
//           <HotelIcon sx={{ mr: 1, color: 'primary.main' }} />
//           <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#000000' }}>
//             TownResort Hotel
//           </Typography>
//           <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/home')}>Home</Button>
//           <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/rooms')}>Rooms</Button>
//           <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/pages')}>Pages</Button>
//           <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/blog')}>Blog</Button>
//           <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/about')}>About Us</Button>
//           <IconButton color="inherit" sx={{ mx: 1 }}>
//             <SearchIcon />
//           </IconButton>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ ml: 2 }}
//             onClick={() => navigate('/login')}
//           >
//             BOOK NOW
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <Box className="hero-section">
//         <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#000000' }}>
//           Welcome to TownResort Hotel
//         </Typography>
//         <Typography variant="h5" component="p" gutterBottom sx={{ color: '#000000' }}>
//           Experience luxury and comfort like never before.
//         </Typography>
//         <Button
//           variant="contained"
//           color="success"
//           size="large"
//           onClick={() => navigate('/signup')}
//           sx={{ mt: 2 }}
//         >
//           Signup
//         </Button>
//         <Button
//           variant="contained"
//           color="success"
//           size="large"
//           onClick={() => navigate('/login')}
//           sx={{ mt: 2, ml: 2 }}
//         >
//           Login
//         </Button>
//       </Box>

//       {/* Resort Details Section */}
//       <Container sx={{ mt: 5, mb: 5 }}>
//         <Typography variant="h4" gutterBottom align="center" sx={{ color: '#000000' }}>
//           About Our Resort
//         </Typography>
//         <Typography variant="body1" component="p" gutterBottom align="center" sx={{ color: '#000000' }}>
//           Nestled in the breathtaking landscapes of Kashmir, TownResort Hotel is your ideal getaway.
//           Enjoy serene views, luxurious accommodations, and exceptional service that makes your stay unforgettable.
//         </Typography>
        
//         <Typography variant="h5" gutterBottom align="center" sx={{ color: '#000000' }}>
//           Location: India
//         </Typography>
        
//         <Typography variant="h5" gutterBottom align="center" sx={{ color: '#000000' }}>
//           Amenities:
//         </Typography>
//         <Typography variant="body1" component="p" gutterBottom align="center" sx={{ color: '#000000' }}>
//           - Stays <br />
//           - Flights <br />
//           - Flight + Hotel Packages <br />
//           - Car Rentals <br />
//           - Local Attractions <br />
//           - Airport Taxis
//         </Typography>
        
//         <Typography variant="body1" component="p" gutterBottom align="center" sx={{ color: '#000000' }}>
//           Explore the beauty of Kashmir with our top-notch services and amenities designed for your comfort and convenience.
//         </Typography>

//         {/* View Rooms Button */}
//         <Box textAlign="center" sx={{ mt: 4 }}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => navigate('/rooms')}
//           >
//             View Rooms
//           </Button>
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { Button, Typography, Grid, Container, Box, Card, CardContent, TextField, IconButton, AppBar, Toolbar } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Login from './loginpage';
import Signup from './Signup';
import './homepage.css';

function Home() {
    const [view, setView] = useState('home');
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('');
    const [error, setError] = useState('');

    const handleViewChange = (viewName) => {
        setView(viewName);
    };

    const handleSearch = () => {
        const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        if (checkIn < currentDate) {
            setError('Check-in date cannot be in the past.');
        } else if (checkOut <= checkIn) {
            setError('Check-out date must be after the check-in date.');
        } else {
            setError('');
            // Proceed with search or further logic
            console.log('Search initiated');
        }
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Book for Stay
                    </Typography>
                    <Button color="inherit" onClick={() => handleViewChange('login')}>
                        Login
                    </Button>
                    <Button color="inherit" onClick={() => handleViewChange('signup')}>
                        Sign Up
                    </Button>
                </Toolbar>
            </AppBar>

            {view === 'home' && (
                <div>
                    <Container
                        style={{
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'url(https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 2,
                            }}
                        />
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ zIndex: 3, color: 'white', textAlign: 'center' }}
                        >
                            <Typography variant="h2" component="h1" gutterBottom>
                                Book Your Perfect Stay
                            </Typography>
                            <Typography variant="h6" component="p" gutterBottom>
                                Discover and book the best accommodations worldwide.
                            </Typography>
                            <Box
                                mt={4}
                                p={3}
                                bgcolor="rgba(255, 255, 255, 0.8)"
                                borderRadius="8px"
                                width="80%"
                                maxWidth="800px"
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="Destination"
                                            variant="outlined"
                                            fullWidth
                                            value={destination}
                                            onChange={(e) => setDestination(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="Check-in"
                                            type="date"
                                            variant="outlined"
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={checkIn}
                                            onChange={(e) => setCheckIn(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="Check-out"
                                            type="date"
                                            variant="outlined"
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={checkOut}
                                            onChange={(e) => setCheckOut(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="Guests"
                                            variant="outlined"
                                            fullWidth
                                            value={guests}
                                            onChange={(e) => setGuests(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            fullWidth
                                            onClick={handleSearch}
                                        >
                                            Search
                                        </Button>
                                    </Grid>
                                </Grid>
                                {error && (
                                    <Typography color="error" align="center" style={{ marginTop: '10px' }}>
                                        {error}
                                    </Typography>
                                )}
                            </Box>
                        </Grid>
                    </Container>

                    <Container maxWidth="lg" style={{ padding: '50px 0' }}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Why Choose Us?
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            Wide Selection
                                        </Typography>
                                        <Typography variant="body2">
                                            Choose from thousands of accommodations around the world.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            Best Prices
                                        </Typography>
                                        <Typography variant="body2">
                                            Enjoy competitive rates and exclusive offers.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            Secure Booking
                                        </Typography>
                                        <Typography variant="body2">
                                            Experience safe and secure online booking.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>

                    <Box
                        style={{
                            backgroundColor: '#333',
                            color: 'white',
                            padding: '20px 0',
                            textAlign: 'center',
                        }}
                    >
                        <Container maxWidth="lg">
                            <Typography variant="body2" gutterBottom>
                                © 2024 Book for Stay. All Rights Reserved.
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Contact Us | Terms of Service | Privacy Policy
                            </Typography>
                            <Box display="flex" justifyContent="center" mt={2}>
                                <IconButton
                                    aria-label="Facebook"
                                    style={{ color: 'white' }}
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <Facebook />
                                </IconButton>
                                <IconButton
                                    aria-label="Instagram"
                                    style={{ color: 'white' }}
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <Instagram />
                                </IconButton>
                                <IconButton
                                    aria-label="Twitter"
                                    style={{ color: 'white' }}
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <Twitter />
                                </IconButton>
                            </Box>
                        </Container>
                    </Box>
                </div>
            )}

            {view === 'login' && <Login onBack={() => handleViewChange('home')} />}

            {view === 'signup' && <Signup onBack={() => handleViewChange('home')} />}
        </div>
    );
}

export default Home;
