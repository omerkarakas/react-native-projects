import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Image } from 'react-native';
import { Modal } from 'react-native-web';

const TaskInput = ({ visible, addTaskHandler, setModalVisible }) => {
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

  const cancelTaskButton = () => {
    setTaskName('');
    setModalVisible(false);
  };

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.InputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/tasks.png')}
        />
        <TextInput
          placeholder="Task Name"
          style={styles.TextInput}
          onChangeText={taskInputHandler}
          value={taskName}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.Button}>
            <Button
              title="Add Task"
              onPress={addTaskButton}
              color="steelblue"
            />
          </View>
          <View style={styles.Button}>
            <Button title="Cancel" onPress={cancelTaskButton} color="darkred" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  InputContainer: {
    //display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: '#F2FbFb',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    width: '90%',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Button: {
    width: '80%',
    margin: 20,
    alignItems: 'stretch',
  },
  image: {
    width: 120,
    height: 200,
    margin: 20,
  },
});
