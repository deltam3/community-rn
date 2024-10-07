import '../global.css';

import { Redirect, Stack } from 'expo-router';
import GreetScreen from './onboard/index';
import HomeScreen from './homescreen';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="onboard" options={{ headerShown: false }} />
      <Stack.Screen name="homescreen" options={{ headerShown: false }} />
    </Stack>
  );
}
