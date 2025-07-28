import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function Details() {
    const {id} = useLocalSearchParams()
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    
})
