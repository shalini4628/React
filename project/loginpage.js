// import React, { useState } from 'react';
// import { Button, Typography, Grid, TextField, IconButton, InputAdornment, Container } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useNavigate } from 'react-router-dom';
// import Signup from './Signup';

// function Login({ onBack }) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [errors, setErrors] = useState({});

//     const handlePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };
//     const sin=useNavigate();
//     const handleSignup=()=>
//     {
//         sin('/Signup');
//     }

//     const handleLogin = () => {
//         const newErrors = {};
//         if (!email) {
//             newErrors.email = 'Email is required';
//         }
//         if (!password) {
//             newErrors.password = 'Password is required';
//         }

//         setErrors(newErrors);

//         if (Object.keys(newErrors).length === 0) {
//             alert("Login Successful");
//         }
//     };

//     return (
//         <Container 
//             style={{
//                 minHeight: '100vh',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundImage: `url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`, 
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 position: 'relative',
//                 zIndex: 1,
//             }}
//         >
//             <div
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                     zIndex: 2,
//                 }}
//             />

//             <div style={{
//                 maxWidth: '400px',
//                 width: '100%',
//                 padding: '30px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)', 
//                 borderRadius: '8px',
//                 boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//                 position: 'relative',
//                 zIndex: 3,
//             }}>
//                 <Typography variant="h4" component="h1" gutterBottom align="center" style={{ color: '#333' }}>
//                     Login
//                 </Typography>

//                 <Typography variant="body1" align="center" style={{ marginBottom: '20px', color: '#555' }}>
//                     Access your account to manage bookings.
//                 </Typography>

//                 <Grid container direction="column" spacing={2}>
//                     <Grid item>
//                         <TextField 
//                             label="Email Address" 
//                             variant="outlined" 
//                             fullWidth
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             error={!!errors.email}
//                             helperText={errors.email}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <TextField
//                             label="Password"
//                             variant="outlined"
//                             type={showPassword ? 'text' : 'password'}
//                             fullWidth
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             error={!!errors.password}
//                             helperText={errors.password}
//                             InputProps={{
//                                 endAdornment: (
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             aria-label="toggle password visibility"
//                                             onClick={handlePasswordVisibility}
//                                             edge="end"
//                                         >
//                                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                                         </IconButton>
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />
//                     </Grid>
//                     <Grid item style={{ textAlign: 'center', marginTop: '20px' }}>
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             size="large"
//                             fullWidth
//                             onClick={handleLogin}
//                             style={{
//                                 backgroundColor: '#2196F3',
//                                 color: '#fff',
//                                 padding: '10px 0',
//                                 fontSize: '16px',
//                                 fontWeight: 'bold',
//                             }}
//                         >
//                             Login
//                         </Button>
//                         <p>If You Don't Have an Account</p>
//                         <a href='#Signup' onClick={Signup}>Signup</a>
//                     </Grid>
//                     <Grid item style={{ textAlign: 'center', marginTop: '10px' }}>
//                         <Button
//                             variant="text"
//                             onClick={onBack}
//                             style={{
//                                 color: '#2196F3',
//                                 fontWeight: 'bold',
//                                 fontSize: '14px',
//                             }}
//                         >
//                             Back to Home
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </div>
//         </Container>
//     );
// }

// export default Login;
// import React, { useState } from 'react';
// import { Button, Typography, Grid, TextField, IconButton, InputAdornment, Container } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useNavigate } from 'react-router-dom';

// function Login({ onBack }) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate(); // useNavigate hook for navigation

//     const handlePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = () => {
//         const newErrors = {};
//         if (!email) {
//             newErrors.email = 'Email is required';
//         }
//         if (!password) {
//             newErrors.password = 'Password is required';
//         }

//         setErrors(newErrors);

//         if (Object.keys(newErrors).length === 0) {
//             alert("Login Successful");
//         }
//     };

//     const handleSignup = () => {
//         navigate('/signup'); // Navigate to the signup page
//     };

//     return (
//         <Container
//             style={{
//                 minHeight: '100vh',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundImage: `url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 position: 'relative',
//                 zIndex: 1,
//             }}
//         >
//             <div
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                     zIndex: 2,
//                 }}
//             />

