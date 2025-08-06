import { createContext } from 'react';
import { OrderContextProps } from '../../types';

const OrderContext = createContext<OrderContextProps>({} as OrderContextProps);

export default OrderContext;
