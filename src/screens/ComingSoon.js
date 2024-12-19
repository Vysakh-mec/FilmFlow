import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ComingSoon = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
    </SafeAreaView>
  )
}

export default ComingSoon

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        flex:1,
        backgroundColor:"black"
    },
    text:{
        color:"rgba(255,255,255,0.7)",
        textAlign:"center",
        fontSize:30
    }
})