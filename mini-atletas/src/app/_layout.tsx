import { Slot } from 'expo-router';
import "../global.css";
import { AuthProvider } from '@/providers/AuthProvider';

import { ThemeProvider } from "react-native-rapi-ui";

export default function Root() {
  const images = [
    require("../../assets/login.png"),
    require("../../assets/background.png"),
  ];
  return (
    
    <ThemeProvider images={images}>
    <AuthProvider>
      <Slot />
    </AuthProvider>

    </ThemeProvider>
  );
}