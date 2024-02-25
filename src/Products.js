import React from "react";
import styled from "styled-components";

const Products = () => {
  return <Wrapper><h1 className="common-heading pt-5">Products</h1></Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

 
`;

export default Products;
