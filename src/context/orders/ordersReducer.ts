import { OrderState, OrderAction, SELECT_PRODUCT } from '../../types';

export default function firebaseReducer(
  state: OrderState,
  action: OrderAction,
): OrderState {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        dish: action.payload,
      };

    default:
      return state;
  }
}
