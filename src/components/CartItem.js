import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  & > * {
    margin: 0 5px;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;

  & > button {
    padding: 5px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    cursor: pointer;
  }
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  height: auto;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  font-size: 0.9rem;
  margin-left: 10px;

  &:hover {
    background-color: darkred;
  }
`;

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <ItemWrapper>
      <span>{item.title}</span>
      <QuantityControls>
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
      </QuantityControls>
      <span>${(item.price * item.quantity).toFixed(2)}</span>
      <RemoveButton onClick={() => removeFromCart(item.id)}>X</RemoveButton>
    </ItemWrapper>
  );
};

export default CartItem;
