import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: '2.5%',
  },
  btn: {
    backgroundColor: '#FFDA00',
    borderRadius: 10,
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30,
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
  },
  amount: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
    padding: 25,
    backgroundColor: 'white',
  },
});
