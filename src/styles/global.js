import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top; /*usando a imagem de background sem repetir centralizada no centro e topo*/
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {/*  vem la do html */
    max-width: 1020px; /*o tamanho total da aplicação*/
    margin: 0 auto; /*pra ficar sempre no centro da tela*/
    padding: 0 20px 50px; /*padding emcima lados baixo*/
  }


`;
