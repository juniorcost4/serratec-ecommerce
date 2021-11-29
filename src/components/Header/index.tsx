import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart, CartSizeCoin } from './styles';
import { useCart } from '../../hooks/useCart';
import SearchBar from '../SearchBar';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img src="https://static.gpa.digital/images/pa/logo-pa.png" alt="Pão de Açucar" />
      </Link>

      <SearchBar />

      <Cart to="/cart">
        {cartSize > 0 && <CartSizeCoin><p>{cartSize}</p></CartSizeCoin>}
        <MdShoppingCart size={36} color="rgb(136,176,75)" />
      </Cart>
    </Container>
  );
};

export default Header;
