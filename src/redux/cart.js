/* eslint-disable array-callback-return */
import * as ActionTypes from "./ActionTypes";

export const Cart = (state = { products: [] }, action) => {
  switch (action.type) {
    case ActionTypes.CART_ADD:
      const prod = state.products;

      if (action.payload.quantity === 1) {
        prod.push(action.payload);
        return { ...state, products: prod };
      } else {
        prod.map((p) => {
          if (p.id === action.payload.id) {
            p.quantity += 1;
          }
        });
        return { ...state, products: prod };
      }

    case ActionTypes.CART_REMOVE:
      const rprod = state.products;

      rprod.map((p) => {
        if (p.id === action.payload) {
          p.quantity -= 1;
        }
      });
      rprod.filter((p) => {
        return p.quantity !== 0;
      });

      return { ...state, products: rprod };

    case ActionTypes.CART_CLEAR:
      return { ...state, products: [] };

    default:
      return state;
  }
};
