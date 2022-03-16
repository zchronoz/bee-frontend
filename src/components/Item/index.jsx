import React from "react";
import { Link } from "react-router-dom";

import { Container, Information } from "./styles";

function Item({ name, type, complement, link }) {
  return (
    <Container>
      <Link to={link}>{name}</Link>
      <Information>
        <span>{type}</span>
        <span>{complement}</span>
      </Information>
    </Container>
  );
}

export default Item;
