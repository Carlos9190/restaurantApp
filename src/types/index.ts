import { Firebase } from '../firebase/firebase';

// Firebase
export type FirebaseContextProps = {
  firebase: Firebase;
  menu: Dish[];
  getProducts: () => void;
};

export type FirebaseState = {
  menu: Dish[];
};

// Dishes state
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS' as const;

export type FirebaseAction = {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: Dish[];
};

// Order
export type OrderContextProps = {
  order: Dish[];
  dish: Dish2;
  selectDish: (dish: Dish2) => void;
};

export type OrderState = {
  order: Dish[];
  dish: Dish2;
};

// Order state
export const SELECT_PRODUCT = 'SELECT_PRODUCT' as const;

export type OrderAction = {
  type: typeof SELECT_PRODUCT;
  payload: Dish2;
};

// Views
export type RootStackParamList = {
  NewOrder: undefined;
  Menu: undefined;
  DishDetails: undefined;
  DishForm: undefined;
  OrderResume: undefined;
  OrderProgress: undefined;
};

export type Dish = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  available: boolean;
};

export type Dish2 = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
};
