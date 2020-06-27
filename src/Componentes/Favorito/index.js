import React from "react";
import { Estrella } from "../Svgs";
import styled from "styled-components";

const Wrapper = styled.span`
  color: ${({ esFavorito }) => (esFavorito ? "gold" : "white")};
  transition: color 150ms ease-in-out, opacity 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

export const Favorito = ({ onClick, esFavorito }) => (
  <Wrapper
    data-testid={`favorito-${esFavorito}`}
    esFavorito={esFavorito}
    onClick={onClick}
  >
    <Estrella />
  </Wrapper>
);
