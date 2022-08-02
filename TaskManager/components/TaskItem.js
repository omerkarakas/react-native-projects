import { Pressable, StyleSheet, Text, View } from 'react-native';

const TaskItem = ({ id, text, onDeleteItem }) => {
  return (
    <Pressable onPress={() => onDeleteItem(id)}>
      <View style={styles.Task}>
        <Text style={styles.TaskText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  Task: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#DEF',
  },
  TaskText: {
    fontSize: 20,
    color: 'blue',
  },
});
