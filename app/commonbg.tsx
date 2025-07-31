import { images } from '@/constants/images';
import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

type Props = {
  children: ReactNode;
};

const CommonBG: React.FC<Props> = ({ children }) => {
  return (
    <ImageBackground
          source={images.welcomeScreen}
          style={styles.background}
          resizeMode="cover"
        >
        <View style={styles.darkOverlay} />
        {children}
    </ImageBackground>
    )
};

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
  }
});

export default CommonBG;
