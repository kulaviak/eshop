import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

const Product = ({ product, onAddToCart }) => {
  const { title, price, description, category, image } = product;

  return (
    <Card>
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <Typography variant="subtitle2">{category}</Typography>
        <Typography variant="h6">${price}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;