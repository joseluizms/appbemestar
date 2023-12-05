
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#E1F2E0', '#8DDCE5', '#114A55']} style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.texto1}>Bem estar em </Text>
        <Text style={styles.numero2}>5</Text>
      </View>
      <TouchableOpacity 
          style={styles.iniciarContainer} 
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.iniciar}>Começar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto1: {
    fontSize: 40,
    color: '#114A55',
  },
  numero2: {
    fontSize: 55,
    color: '#114A55',
  },
  iniciarContainer: {
    borderWidth: 3,
    borderColor: '#8DDCE5',
    backgroundColor: '#8DDCE5',
    padding: 15,
    borderRadius: 30,
    marginBottom: 120,
  },
  iniciar: {
    fontSize: 25,
    color: '#114A55',
    textAlign: 'center',
  },
});

export default Home;
