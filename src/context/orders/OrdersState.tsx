import { ReactNode, useReducer } from 'react';
import OrderReducer from './ordersReducer';
import OrderContext from './ordersContext';

import {
  Dish2,
  SELECT_PRODUCT,
  Order,
  CONFIRM_ORDER_DISH,
  SHOW_RESUMEN,
  DELETE_PRODUCT,
  CONFIRMED_ORDER,
  DishBase,
} from '../../types';

type OrderStateProps = {
  children: ReactNode;
};

const initialDish: Dish2 = {
  id: '',
  name: '',
  price: '',
  category: '',
  description: '',
};

export default function OrderState({ children }: OrderStateProps) {
  const initialState = {
    order: [],
    dish: initialDish,
    total: '0',
    orderId: '',
  };

  // useReducer w dispatch to use functions
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  // Select the dish which the user wants to order
  const selectDish = (dish: Dish2) => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: dish,
    });
  };

  // When user confirms an order
  const setOrder = (order: Order) => {
    dispatch({
      type: CONFIRM_ORDER_DISH,
      payload: order,
    });
  };

  // Displays total amount on OrderResume
  const showResume = (total: Order['total']) => {
    dispatch({
      type: SHOW_RESUMEN,
      payload: total,
    });
  };

  // Delete an item from order resume
  const deleteItem = (id: DishBase['id']) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };

  // Create an order (DB)
  const completedOrder = (id: Order['id']) => {
    dispatch({
      type: CONFIRMED_ORDER,
      payload: id,
    });
  };

  return (
    <OrderContext.Provider
      value={{
        order: state.order,
        dish: state.dish,
        total: state.total,
        orderId: state.orderId,
        selectDish,
        setOrder,
        showResume,
        deleteItem,
        completedOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
