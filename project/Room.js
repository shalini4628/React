// Rooms.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Rooms = () => {
    const [roomsData, setRoomsData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/rooms') // Ensure your json-server runs at this address
            .then((response) => {
                setRoomsData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching room data:', error);
                setError('Failed to fetch room data');
            });
    }, []);

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Available Rooms
            </Typography>
            <Grid container spacing={3}>
                {roomsData.map((room) => (
                    <Grid item xs={12} sm={6} md={4} key={room.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={room.image}
                                alt={room.type}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'fallback_image_url'; }} // Optional: Fallback image
                            />
                            <CardContent>
                                <Typography variant="h6">{room.type}</Typography>
                                <Typography variant="body1">Price: ${room.price}</Typography>
                                <Typography variant="body2">Location: {room.location}</Typography>
                                <Typography variant="body2">{room.ac ? 'AC Room' : 'Non-AC Room'}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate(`/rooms/${room.id}`)} // Navigate to the details page
                                >
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Rooms;
