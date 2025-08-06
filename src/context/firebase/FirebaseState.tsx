import { ReactNode, useReducer } from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

import { Dish, GET_PRODUCTS_SUCCESS } from '../../types';

type FirebaseStateProps = {
  children: ReactNode;
};

export default function FirebaseState({ children }: FirebaseStateProps) {
  const initialState = {
    menu: [],
  };

  // useReducer w dispatch to use functions
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  // Get dishes function
  const getProducts = () => {
    // Consult Firebase
    if (firebase && firebase.db) {
      const productsRef = query(
        collection(firebase.db, 'products'),
        where('available', '==', true),
      );

      // List on real time
      const unsubscribe = onSnapshot(productsRef, snapshot => {
        const dishes = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            price: data.price,
            category: data.category,
            description: data.description,
            available: data.available,
          } as Dish;
        });

        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: dishes,
        });
      });

      return () => unsubscribe();
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
        getProducts,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}
