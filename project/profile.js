// import React, { useState, useEffect } from 'react'; 
// import {
//   TextField, Button, Container, Typography, Grid, Card, CardContent,
//   Box, Avatar, CircularProgress, Divider, IconButton, Stack
// } from '@mui/material';
// import { Payment, History, Edit, AccountCircle } from '@mui/icons-material';
// import axios from 'axios';

// const UserProfile = () => {
//   const [userDetails, setUserDetails] = useState({
//     name: 'John Doe',
//     email: 'johndoe@gmail.com',
//     phone: '+1 555 555 555',
//     preferences: 'AC room, sea view',
//   });

//   const [paymentMethods, setPaymentMethods] = useState([
//     { id: 1, method: 'Visa **** 1234' },
//     { id: 2, method: ' ****MasterCard 5678' },
//   ]);

//   const [bookingHistory, setBookingHistory] = useState([
//     { id: 1, hotel: 'Hilton Hotel', date: '2024-09-21', status: 'Completed' },
//     { id: 2, hotel: 'Marriott Resort', date: '2024-08-15', status: 'Cancelled' },
//   ]);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleUpdateProfile = async () => {
//     try {
//       const response = await axios.put('/api/user/profile', userDetails);
//       alert('Profile updated successfully!');
//     } catch (err) {
//       setError('Error updating profile');
//     }
//   };

//   if (loading) {
//     return (
//       <Container style={{ textAlign: 'center', marginTop: '20px' }}>
//         <CircularProgress />
//         <Typography variant="h6">Loading profile...</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="md" style={{ marginTop: '40px' }}>
//       <Typography variant="h4" gutterBottom>
//         My Profile
//       </Typography>
//       {error && <Typography color="error">{error}</Typography>}

//       <Card variant="outlined" style={{ padding: '20px', marginBottom: '30px' }}>
//         <Box display="flex" alignItems="center">
//           <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', marginRight: '20px' }}>
//             <AccountCircle fontSize="large" />
//           </Avatar>
//           <Box>
//             <Typography variant="h6">{userDetails.name}</Typography>
//             <Typography color="textSecondary">{userDetails.email}</Typography>
//             <Typography color="textSecondary">{userDetails.phone}</Typography>
//             <IconButton color="primary" size="small" onClick={handleUpdateProfile}>
//               <Edit />
//             </IconButton>
//           </Box>
//         </Box>

//         <Divider style={{ margin: '20px 0' }} />

//         <Typography variant="h6" gutterBottom>Personal Information</Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={userDetails.name}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               value={userDetails.email}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Phone"
//               name="phone"
//               value={userDetails.phone}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Preferences"
//               name="preferences"
//               value={userDetails.preferences}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//         </Grid>

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleUpdateProfile}
//           style={{ marginTop: '20px' }}
//         >
//           Save Changes
//         </Button>
//       </Card>

//       {/* Payment Methods Section */}
//       <Card variant="outlined" style={{ padding: '20px', marginBottom: '30px' }}>
//         <Typography variant="h6" gutterBottom>
//           <Payment sx={{ verticalAlign: 'middle', mr: 1 }} /> Saved Payment Methods
//         </Typography>
//         {paymentMethods.length === 0 ? (
//           <Typography>No payment methods added.</Typography>
//         ) : (
//           <Stack spacing={2}>
//             {paymentMethods.map((method) => (
//               <Typography key={method.id} style={{ marginTop: '8px' }}>
//                 {method.method}
//               </Typography>
//             ))}
//           </Stack>
//         )}
//         <Button variant="outlined" color="primary" style={{ marginTop: '16px' }}>
//           Add Payment Method
//         </Button>
//       </Card>

//       {/* Booking History Section */}
//       <Card variant="outlined" style={{ padding: '20px' }}>
//         <Typography variant="h6" gutterBottom>
//           <History sx={{ verticalAlign: 'middle', mr: 1 }} /> Booking History
//         </Typography>
//         {bookingHistory.length === 0 ? (
//           <Typography>No bookings found.</Typography>
//         ) : (
//           <Stack spacing={2}>
//             {bookingHistory.map((booking) => (
//               <Card key={booking.id} variant="outlined" style={{ padding: '10px' }}>
//                 <Typography variant="body1" fontWeight="bold">{booking.hotel}</Typography>
//                 <Typography variant="body2" color="textSecondary">{booking.date}</Typography>
//                 <Typography variant="body2" color={booking.status === 'Completed' ? 'green' : 'red'}>
//                   {booking.status}
//                 </Typography>
//               </Card>
//             ))}
//           </Stack>
//         )}
//       </Card>
//     </Container>
//   );
// };

