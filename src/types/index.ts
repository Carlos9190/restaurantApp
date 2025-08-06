import { Firebase } from '../firebase/firebase';

export type FirebaseContextProps = {
  firebase: Firebase;
  menu: Dish[];
  getProducts: () => void;
};

// Dishes state
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS' as const;

export type FirebaseState = {
  menu: Dish[];
};

export type FirebaseAction = {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: Dish[];
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
