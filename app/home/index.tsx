import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={images.bg} style={styles.img}/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:"100%", paddingBottom:10}}>
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-5"/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img : {
    width:'70%',
    height:'100%',
    resizeMode: 'cover'
  }
})
