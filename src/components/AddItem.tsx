import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
export interface IItem {
  label: string;
  image: string;
}
interface Props {
  setImageList: React.Dispatch<React.SetStateAction<IItem[]>>;
  imageList: IItem[];
}
const AddItem: React.FC<Props> = ({imageList, setImageList}) => {
  const [label, setLabel] = useState('');
  const [image, setImage] = useState('');
  const addItem = () => {
    

        setImageList([
        ...imageList,
        {
          label,
          image,
        },
      ]);
      setLabel('');
      setImage('');
    
  };
  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Quoi de neuf ?"
          value={label}
          onChangeText={text => setLabel(text)}
        />
        <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
          <Text style={styles.buttonText}>Publier</Text>
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
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemButton: {
    backgroundColor: '#ffed4e',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 8,
    width:60,
    height:40,
    alignSelf: 'flex-end',  
    alignItems: 'center',
  },
  buttonText: {
   color: 'white',
   textAlign:'center',
   width: 50,
   height: 50,

  fontWeight: 'bold'},
});
export default AddItem;