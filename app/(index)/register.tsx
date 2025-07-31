import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from "react-native";

function Register (){

    const router = useRouter()
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Register</Text>
            <Button title='Go to login' onPress={() => router.push('/(index)/login')} />
        </View>
    )
}

export default Register;