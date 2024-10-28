import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import Plugin from '../Asserts/Images/plugin.png';
import Pluginpage from './PluginPage';


// Sample product data (same as in ProductsListPage)
const products = [
    {
        id: 1,
        name: "Theme Customizer",
        description: "Customize themes to match your Sisense dashboard style.",
        image: Plugin,
    },
    {
        id: 2,
        name: "Enhanced Widgets",
        description: "Make your dashboards more interactive with our enhanced widgets.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Data Visualizer",
        description: "Improved visualizations for better insights and clarity.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        name: "Advanced Filters",
        description: "Powerful filtering options for more precise data.",
        image: "https://via.placeholder.com/150",
    },
];

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find((prod) => prod.id === parseInt(id)); // Find the product by ID

    if (!product) {
        return <Typography variant="h6">Product not found</Typography>; // Handle case where product is not found
    }

    return (
        <Container>
            <Box textAlign="center" my={4}>
                <Typography variant="h4" gutterBottom>
                    {product.name}
                </Typography>
                <div className='col-12 border border-black p-2 rounded-5'>
                    <img src={product.image} alt={product.name} height="200" width='100%' />
                </div>
                <Typography variant="body1" gutterBottom>
                    {product.description}
                </Typography>
            </Box>
            <Pluginpage/>
        </Container>
    );
};

export default ProductDetailPage;
