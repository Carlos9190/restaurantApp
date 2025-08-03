import { ReactNode, useReducer } from 'react';
import OrderReducer from './ordersReducer';
import OrderContext from './ordersContext';

type OrderStateProps = {
  children: ReactNode;
};

export default function OrderState({ children }: OrderStateProps) {
  const initialState = {
    order: [],
  };

  const [state, dispatch] = useReducer(OrderReducer, initialState);

  return (
    <OrderContext.Provider
      value={{
        order: state.order,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
