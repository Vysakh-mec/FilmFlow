import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const MovieListItem = ({data}) => {

  const [numberOfLines , setNumberOfLines] = useState(3)
  
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={data.image  ? {uri:data.image.medium} : require("../../assets/image/placeholderHorizontal.png")} style={styles.poster} />
        <Text numberOfLines={2} style={{color:"white",flexShrink:1}}>{data.name}</Text> 
      </View>
      {/* summary */}
      {
        data.summary && 

      <TouchableOpacity activeOpacity={0.9} onPress={() => setNumberOfLines( numberOfLines == 3 ? null : 3)}>
      <Text numberOfLines={numberOfLines} style={styles.summaryText}>{data.summary.replace(/<[^>]+>/g, '')}</Text>
      </TouchableOpacity>
      }
    </View>
  )
}

export default MovieListItem

const styles = StyleSheet.create({
    poster:{
        width:150,
        resizeMode:"contain",
        height:80
    },
    subContainer:{
        flexDirection:"row",
        alignItems:"center",
        columnGap:16,
    },
    container:{
        marginTop:16
    },
    summaryText:{
        color:"white",
        opacity:0.6,
        marginVertical:10,
        fontSize:14,
        fontWeight:"400"
    }
})