import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Search from "./Search";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  & > button {
    margin: 0 5px;
    padding: 10px;
    background-color: #f0f0f0;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #007bff;
      color: white;
    }

    &.active {
      background-color: #007bff;
      color: white;
    }
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Set all products as the default filtered list
      });
  }, []);

  const handleSearch = searchTerm => {
    if (searchTerm) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Reset to all products if search is cleared
    }
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Product List</h1>
      <Search onSearch={handleSearch} />
      <ProductGrid>
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
      <PaginationWrapper>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </PaginationWrapper>
    </div>
  );
};

export default ProductList;
