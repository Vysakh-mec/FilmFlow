import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

    const navigation = useNavigation()
    
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("tab")
        },3000)
    },[])
    
  return (
    <View style={styles.container}>
        <StatusBar style='light' />
      <Image source={require("../../assets/splashLogo.png")} style={styles.Logo}  />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },
    Logo:{
        height:80,
        resizeMode:"contain"
    }
})