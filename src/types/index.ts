import { Firebase } from '../firebase/firebase';

export type Dish = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  available: boolean;
};

export type FirebaseContextProps = {
  firebase: Firebase;
  menu: Dish[];
};

export type FirebaseState = {
  menu: Dish[];
};

export type Action = {
  type: string;
  payload?: any;
};
