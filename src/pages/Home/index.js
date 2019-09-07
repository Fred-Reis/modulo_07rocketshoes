import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  // async componentDidMount() {
  //   const response = await api.get('products');

  //   const data = response.data.map(product => ({
  //     ...product, // aqui pegamos tudo de product
  //     priceFormatted: formatPrice(product.price), // aqui pegamos o preço e usamos a função pra formatar
  //   }));

  //   this.setState({ products: data }); // agora só recebe a nova variavel data
  // }

  function handleAddProduct(id) {
    // todo componente que se conecta com o redux ele recee uma prop que se chama dispatch
    // que serve pra disparar uma action
    // const { addToCartRequest } = this.props;
    // agora criamos nossa action que tem que ter um type e um objeto
    dispatch(CartActions.addToCartRequest(id));
  }

  // render() {
  //   const { products } = this.state;
  //   const { amount } = this.props;

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
