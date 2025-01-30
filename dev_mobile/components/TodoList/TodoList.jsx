import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) setTasks(JSON.parse(storedTasks));
    } catch (error) {
      console.error('Erreur de chargement des tâches', error);
    }
  };

  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Erreur de sauvegarde des tâches', error);
    }
  };

  const addTask = () => {
    if (task.trim() === '') return;
    const newTasks = [...tasks, { id: Date.now().toString(), text: task, completed: false }];
    setTasks(newTasks);
    saveTasks(newTasks);
    setTask('');
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
    saveTasks(filteredTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Ajouter une tâche..."
        value={task}
        onChangeText={setTask}
        onEndEditing={addTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Ajouter</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.task} onPress={() => toggleTask(item.id)}>
            <Text style={[styles.taskText, item.completed && styles.completed]}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteButton}>❌</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

