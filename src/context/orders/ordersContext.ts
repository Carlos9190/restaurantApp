import { createContext } from 'react';
import { Firebase } from '../../firebase/firebase';

const OrderContext = createContext<Firebase | null>(null);

export default OrderContext;
