import { ReactNode, useReducer } from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

type FirebaseStateProps = {
  children: ReactNode;
};

export default function FirebaseState({ children }: FirebaseStateProps) {
  const initialState = {
    menu: [],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}
