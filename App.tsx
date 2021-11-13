import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import AddItem, {IItem} from './src/components/AddItem';
import Item from './src/components/Item';

const App = () => {
  const [shoppingList, setImageList] = useState<IItem[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <AddItem
          setImageList={setImageList}
          imageList={shoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.label}-${index}`}
          renderItem={({item}) => (
            <Item label={item.label} image={item.image} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentWrapper: {
    padding: 20,
  },
});
export default App;