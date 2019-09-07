import styled from 'styled-components';
import { Link } from 'react-router-dom'; // importar o link pq o cart é um link

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0; /*50 emcima e embaixo e 0 dos lados*/
`;

// pra utilizar o cart como link importamos e colocamos o link desssa forma
export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block; /*pra deixar ele emcima do span*/
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
