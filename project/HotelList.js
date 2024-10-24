import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

function HotelList() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('API_URL'); // Replace 'API_URL' with your actual API endpoint
                const data = await response.json();
                console.log(data); // Log the data to see its structure
                setHotels(data.hotels); // Adjust based on actual response structure
            } catch (error) {
                setError(error.message);
                console.error('Error fetching hotel data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Typography variant="h6">Loading hotels...</Typography>;
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    console.log(hotels); // Log hotels to see if data was fetched successfully

    return (
        <Container>
            <Typography variant="h6">Hotel List Component Loaded</Typography>
            {hotels.length > 0 ? (
                hotels.map((hotel) => (
                    <Card key={hotel.id} style={{ margin: '10px 0' }}>
                        <CardContent>
                            <Typography variant="h5">{hotel.name}</Typography>
                            <Typography variant="body2">{hotel.location}</Typography>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography variant="h6">No hotels available</Typography>
            )}
        </Container>
    );
}

export default HotelList;
