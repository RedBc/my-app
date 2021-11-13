import React, { useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IItem} from './AddItem';

const Item: React.FC<IItem> = ({label, image}) => {
  const [imageApi, setImageApi] = useState('');
  useEffect(() => {
    fetch('https://coffee.alexflipnote.dev/random.json')
      .then((response) => response.json())
      .then((json) => setImageApi(json.file))
      .catch((error) => console.error(error))
      .finally(() => console.log("finished call"));
  }, []);
     let Image_Http_URL ={ uri:imageApi};
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
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  itemName: {
    fontWeight: '500',
  },

  image:
  {

    height: 400,
    flex: 1,
    width: 400
  }
});
export default Item;