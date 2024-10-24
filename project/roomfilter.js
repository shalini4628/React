import React, { useState } from 'react';
import { Grid, TextField, Slider, Checkbox, FormControlLabel, Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';

function RoomFilter({ onSearch }) {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [roomType, setRoomType] = useState('');
  const [ratings, setRatings] = useState([1, 5]);
  const [amenities, setAmenities] = useState([]);

  const roomTypes = [
    { value: 'single', label: 'Single' },
    { value: 'double', label: 'Double' },
    { value: 'suite', label: 'Suite' },
  ];

  const amenitiesList = [
    { value: 'wifi', label: 'Wi-Fi' },
    { value: 'breakfast', label: 'Breakfast Included' },
    { value: 'pool', label: 'Pool' },
  ];

  const cityData = [
    { name: 'New York', image: 'https://media.istockphoto.com/id/533998713/photo/empire-state-building-at-night.jpg?s=612x612&w=0&k=20&c=2fZCcZq3186F9R2WHZ2hEBh4dVsOX7pqgcVRXXn195I=' },
    { name: 'Los Angeles', image: 'https://media.gettyimages.com/id/478821794/photo/skyscrapers-of-los-angeles-skyline-architecture-urban-cityscape.jpg?s=612x612&w=gi&k=20&c=U6nJ6S2LdKNEurOJV2p86FMFBKoU5FAKSHgFgecYMwY=' },
    { name: 'Chicago', image: 'data:image/jpeg;base64,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' },
  ];

  const handleAmenityChange = (event) => {
    const { value } = event.target;
    setAmenities((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSearch = () => {
    const filterData = {
      location,
      priceRange,
      roomType,
      ratings,
      amenities,
    };
    onSearch(filterData);
  };

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your actual API key
    libraries: ['places'],
  });

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loading message until the API is loaded
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Select a City
        </Typography>
      </Grid>

      {/* Display City Cards */}
      {cityData.map((city) => (
        <Grid item xs={12} sm={4} key={city.name}>
          <Card>
            <CardMedia
              component="img"
              alt={city.name}
              height="140"
              image={city.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {city.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Grid item xs={12} sm={6}>
        <Autocomplete>
          <TextField
            label="Location"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            margin="normal"
          />
        </Autocomplete>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          select
          label="Room Type"
          fullWidth
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          margin="normal"
          SelectProps={{
            native: true,
          }}
        >
          <option value="" disabled>Select room type</option>
          {roomTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Typography>Price Range</Typography>
        <Slider
          value={priceRange}
          onChange={(e, newValue) => setPriceRange(newValue)}
          valueLabelDisplay="auto"
          min={50}
          max={1000}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Ratings</Typography>
        <Slider
          value={ratings}
          onChange={(e, newValue) => setRatings(newValue)}
          valueLabelDisplay="auto"
          min={1}
          max={5}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Amenities</Typography>
        {amenitiesList.map((amenity) => (
          <FormControlLabel
            key={amenity.value}
            control={
              <Checkbox
                value={amenity.value}
                onChange={handleAmenityChange}
              />
            }
            label={amenity.label}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default RoomFilter;
