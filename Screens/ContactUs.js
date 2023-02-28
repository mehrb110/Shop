import { FontAwesome as Icon } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BasketApp from './BasketApp';
import TodoApp from './TodoApp';

export default function ContactUs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        ContactUs-=  test redux Toolkit -&nbsp;<Icon name="tasks" size={24} color="black" />
      </Text>
      {/* <TodoApp/> */}
      <BasketApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    height: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});