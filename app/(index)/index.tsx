import { images } from '@/constants/images';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Index (){
    const router = useRouter()
    return(
    <ImageBackground
      source={images.welcomeScreen}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.darkOverlay} />

      <View style={styles.content} className='mt-5'>
        <Image style={styles.img} source={images.logo} className=" mx-auto mt-auto"/>
      </View>
      <View style={styles.content}>
        <TouchableOpacity className='px-8 mt-5 rounded py-4' style={styles.btn} onPress={() => router.push('/(index)/login')}>
          <Text style={styles.btnTxt}>BEGIN YOUR JOURNEY</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    )
}

export default Index;


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.21)', // <- Adjust opacity here (0 = transparent, 1 = solid)
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    backgroundColor:"#ffffff9d",
    position: 'relative',
    top: 75,
    borderRadius:200,
    width:'50%',
    height: '46%',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
  },
  btn : {
    backgroundColor: '#C6011F',
    borderRadius: 100,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
  },
  btnTxt : {
    color: '#ffffff',
    fontWeight:'bold'
  }
});