// export default UserProfile;
// import React, { useState } from 'react';
// import {
//   TextField, Button, Container, Typography, Grid, Card,
//   Box, Avatar, CircularProgress, Divider, IconButton, Stack
// } from '@mui/material';
// import { Payment, History, Edit, AccountCircle } from '@mui/icons-material';
// import axios from 'axios';

// const UserProfile = () => {
//   const [userDetails, setUserDetails] = useState({
//     name: 'John Doe',
//     email: 'johndoe@gmail.com',
//     phone: '+1 555 555 555',
//     preferences: 'AC room, sea view',
//   });

//   const [paymentMethods, setPaymentMethods] = useState([
//     { id: 1, method: 'Visa **** 1234' },
//     { id: 2, method: 'MasterCard **** 5678' },
//   ]);
//   const [bookingHistory, setBookingHistory] = useState([
//     { id: 1, hotel: 'Hilton Hotel', date: '2024-09-21', status: 'Completed' },
//     { id: 2, hotel: 'Marriott Resort', date: '2024-08-15', status: 'Cancelled' },
//   ]);
  
//   const [availableMethods] = useState([
//     { id: 1, method: 'Visa' },
//     { id: 2, method: 'MasterCard' },
//     { id: 3, method: 'PayPal' },
//     { id: 4, method: 'American Express' },
//   ]);

//   const [showPaymentOptions, setShowPaymentOptions] = useState(false);

//   const handleAddPaymentMethod = (method) => {
//     const newMethod = { id: paymentMethods.length + 1, method: `${method} **** XXXX` };
//     setPaymentMethods((prevMethods) => [...prevMethods, newMethod]);
//     setShowPaymentOptions(false);  // Hide payment options after selection
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleUpdateProfile = async () => {
//     try {
//       await axios.put('/api/user/profile', userDetails);
//       alert('Profile updated successfully!');
//     } catch (err) {
//       console.error('Error updating profile:', err);
//     }
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: '40px' }}>
//       <Typography variant="h4" gutterBottom>
//         My Profile
//       </Typography>

//       <Card variant="outlined" style={{ padding: '20px', marginBottom: '30px' }}>
//         <Box display="flex" alignItems="center">
//           <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', marginRight: '20px' }}>
//             <AccountCircle fontSize="large" />
//           </Avatar>
//           <Box>
//             <Typography variant="h6">{userDetails.name}</Typography>
//             <Typography color="textSecondary">{userDetails.email}</Typography>
//             <Typography color="textSecondary">{userDetails.phone}</Typography>
//             <IconButton color="primary" size="small" onClick={handleUpdateProfile}>
//               <Edit />
//             </IconButton>
//           </Box>
//         </Box>

//         <Divider style={{ margin: '20px 0' }} />

//         <Typography variant="h6" gutterBottom>Personal Information</Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={userDetails.name}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               value={userDetails.email}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Phone"
//               name="phone"
//               value={userDetails.phone}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Preferences"
//               name="preferences"
//               value={userDetails.preferences}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//         </Grid>

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleUpdateProfile}
//           style={{ marginTop: '20px' }}
//         >
//           Save Changes
//         </Button>
//       </Card>

//       {/* Payment Methods Section */}
//       <Card variant="outlined" style={{ padding: '20px', marginBottom: '30px' }}>
//         <Typography variant="h6" gutterBottom>
//           <Payment sx={{ verticalAlign: 'middle', mr: 1 }} /> Saved Payment Methods
//         </Typography>
//         {paymentMethods.length === 0 ? (
//           <Typography>No payment methods added.</Typography>
//         ) : (
//           <Stack spacing={2}>
//             {paymentMethods.map((method) => (
//               <Typography key={method.id} style={{ marginTop: '8px' }}>
//                 {method.method}
//               </Typography>
//             ))}
//           </Stack>
//         )}
//         <Button
//           variant="outlined"
//           color="primary"
//           style={{ marginTop: '16px' }}
//           onClick={() => setShowPaymentOptions(!showPaymentOptions)}
//         >
//           Add Payment Method
//         </Button>

