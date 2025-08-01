import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {


  // localStorage.getItem('token')
  return <Stack>
    <Stack.Screen 
      name="(index)"
      options={{headerShown:false}}
    />
    <Stack.Screen 
      name="movie/[id]"
      options={{headerShown:false}}
    />
  </Stack>;
}
