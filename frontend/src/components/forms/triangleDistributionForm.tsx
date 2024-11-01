import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

export default function TriangleDistributionForm({ onSubmit }: { onSubmit: (data: any) => void }) {
    const [formData, setFormData] = useState({
        A1: 0,
        Ax: 0,
        Ab: 0,
        zmax: 0,
        zbot: 0,
        leafAreaIndex: 0,
        canopyHeight: 0,
        dragCoefAth: 0,
        z0g: 0,
        numNodes: 100,
        inputSpeed: 0,
        inputHeight: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: parseFloat(value),
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/triangle_distribution', formData);
            onSubmit(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h6">Triangle Distribution</Typography>
            <TextField required id="A1" label="A1" type="number" onChange={handleChange} />
            <TextField required id="Ax" label="Ax" type="number" onChange={handleChange} />
            <TextField required id="Ab" label="Ab" type="number" onChange={handleChange} />
            <TextField required id="zmax" label="Max Height" type="number" onChange={handleChange} />
            <TextField required id="zbot" label="Bot Height" type="number" onChange={handleChange} />
            <TextField required id="leafAreaIndex" label="Leaf Area Index" type="number" onChange={handleChange} />
            <TextField required id="canopyHeight" label="Canopy Height" type="number" onChange={handleChange} />
            <TextField required id="dragCoefAth" label="Drag Coefficient" type="number" onChange={handleChange} />
            <TextField required id="z0g" label="Ground Roughness Length (z0g)" type="number" onChange={handleChange} />
            <TextField required id="numNodes" label="Number of Nodes" type="number" onChange={handleChange} />
            <TextField required id="inputSpeed" label="Input Wind Speed" type="number" onChange={handleChange} />
            <TextField required id="inputHeight" label="Input Reference Height" type="number" onChange={handleChange} />
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Box>
    );
}