//         {/* Show available payment methods if button is clicked */}
//         {showPaymentOptions && (
//           <Stack spacing={2} style={{ marginTop: '16px' }}>
//             {availableMethods.map((method) => (
//               <Button
//                 key={method.id}
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => handleAddPaymentMethod(method.method)}
//               >
//                 Add {method.method}
//               </Button>
//             ))}
//           </Stack>
//         )}
//       </Card>

//       {/* Booking History Section */}
//       <Card variant="outlined" style={{ padding: '20px' }}>
//         <Typography variant="h6" gutterBottom>
//           <History sx={{ verticalAlign: 'middle', mr: 1 }} /> Booking History
//         </Typography>
//         {bookingHistory.length === 0 ? (
//           <Typography>No bookings found.</Typography>
//         ) : (
//           <Stack spacing={2}>
//             {bookingHistory.map((booking) => (
//               <Card key={booking.id} variant="outlined" style={{ padding: '10px' }}>
//                 <Typography variant="body1" fontWeight="bold">{booking.hotel}</Typography>
//                 <Typography variant="body2" color="textSecondary">{booking.date}</Typography>
//                 <Typography variant="body2" color={booking.status === 'Completed' ? 'green' : 'red'}>
//                   {booking.status}
//                 </Typography>
//               </Card>
//             ))}
//           </Stack>
//         )}
//       </Card>
//     </Container>
//   );
// };

// export default UserProfile;
// import React, { useState } from 'react';
// import {
//   TextField, Button, Container, Typography, Grid, Card,
//   Box, Avatar, CircularProgress, Divider, IconButton, Stack
// } from '@mui/material';
// import { Payment, History, Edit, AccountCircle, ArrowBack } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';

// const UserProfile = () => {
//   const navigate = useNavigate();  // Initialize navigate hook

//   const [userDetails, setUserDetails] = useState({
//     name: 'John Doe',
//     email: 'johndoe@gmail.com',
//     phone: '+1 555 555 555',
//     preferences: 'AC room, sea view',
//   });

//   const [paymentMethods, setPaymentMethods] = useState([
//     { id: 1, method: 'Visa **** 1234' },
//     { id: 2, method: 'MasterCard **** 5678' },
//   ]);

//   const [bookingHistory, setBookingHistory] = useState([
//     { id: 1, hotel: 'Hilton Hotel', date: '2024-09-21', status: 'Completed' },
//     { id: 2, hotel: 'Marriott Resort', date: '2024-08-15', status: 'Cancelled' },
//   ]);

//   const [availableMethods] = useState([
//     { id: 1, method: 'Visa' },
//     { id: 2, method: 'MasterCard' },
//     { id: 3, method: 'PayPal' },
//     { id: 4, method: 'American Express' },
//   ]);

//   const [showPaymentOptions, setShowPaymentOptions] = useState(false);

//   const handleAddPaymentMethod = (method) => {
//     const newMethod = { id: paymentMethods.length + 1, method: `${method} **** XXXX` };
//     setPaymentMethods((prevMethods) => [...prevMethods, newMethod]);
//     setShowPaymentOptions(false);  // Hide payment options after selection
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleUpdateProfile = async () => {
//     try {
//       await axios.put('/api/user/profile', userDetails);
//       alert('Profile updated successfully!');
//     } catch (err) {
//       console.error('Error updating profile:', err);
//     }
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: '40px' }}>
//       {/* Back Button */}
//       <Button
//         startIcon={<ArrowBack />}
//         variant="outlined"
//         color="primary"
//         onClick={() => navigate(-1)}  // Navigate back
//         style={{ marginBottom: '20px' }}
//       >
//         Back
//       </Button>

//       <Typography variant="h4" gutterBottom>
//         My Profile
//       </Typography>

