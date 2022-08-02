import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (inputText) => {
    setTasks((currTasks) => [
      ...currTasks,
      { text: inputText, id: Math.random().toString() },
    ]);
  };

  const deleteTaskHandler = (id) => {
    console.log('delete');
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.AppContainer}>
      <TaskInput addTaskHandler={addTaskHandler} />

      <View style={styles.TasksContainer}>
        <FlatList
          data={tasks}
          renderItem={(itemData) => {
            return (
              <TaskItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={() => deleteTaskHandler(itemData.item.id)}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        />
        {/* <ScrollView>
          {tasks.map((task, index) => {
            return (
              <View key={index} style={styles.Task}>
                <Text style={styles.TaskText}>{task}</Text>
              </View>
            );
          })}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    padding: 30,
    flexDirection: 'column',
    flex: 1,
  },

  TasksContainer: {
    //display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'stretch',
    margin: 50,
    width: '80%',
    flex: 4,
    backgroundColor: '#FBFBFF',
    borderRadius: 5,
  },
});
