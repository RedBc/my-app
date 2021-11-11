import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
export interface IItem {
  label: string;
  image: string;
}
interface Props {
  setShoppingList: React.Dispatch<React.SetStateAction<IItem[]>>;
  shoppingList: IItem[];
}
const AddItem: React.FC<Props> = ({shoppingList, setShoppingList}) => {
  const [label, setLabel] = useState('');
  const [image, setImage] = useState('');
  const addItem = () => {
    if (!label) {
      Alert.alert('No Item!', 'You need to enter an item');
    } else {

        setImage('https://images.unsplash.com/photo-1526045612212-70caf35c14df')
      setShoppingList([
        ...shoppingList,
        {
          label,
          image,
        },
      ]);
      setLabel('');
      setImage('');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Add Shopping Item</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={label}
          onChangeText={text => setLabel(text)}
        />
        
        <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
export default AddItem;