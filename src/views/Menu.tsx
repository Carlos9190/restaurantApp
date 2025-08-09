import { Fragment, useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, List, Divider, Text } from 'react-native-paper';

// Contexts
import FirebaseContext from '../context/firebase/firebaseContext';
import OrderContext from '../context/orders/ordersContext';

import { globalStyles } from '../styles';
import { imageMap } from '../../assets';
import { Dish, NavigationProp } from '../types';

export default function Menu() {
  // Firebase context
  const { menu, getProducts } = useContext(FirebaseContext);

  // Order context
  const { selectDish } = useContext(OrderContext);

  // Redirection hook
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    getProducts();
  }, []);

  const showHeading = (category: Dish['category'], index: number) => {
    if (index > 0) {
      const formerCategory = menu[index - 1].category;
      if (formerCategory !== category) {
        return (
          <View style={styles.headingContainer}>
            <Divider style={styles.divider} />
            <Text style={styles.dividerText}>{category}</Text>
            <Divider style={styles.divider} />
          </View>
        );
      }
    } else {
      return (
        <View style={styles.headingContainer}>
          <Divider style={styles.divider} />
          <Text style={styles.dividerText}>{category}</Text>
          <Divider style={styles.divider} />
        </View>
      );
    }
  };

  return (
    <View style={[globalStyles.container, { marginBottom: 50 }]}>
      <ScrollView>
        <View style={[globalStyles.content, { backgroundColor: '#FFF' }]}>
          {menu.map((dish, index) => (
            <Fragment key={dish.id}>
              {showHeading(dish.category, index)}
              <List.Item
                title={dish.name}
                description={() => (
                  <>
                    <Text>{dish.description}</Text>
                    <Text>Price: ${dish.price}</Text>
                  </>
                )}
                left={props => (
                  <Avatar.Image
                    {...props}
                    size={50}
                    source={imageMap[dish.category]}
                  />
                )}
                onPress={() => {
                  // Delete some dish properties
                  const { available, ...dish2 } = dish;

                  selectDish(dish2);
                  navigation.navigate('DishDetails');
                }}
              />
            </Fragment>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 9,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
