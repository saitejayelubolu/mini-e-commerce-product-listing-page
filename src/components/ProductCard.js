import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
