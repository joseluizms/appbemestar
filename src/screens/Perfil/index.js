import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerfilScreen = () => {
  const [progress, setProgress] = useState({
    meditation: 0,
    yoga: 0,
    reading: 0,
    stretching: 0,
    breathing: 0,
    walking: 0,
  });

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const tasks = ['meditation', 'yoga', 'reading', 'stretching', 'breathing', 'walking'];
        const progressData = {};

        for (const task of tasks) {
          const taskProgress = await AsyncStorage.getItem(task);
          progressData[task] = taskProgress ? parseFloat(taskProgress) : 0;
        }

        setProgress(progressData);
      } catch (error) {
        console.error('Erro ao carregar o progresso:', error);
      }
    };

    loadProgress();
  }, []);

  const activityIcons = {
    meditation: 'universal-access',
    yoga: 'child',
    reading: 'book',
    stretching: 'expand',
    breathing: 'cloud',
    walking: 'street-view',
  };

  const profileImagePath = require('../../assets/perfil.png');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PERFIL</Text>
        <Image source={profileImagePath} style={styles.profileImage} />
      </View>
      <View style={styles.progressSection}>
        {Object.entries(progress).map(([task, taskProgress]) => (
          <View key={task} style={styles.taskRow}>
            <Icon name={activityIcons[task]} size={30} color="#000" style={styles.icon} />
            <Text style={styles.progressLabel}>{task.charAt(0).toUpperCase() + task.slice(1)}</Text>
            <Progress.Bar progress={taskProgress} width={200} style={styles.progressBar} />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.completedGoalsButton}>
        <Text style={styles.completedGoalsButtonText}>METAS CONCLUÍDAS</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  progressSection: {
    marginVertical: 20,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  progressLabel: {
    fontSize: 16,
    flex: 1,
  },
  progressBar: {
    flex: 1,
    marginLeft: 10,
  },
  completedGoalsButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  completedGoalsButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PerfilScreen;
