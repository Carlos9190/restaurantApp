import {
  OrderState,
  OrderAction,
  SELECT_PRODUCT,
  CONFIRM_ORDER_DISH,
  SHOW_RESUMEN,
  DELETE_PRODUCT,
  CONFIRMED_ORDER,
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

    case SHOW_RESUMEN:
      return {
        ...state,
        total: action.payload,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        order: state.order.filter(item => item.id !== action.payload),
      };

    case CONFIRMED_ORDER:
      return {
        ...state,
        order: [],
        total: '0',
        orderId: action.payload,
      };

    default:
      return state;
  }
}
