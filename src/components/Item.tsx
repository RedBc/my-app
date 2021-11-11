import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IItem} from './AddItem';

const imageUrl = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";


const Item: React.FC<IItem> = ({label, image}) => {

     let Image_Http_URL ={ uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'};
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{label}</Text>
      <Image source={Image_Http_URL}  style={styles.image} />


      
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  itemName: {
    fontWeight: '500',
  },
  quantity: {
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  image:
  {

    height: 400,
    flex: 1,
    width: 400
  }
});
export default Item;