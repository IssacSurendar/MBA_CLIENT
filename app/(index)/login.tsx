import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from "react-native";
import CommonBG from '../commonBg';

function Login (){

    const router = useRouter()
    return(
        <CommonBG>
            <View>
                <Text>Login</Text>
                <Text>Mobile</Text>
                
                <Button title='Go to register' onPress={() => router.push('/(index)/register')} />
            </View>
        </CommonBG>
    )
}

export default Login;