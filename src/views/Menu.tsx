import { Fragment, useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, List, Divider } from 'react-native-paper';
import FirebaseContext from '../context/firebase/firebaseContext';
import { globalStyles } from '../styles';
import { imageMap } from '../../assets';

export default function Menu() {
  const { menu, getProducts } = useContext(FirebaseContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={[globalStyles.content, { backgroundColor: '#FFF' }]}>
          {menu.map((dish, index) => (
            <Fragment key={dish.id}>
              <List.Item
                title={dish.name}
                description={`${dish.description} - $${dish.price}`}
                left={props => (
                  <Avatar.Image
                    {...props}
                    size={50}
                    source={imageMap[dish.category]}
                  />
                )}
              />

              {index < menu.length - 1 && <Divider />}
            </Fragment>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