//       <Card variant="outlined" style={{ padding: '20px', marginBottom: '30px' }}>
//         <Box display="flex" alignItems="center">
//           <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', marginRight: '20px' }}>
//             <AccountCircle fontSize="large" />
//           </Avatar>
//           <Box>
//             <Typography variant="h6">{userDetails.name}</Typography>
//             <Typography color="textSecondary">{userDetails.email}</Typography>
//             <Typography color="textSecondary">{userDetails.phone}</Typography>
//             <IconButton color="primary" size="small" onClick={handleUpdateProfile}>
//               <Edit />
//             </IconButton>
//           </Box>
//         </Box>

//         <Divider style={{ margin: '20px 0' }} />

//         <Typography variant="h6" gutterBottom>Personal Information</Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={userDetails.name}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               value={userDetails.email}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Phone"
//               name="phone"
//               value={userDetails.phone}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Preferences"
//               name="preferences"
//               value={userDetails.preferences}
//               onChange={handleInputChange}
//               margin="normal"
//             />
//           </Grid>
//         </Grid>

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleUpdateProfile}
//           style={{ marginTop: '20px' }}
//         >
//           Save Changes
//         </Button>
//       </Card>

//       {/* Payment Methods Section */}
//       <Card variant="outlined" style={{ padding: '20px', marginBottom: '30px' }}>
//         <Typography variant="h6" gutterBottom>
//           <Payment sx={{ verticalAlign: 'middle', mr: 1 }} /> Saved Payment Methods
//         </Typography>
//         {paymentMethods.length === 0 ? (
//           <Typography>No payment methods added.</Typography>
//         ) : (
//           <Stack spacing={2}>
//             {paymentMethods.map((method) => (
//               <Typography key={method.id} style={{ marginTop: '8px' }}>
//                 {method.method}
//               </Typography>
//             ))}
//           </Stack>
//         )}
//         <Button
//           variant="outlined"
//           color="primary"
//           style={{ marginTop: '16px' }}
//           onClick={() => setShowPaymentOptions(!showPaymentOptions)}
//         >
//           Add Payment Method
//         </Button>

//         {showPaymentOptions && (
//           <Stack spacing={2} style={{ marginTop: '16px' }}>
//             {availableMethods.map((method) => (
//               <Button
//                 key={method.id}
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => handleAddPaymentMethod(method.method)}
//               >
//                 Add {method.method}
//               </Button>
//             ))}
//           </Stack>
//         )}
//       </Card>

//       {/* Booking History Section */}
//       <Card variant="outlined" style={{ padding: '20px' }}>
//         <Typography variant="h6" gutterBottom>
//           <History sx={{ verticalAlign: 'middle', mr: 1 }} /> Booking History
//         </Typography>
//         {bookingHistory.length === 0 ? (
//           <Typography>No bookings found.</Typography>
//         ) : (
//           <Stack spacing={2}>
//             {bookingHistory.map((booking) => (
//               <Card key={booking.id} variant="outlined" style={{ padding: '10px' }}>
//                 <Typography variant="body1" fontWeight="bold">{booking.hotel}</Typography>
//                 <Typography variant="body2" color="textSecondary">{booking.date}</Typography>
//                 <Typography variant="body2" color={booking.status === 'Completed' ? 'green' : 'red'}>
//                   {booking.status}
//                 </Typography>
//               </Card>
//             ))}
//           </Stack>
//         )}
//       </Card>
//     </Container>
//   );
// };

