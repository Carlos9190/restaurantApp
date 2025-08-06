import { createContext } from 'react';
import { FirebaseContextProps } from '../../types';

const FirebaseContext = createContext<FirebaseContextProps>(
  {} as FirebaseContextProps,
);

export default FirebaseContext;
