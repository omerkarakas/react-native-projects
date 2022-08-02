import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const TaskInput = ({ addTaskHandler }) => {
  const [taskName, setTaskName] = useState('');

  const taskInputHandler = (text) => {
    setTaskName(text);
  };

  const addTaskButton = () => {
    if (taskName.length > 0) {
      addTaskHandler(taskName);
      setTaskName('');
    }
  };

  return (
    <View style={styles.InputContainer}>
      <TextInput
        placeholder="Task Name"
        style={styles.TextInput}
        onChangeText={taskInputHandler}
        value={taskName}
      />
      <Button title="Add Task" onPress={addTaskButton} />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  InputContainer: {
    //display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 50,
    width: '80%',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});
