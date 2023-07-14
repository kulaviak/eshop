import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import Product from './Product';
import Cart from './Cart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item xs={4} key={product.id}>
                  <Product product={product} onAddToCart={handleAddToCart} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Cart cart={cart} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