//             <div
//                 style={{
//                     maxWidth: '400px',
//                     width: '100%',
//                     padding: '30px',
//                     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                     borderRadius: '8px',
//                     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//                     position: 'relative',
//                     zIndex: 3,
//                 }}
//             >
//                 <Typography variant="h4" component="h1" gutterBottom align="center" style={{ color: '#333' }}>
//                     Login
//                 </Typography>

//                 <Typography variant="body1" align="center" style={{ marginBottom: '20px', color: '#555' }}>
//                     Access your account to manage bookings.
//                 </Typography>

//                 <Grid container direction="column" spacing={2}>
//                     <Grid item>
//                         <TextField
//                             label="Email Address"
//                             variant="outlined"
//                             fullWidth
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             error={!!errors.email}
//                             helperText={errors.email}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <TextField
//                             label="Password"
//                             variant="outlined"
//                             type={showPassword ? 'text' : 'password'}
//                             fullWidth
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             error={!!errors.password}
//                             helperText={errors.password}
//                             InputProps={{
//                                 endAdornment: (
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             aria-label="toggle password visibility"
//                                             onClick={handlePasswordVisibility}
//                                             edge="end"
//                                         >
//                                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                                         </IconButton>
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />
//                     </Grid>
//                     <Grid item style={{ textAlign: 'center', marginTop: '20px' }}>
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             size="large"
//                             fullWidth
//                             onClick={handleLogin}
//                             style={{
//                                 backgroundColor: '#2196F3',
//                                 color: '#fff',
//                                 padding: '10px 0',
//                                 fontSize: '16px',
//                                 fontWeight: 'bold',
//                             }}
//                         >
//                             Login
//                         </Button>
//                     </Grid>
//                     <Grid item style={{ textAlign: 'center', marginTop: '10px' }}>
//                         <Typography>If you don't have an account</Typography>
//                         <Button
//                             variant="text"
//                             onClick={handleSignup}
//                             style={{
//                                 color: '#2196F3',
//                                 fontWeight: 'bold',
//                                 fontSize: '14px',
//                             }}
//                         >
//                             Signup
//                         </Button>
//                     </Grid>
//                     <Grid item style={{ textAlign: 'center', marginTop: '10px' }}>
//                         <Button
//                             variant="text"
//                             onClick={onBack}
//                             style={{
//                                 color: '#2196F3',
//                                 fontWeight: 'bold',
//                                 fontSize: '14px',
//                             }}
//                         >
//                             Back to Home
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </div>
//         </Container>
//     );
// }

// export default Login;
import React, { useState } from 'react';
import { Button, Typography, Grid, TextField, IconButton, InputAdornment, Container } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

function Login({ onBack }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // useNavigate hook for navigation
    
    const lClick=()=>
    {
        navigate('/homepage');
    }

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        navigate('/homepage');
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate('/homepage'); // Navigate to the home page on successful login
            alert("Login Successful");
        }
    };

    const handleSignup = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    return (
        <Container
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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

            <div
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    padding: '30px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    zIndex: 3,
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom align="center" style={{ color: '#333' }}>
                    Login
                </Typography>

                <Typography variant="body1" align="center" style={{ marginBottom: '20px', color: '#555' }}>
                    Access your account to manage bookings.
                </Typography>

                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handlePasswordVisibility}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            onClick={onBack}
                            style={{
                                backgroundColor: '#2196F3',
                                color: '#fff',
                                padding: '10px 0',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }}
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Typography>If you don't have an account</Typography>
                        <Button
                            variant="text"
                            onClick={handleSignup}
                            style={{
                                color: '#2196F3',
                                fontWeight: 'bold',
                                fontSize: '14px',
                            }}
                        >
                            Signup
                        </Button>
                    </Grid>
                    <Grid item style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Button
                            variant="text"
                            onClick={onBack}
                            style={{
                                color: '#2196F3',
                                fontWeight: 'bold',
                                fontSize: '14px',
                            }}
                        >
                            Back to Home
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default Login;
