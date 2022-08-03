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
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const startAddTask = () => {
    setModalVisible(true);
  };

  const addTaskHandler = (inputText) => {
    setTasks((currTasks) => [
      ...currTasks,
      { text: inputText, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  };

  const deleteTaskHandler = (id) => {
    console.log('delete');
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.AppContainer}>
        <Button
          title="Add New Task"
          onPress={setModalVisible}
          color="steelblue"
        />
        <TaskInput
          visible={modalVisible}
          addTaskHandler={addTaskHandler}
          setModalVisible={setModalVisible}
        />

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
    </>
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
    // margin: 50,
    width: '100%',
    flex: 4,
    backgroundColor: '#FBFBFF',
    borderRadius: 5,
  },
});
