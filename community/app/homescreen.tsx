import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.error(`Errror clearonboarding ${err}`);
    }
  };
  // const textme = '';
  useEffect(() => {
    clearOnboarding();
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>

      <TouchableOpacity onPress={clearOnboarding}>
        <Text>Reset onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
