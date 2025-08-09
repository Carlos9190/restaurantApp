import {
  OrderState,
  OrderAction,
  SELECT_PRODUCT,
  CONFIRM_ORDER_DISH,
} from '../../types';

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

    case CONFIRM_ORDER_DISH:
      return {
        ...state,
        order: [...state.order, action.payload],
      };

    default:
      return state;
  }
}
