import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Plugin from '../Asserts/Images/plugin.png';

// Sample product data
const products = [
  {
    id: 1,
    name: "Theme Customizer",
    description: "Customize themes to match your Sisense dashboard style.",
    image: Plugin, // placeholder image URL
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

const ProductsListPage = () => {
  return (
    <Container maxWidth='lg' className='vh-100'>
      <Box textAlign="center" my={4}>
        <Typography variant="h4" gutterBottom>
          Our Products Enhance Sisense Dashboards
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Designed to make your dashboards look good and perform better.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ boxShadow: 4, borderRadius: 2, minHeight: '300px', cursor: 'pointer' }}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="140"
                  image={product.image}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsListPage;
