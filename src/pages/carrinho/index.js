import React, { Component } from 'react';

import { Container, ProductList } from './styles';

export default class Venda extends Component {
  render() {
    return (
      <Container>
        <ProductList>
          <li>
            <img 
              src=""
              alt="Teclado Gamer"
            />
            <strong>Teclado Gamer</strong>
            <span>R$120,00</span>
            <button
              type="button"
            >
              
            </button>
          </li>
        </ProductList>
      </Container>
    );
  }
}
