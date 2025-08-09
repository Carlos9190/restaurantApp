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
  order: Order[];
  dish: Dish2;
  selectDish: (dish: Dish2) => void;
  setOrder: (order: Order) => void;
};

export type OrderState = {
  order: Order[];
  dish: Dish2;
};

// Order state
export const SELECT_PRODUCT = 'SELECT_PRODUCT' as const;
export const CONFIRM_ORDER_DISH = 'CONFIRM_ORDER_DISH' as const;

export type OrderAction =
  | {
      type: typeof SELECT_PRODUCT;
      payload: Dish2;
    }
  | {
      type: typeof CONFIRM_ORDER_DISH;
      payload: Order;
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

export type DishBase = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
};

export type Dish = DishBase & {
  available: boolean;
};

export type Dish2 = DishBase;

export type Order = DishBase & {
  quantity: string;
  total: string;
};
