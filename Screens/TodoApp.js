import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Spacer from '../Components/Spacer';
import ButtonIcon from '../Components/ButtonIcon';

// or any pure javascript modules available in npm
import { Title, Paragraph, Card, Button, TextInput } from 'react-native-paper';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { addTodo, addFactorItem, deleteTodo } from '../redux/todoSlice';
import React,{useState} from 'react';

// const data = [
//   {id: 1, task: "Do this stuff"},
//   {id: 2, task: "Do another stuff"},
// ]

function TodoApp({ todos_list, addTodo, addFactorItem, deleteTodo, ...props }) {
  const [task, setTask] = useState('');
  const [factorItem, setFactorItem,] = useState('');

  const handleAddTodo = () => {
    console.warn('handleAddTodo: ');
    console.log({ task });
    addTodo({ task });
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Card title="Card Title">
        <Text style={styles.paragraph}>ToDo App with React Native and Redux</Text>
      </Card>
      <Spacer />
      <Card>
        <Card.Content>
          <Title>Add ToDo Here</Title>

          <TextInput
            mode="outlined"
            label="Task"
            value={task}
            onChangeText={task => setTask(task)} />
          <Spacer />
          <Button mode="contained" onPress={handleAddTodo}>
            Add Task CC
          </Button>
        </Card.Content>
      </Card>
      <Spacer />
      <FlatList
        data={todos_list}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <>
              <Card>
                <Card.Title title={`Task#${item.id}`}
                  left={(props) => <Icon name="tasks" size={24} color="black" />}
                  right={(props) => <ButtonIcon iconName="close" color="red" onPress={() => addFactorItem({"factorItem": "test redux"})} />}
                  center={(props) => <ButtonIcon iconName="close" color="blue" onPress={() => deleteTodo(item.id)} />} />
                <Card.Content>
                  <Paragraph>{item.task}</Paragraph>
                </Card.Content>
              </Card>
              <Spacer />
            </>
          );
        } } />
      <Spacer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = (state, myOwnProps) => {
  console.log('mapStateToProps todo: ');
  console.log(state);
  console.log(state.todos.todos_list);
  console.log(state.todos.factorItem);
  return {
    todos_list: state.todos.todos_list,
  }
}

const mapDispatchToProps = {
  // ... normally is an object full of action creators
  addTodo,
  addFactorItem,
  deleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
