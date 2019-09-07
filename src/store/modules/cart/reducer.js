import produce from 'immer';

export default function cart(state = [], action) {
  switch (
    action.type // um switch case básico que recebe action.type como parametro
  ) {
    case '@cart/ADD_SUCCESS': // caso seja nossa action desejada
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      // senão por padrão, como todos oreduces são chamados
      return state; // retorna o estado que estava
  }
}
