import { ReactNode, useReducer } from 'react';
import OrderReducer from './ordersReducer';
import OrderContext from './ordersContext';

import { Dish2, SELECT_PRODUCT, Order, CONFIRM_ORDER_DISH } from '../../types';

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

  return (
    <OrderContext.Provider
      value={{
        order: state.order,
        dish: state.dish,
        selectDish,
        setOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
