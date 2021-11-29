import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
  background-color: #F4F4F4;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const CartSizeCoin = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #ff4700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
  }
`;
