import { Pressable, StyleSheet, Text, View } from 'react-native';

const TaskItem = ({ id, text, onDeleteItem }) => {
  return (
    <View style={styles.Task}>
      <Pressable
        android_ripple={{ color: '#CCCCCC' }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedTask}
      >
        <Text style={styles.TaskText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  Task: {
    margin: 10,
    borderRadius: 5,
    // backgroundColor: 'lightblue',
  },
  TaskText: {
    fontSize: 20,
    color: 'blue',
    padding: 8,
  },
  pressedTask: {
    opacity: 0.7,
  },
});
