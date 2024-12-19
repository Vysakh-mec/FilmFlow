import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import StarIcon from "../../assets/icons/StarIcon.svg"
import MovieListItem from '../components/MovieListItem'


const DetailsScreen = () => {

  const route = useRoute()
  const [numberOfLines , setNumberOfLines] = useState(3)
  const [loading , setLoading] = useState(false)
  const [episodeData , setEpisodeData] = useState([]) 
  const data = route.params

  useEffect(() => {
    if (data._links.previousepisode) {
      fetchData(data._links.previousepisode)
    }
    
    if (data._links.nextepisode) {
      fetchData(data._links.nextepisode)
    }
    
  },[data])

  const fetchData = (data) => {
    setLoading(true)
    fetch(data.href).then((response) => response.json()).then(data => {
      setEpisodeData((prevState) => [...prevState,data])
      setLoading(false)
    }).catch(e => {
      Alert.alert("Something went wrong" , e.message)
      setLoading(false)
    }) 
  }  
  

  return (
    <ScrollView style={styles.container}>
      {
        data.image ? 
        <Image source={{ uri: data.image.original }} style={styles.poster} />
        :
        <View style={[styles.poster,{justifyContent:"center"}]}>
        <Text style={{color:"white",fontSize:16,textAlign:"center"}}>
          No Thumbnail Available
        </Text>
        </View>
      }
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>{data.name}</Text>
        <View style={styles.subTitleContainer}>
          <Text style={styles.dateText}>{data.premiered?.slice(0, 4)}</Text>
          {
            data.rating.average && 
          <View style={styles.subTitleContainer}>
          <StarIcon fill={"#FFD700"} />
          <Text style={styles.dateText}>{data.rating.average}/10</Text>
          </View>
          }
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "rgba(255,255,255,0.2)" }]}>
          <Text style={[styles.buttonText, { color: "white" }]}>Download</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={() => setNumberOfLines(numberOfLines == 3 ? null : 3)} style={styles.detailsContainer}>
          <Text numberOfLines={numberOfLines} style={styles.summaryText}>{data.summary?.replace(/<[^>]+>/g, '')}</Text>
          <Text style={styles.languageText}>Language : {data.language}</Text>
          <Text style={styles.languageText}>Genres : {data.genres.join(" , ")}</Text>
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>Episode</Text>
        {
          loading ?
          <ActivityIndicator color={"red"} size={20} />
          :
          <>
          {
            episodeData.map((item ,index) => <MovieListItem key={index} data={item} />)
          }
          </>
        }
          {!episodeData.length &&
            <Text style={{color:"white",textAlign:"center",fontSize:16,marginVertical:20}}>No Episodes</Text>
          }
      </View>
    </ScrollView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  poster: {
    resizeMode: "contain",
    aspectRatio: 16 / 9,
    width:"100%"
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white"
  },
  detailsContainer: {
    paddingHorizontal: 16,
    marginVertical: 20,
    rowGap: 10
  },
  dateText: {
    color: "white",
    fontSize: 13,
    fontWeight: "500"
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
    borderRadius: 5
  },
  buttonText: {
    fontWeight: "500",
    textAlign: "center"
  },
  subTitleContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:1,
    columnGap:10
  },
  summaryText:{
    color:"white",
    fontSize:14,
    textAlign:"justify",
  },
  languageText:{
    color:"white",
    opacity:0.6
  }

})