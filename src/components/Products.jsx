import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItems from "./ProductItems";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
