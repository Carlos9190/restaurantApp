import { ImageSourcePropType } from 'react-native';
import { Dish } from '../src/types';

export const imageMap: Record<Dish['category'], ImageSourcePropType> = {
  breakfast: require('./images/breakfast.jpg'),
  beverage: require('./images/beverage.jpg'),
  dessert: require('./images/dessert.jpg'),
  dinner: require('./images/dinner.jpg'),
  salad: require('./images/salad.jpg'),
  lunch: require('./images/lunch.jpg'),
};
