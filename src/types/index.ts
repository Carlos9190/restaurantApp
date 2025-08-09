import { StackNavigationProp } from '@react-navigation/stack';
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
  total: string;
  orderId: Order['id'];
  selectDish: (dish: Dish2) => void;
  setOrder: (order: Order) => void;
  showResume: (total: string) => void;
  deleteItem: (id: string) => void;
  completedOrder: (id: string) => void;
};

export type OrderState = {
  order: Order[];
  dish: Dish2;
  total: string;
  orderId: Order['id'];
};

// Order state
export const SELECT_PRODUCT = 'SELECT_PRODUCT' as const;
export const CONFIRM_ORDER_DISH = 'CONFIRM_ORDER_DISH' as const;
export const SHOW_RESUMEN = 'SHOW_RESUMEN' as const;
export const DELETE_PRODUCT = 'DELETE_PRODUCT' as const;
export const CONFIRMED_ORDER = 'CONFIRMED_ORDER' as const;

export type OrderAction =
  | {
      type: typeof SELECT_PRODUCT;
      payload: Dish2;
    }
  | {
      type: typeof CONFIRM_ORDER_DISH;
      payload: Order;
    }
  | {
      type: typeof SHOW_RESUMEN;
      payload: Order['total'];
    }
  | {
      type: typeof DELETE_PRODUCT;
      payload: DishBase['id'];
    }
  | {
      type: typeof CONFIRMED_ORDER;
      payload: Order['id'];
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

// Navigation
export type NavigationProp = StackNavigationProp<RootStackParamList>;

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

export type OrderSent = {
  time: number;
  completed: boolean;
  total: number;
  order: Order[];
  createdAt: number;
};
