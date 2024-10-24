import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, InputLabel, FormControl, Typography, Checkbox, Grid } from '@mui/material';
import './HotelSearch.css';

const HotelSearch = () => {
    const [filters, setFilters] = useState({
        rooms: 100,
        dailyRate: 200,
        weather: 83,
        directFlights: 'BNA',
        distance: 20,
        pointOfInterest: 'San Diego Convention Center',
        amenities: {
            fitnessCenter: true,
            businessCenter: false,
            outdoorPool: false,
            indoorPool: false,
            valetParking: false,
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleCheckboxChange = (name) => {
        setFilters({
            ...filters,
            amenities: {
                ...filters.amenities,
                [name]: !filters.amenities[name],
            },
        });
    };

    return (
        <Grid container spacing={2} className="hotel-search-form">
            <Grid item xs={12}>
                <TextField
                    label="Number of Rooms"
                    type="number"
                    name="rooms"
                    value={filters.rooms}
                    onChange={handleInputChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Avg Daily Room Rate"
                    type="number"
                    name="dailyRate"
                    value={filters.dailyRate}
                    onChange={handleInputChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Weather in F°"
                    type="number"
                    name="weather"
                    value={filters.weather}
                    onChange={handleInputChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Direct Flights From</InputLabel>
                    <Select
                        name="directFlights"
                        value={filters.directFlights}
                        onChange={handleInputChange}
                    >
                        <MenuItem value="BNA">BNA</MenuItem>
                        <MenuItem value="LAX">LAX</MenuItem>
                        <MenuItem value="JFK">JFK</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Miles from Airport</Typography>
                <div className="distance-buttons">
                    {[2, 5, 10, 20].map((distance) => (
                        <Button
                            key={distance}
                            variant={filters.distance === distance ? 'contained' : 'outlined'}
                            onClick={() => setFilters({ ...filters, distance })}
                        >
                            {distance}
                        </Button>
                    ))}
                </div>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Point of Interest"
                    name="pointOfInterest"
                    value={filters.pointOfInterest}
                    onChange={handleInputChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Onsite Amenities</Typography>
                <div className="amenities">
                    {Object.keys(filters.amenities).map((key) => (
                        <div key={key}>
                            <Checkbox
                                checked={filters.amenities[key]}
                                onChange={() => handleCheckboxChange(key)}
                            />
                            <label>{key.replace(/([A-Z])/g, ' $1')}</label>
                        </div>
                    ))}
                </div>
            </Grid>
        </Grid>
    );
};

export default HotelSearch;
