import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      backgroundColor: '#f8f8f8',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    addButton: {
      backgroundColor: '#5cb85c',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
    },
    addButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    task: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      marginBottom: 5,
      backgroundColor: '#fff',
    },
    taskText: {
      fontSize: 16,
    },
    completed: {
      textDecorationLine: 'line-through',
      color: 'gray',
    },
    deleteButton: {
      color: 'red',
      fontSize: 16,
    },
  });

  export default styles;
  