// export default UserProfile;
import React, { useState } from 'react';
import {
  TextField, Button, Container, Typography, Grid, Card,
  Box, Avatar, CircularProgress, Divider, IconButton, Stack
} from '@mui/material';
import { Payment, History, Edit, AccountCircle, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const UserProfile = () => {
  const navigate = useNavigate();  // Initialize navigate hook

  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '+1 555 555 555',
    preferences: 'AC room, sea view',
  });

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, method: 'Visa **** 1234' },
    { id: 2, method: 'MasterCard **** 5678' },
  ]);

  const [bookingHistory, setBookingHistory] = useState([
    { id: 1, hotel: 'Hilton Hotel', date: '2024-09-21', status: 'Completed' },
    { id: 2, hotel: 'Marriott Resort', date: '2024-08-15', status: 'Cancelled' },
  ]);

  const [availableMethods] = useState([
    { id: 1, method: 'Visa' },
    { id: 2, method: 'MasterCard' },
    { id: 3, method: 'PayPal' },
    { id: 4, method: 'American Express' },
  ]);

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleAddPaymentMethod = (method) => {
    const newMethod = { id: paymentMethods.length + 1, method: `${method} **** XXXX` };
    setPaymentMethods((prevMethods) => [...prevMethods, newMethod]);
    setShowPaymentOptions(false);  // Hide payment options after selection
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleUpdateProfile = async () => {
    try {
      await axios.put('/api/user/profile', userDetails);
      alert('Profile updated successfully!');
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      {/* Back Button */}
      {/* <Button
        startIcon={<ArrowBack />}
        variant="outlined"
        color="primary"
        onClick={() => navigate(-1)}  // Navigate back
        style={{ marginBottom: '20px' }}
      >
        Back
      </Button> */}
      <Button
  startIcon={<ArrowBack />}
  variant="outlined"
  color="primary"
  onClick={() => navigate('/homepage')}  // Navigate to the Home page directly
  style={{ marginBottom: '20px' }}
>
  Back
</Button>

      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>

      <Card variant="outlined" style={{ padding: '20px', marginBottom: '30px' }}>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', marginRight: '20px' }}>
            <AccountCircle fontSize="large" />
          </Avatar>
          <Box>
            <Typography variant="h6">{userDetails.name}</Typography>
            <Typography color="textSecondary">{userDetails.email}</Typography>
            <Typography color="textSecondary">{userDetails.phone}</Typography>
            <IconButton color="primary" size="small" onClick={handleUpdateProfile}>
              <Edit />
            </IconButton>
          </Box>
        </Box>

        <Divider style={{ margin: '20px 0' }} />

        <Typography variant="h6" gutterBottom>Personal Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Preferences"
              name="preferences"
              value={userDetails.preferences}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateProfile}
          style={{ marginTop: '20px' }}
        >
          Save Changes
        </Button>
      </Card>

      {/* Payment Methods Section */}
      <Card variant="outlined" style={{ padding: '20px', marginBottom: '30px' }}>
        <Typography variant="h6" gutterBottom>
          <Payment sx={{ verticalAlign: 'middle', mr: 1 }} /> Saved Payment Methods
        </Typography>
        {paymentMethods.length === 0 ? (
          <Typography>No payment methods added.</Typography>
        ) : (
          <Stack spacing={2}>
            {paymentMethods.map((method) => (
              <Typography key={method.id} style={{ marginTop: '8px' }}>
                {method.method}
              </Typography>
            ))}
          </Stack>
        )}
        <Button
          variant="outlined"
          color="primary"
          style={{ marginTop: '16px' }}
          onClick={() => setShowPaymentOptions(!showPaymentOptions)}
        >
          Add Payment Method
        </Button>

        {showPaymentOptions && (
          <Stack spacing={2} style={{ marginTop: '16px' }}>
            {availableMethods.map((method) => (
              <Button
                key={method.id}
                variant="contained"
                color="secondary"
                onClick={() => handleAddPaymentMethod(method.method)}
              >
                Add {method.method}
              </Button>
            ))}
          </Stack>
        )}
      </Card>

      {/* Booking History Section */}
      <Card variant="outlined" style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          <History sx={{ verticalAlign: 'middle', mr: 1 }} /> Booking History
        </Typography>
        {bookingHistory.length === 0 ? (
          <Typography>No bookings found.</Typography>
        ) : (
          <Stack spacing={2}>
            {bookingHistory.map((booking) => (
              <Card key={booking.id} variant="outlined" style={{ padding: '10px' }}>
                <Typography variant="body1" fontWeight="bold">{booking.hotel}</Typography>
                <Typography variant="body2" color="textSecondary">{booking.date}</Typography>
                <Typography variant="body2" color={booking.status === 'Completed' ? 'green' : 'red'}>
                  {booking.status}
                </Typography>
              </Card>
            ))}
          </Stack>
        )}
      </Card>
    </Container>
  );
};

export default UserProfile;
