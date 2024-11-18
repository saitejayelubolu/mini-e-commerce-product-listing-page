import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.slice(0, 5));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <ProductListWrapper>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
