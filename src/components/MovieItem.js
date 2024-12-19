import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MovieItem = ({data}) => {

    const navigation = useNavigation()
    
  return (
    <TouchableOpacity onPress={() => navigation.navigate("mv-detail",data.show)} activeOpacity={0.7} style={styles.container}>
      <Image  style={styles.thumbnail} source={data.show.image ? {uri: data.show.image.medium } : require("../../assets/image/placeholder.png")}  />
      <View>
        <Text style={styles.titleText}>{data.show.name}</Text>
        <Text numberOfLines={3} style={styles.summaryText}>{data.show.summary?.replace(/<[^>]+>/g, '')}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MovieItem

const styles = StyleSheet.create({
    thumbnail:{
        height:160,
        width:110
    },
    titleText:{
        color:"white",
        textAlign:"center",
        lineHeight:30,
        fontSize:16,
        fontWeight:"600"
    },
    summaryText:{
        color:"gray",
        textAlign:"center",
        fontSize:12,
        fontWeight:"400"
    },
    container:{
        maxWidth:110,
        overflow:"hidden"
    }
})
