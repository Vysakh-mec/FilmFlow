import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '../components/HomeHeader'
import MovieItem from '../components/MovieItem'

const HomeScreen = () => {

  const [movieData, setMovieData] = useState([])
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://api.tvmaze.com/search/shows?q=all").then((response) => response.json()).then((data) => {
      setMovieData(data)
      setLoading(false)
    }
    ).catch((e) => {
      Alert.alert("Something went wrong", e.message)
      setLoading(false)
    })
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      {
        loading ? 
        <View style={{flex:1,justifyContent:"center"}}>
          <ActivityIndicator size={40} color={"red"}/>
        </View>
        :
        <FlatList
        numColumns={3}
        data={movieData}
        renderItem={({item}) => <MovieItem data={item} />}
        style={styles.listContainer}
        keyExtractor={(item, index) => index}
        columnWrapperStyle={styles.columnWrapper}
        />
      }

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1
  },
  listContainer: {
    paddingHorizontal: 20
  },
  columnWrapper: { justifyContent: "space-between", marginBottom: 20 }
})