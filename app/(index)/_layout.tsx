import { Stack } from "expo-router";

function _AuthLayout() {
    return (
        <Stack >
            <Stack.Screen name="index" options={{title:'Welcome', headerShown:false}}/>
            <Stack.Screen name="login" options={{title:'Login',  headerShown:false}}/>
            <Stack.Screen name="register" options={{title:'Register'}}/>
         </Stack>
    )
}

export default _AuthLayout;