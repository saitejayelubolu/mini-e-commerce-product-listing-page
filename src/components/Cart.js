import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const CartWrapper = styled.div`
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  top: 0;
  width: 300px;
  height: 100%;
  background: #f9f9f9;
  border-left: 1px solid #ddd;
  padding: 20px;
  overflow-y: auto;
  transition: right 0.3s ease;
  z-index: 100; /* Ensure it is above other content */
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: ${({ isOpen }) => (isOpen ? "320px" : "20px")};
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  z-index: 101; /* Ensure it is above the cart */
  transition: right 0.3s ease; /* Smoothly transition the button */
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, cartTotal } = useCart();

  return (
    <>
      <ToggleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Cart" : "Open Cart"}
      </ToggleButton>
      <CartWrapper isOpen={isOpen}>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => <CartItem key={item.id} item={item} />)
        )}
        <h3>Total: ${cartTotal.toFixed(2)}</h3>
        {cart.length > 0 && <CheckoutButton>Checkout</CheckoutButton>}
      </CartWrapper>
    </>
  );
};

export default Cart;
