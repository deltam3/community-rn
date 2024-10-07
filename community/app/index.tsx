import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from 'expo-router';

const Home = () => {
  return (
    <View>
      <Link href="/homescreen">Go back to Home screen!</Link>
      <Link href="/onboard">Go back to onboard!</Link>
    </View>
  );
};

export default Home;
