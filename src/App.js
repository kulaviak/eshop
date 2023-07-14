import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import Product from './Product';
import Cart from './Cart';
import ButtonAppBar from './ButtonAppBar';
import Typography from '@material-ui/core/Typography';

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
      <ButtonAppBar/>
      <br/>
      <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          Clothes
      </Typography>      
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
