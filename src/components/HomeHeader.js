import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SearchIcon from "../../assets/icons/SearchIcon.svg"
import { useNavigation } from '@react-navigation/native'

const HomeHeader = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icon.png")} style={styles.logo} />
      <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate("search")}>
        <SearchIcon />
        <Text style={{color:"white"}}>Search</Text>
      </TouchableOpacity>
      <Image source={{uri:"https://th.bing.com/th/id/OIP.aiDGdmdUAX_iNgRMERipyQHaHF?rs=1&pid=ImgDetMain"}} style={styles.profilePic} />
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  logo: {
    height: 60,
    width: 40,
    resizeMode: "contain",
  },
  container: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    columnGap:16,
    paddingHorizontal: 16
  },
  searchBar:{
    backgroundColor:"white",
    flexDirection:"row",
    flex:1,
    paddingVertical:8,
    columnGap:10,
    paddingHorizontal:10,
    opacity:0.3  ,
    borderRadius:5,
  },
  profilePic:{
    height:30,
    aspectRatio:1/1,
    borderRadius:2,
    resizeMode:"cover"
  }
})