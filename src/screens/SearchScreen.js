import { Alert, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchIcon from "../../assets/icons/SearchIcon.svg"
import { SafeAreaView } from 'react-native-safe-area-context'
import MovieItem from '../components/MovieItem'

const SearchScreen = () => {

  const [searchedData, setSearchedData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (searchTerm.length > 0) {
      fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`).then((response) => response.json()).then((data) => {
        setSearchedData(data)
      }).catch((e) => {
        Alert.alert("Something went wrong", e.message)
      })
    } else {
      setSearchedData([])
    }
  }, [searchTerm])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <TextInput value={searchTerm} onChangeText={(text) => setSearchTerm(text)} placeholderTextColor={"rgba(255,255,255,0.7)"} placeholder='Search for show, movie' style={styles.input} />
      </View>

      {
        searchedData.length ?  

        <FlatList
          numColumns={3}
          data={searchedData}
          renderItem={({ item }) => <MovieItem data={item} />}
          keyExtractor={(item, index) => index}
          columnWrapperStyle={styles.columnWrapper}
          style={styles.listContainer}
        />
        : null
      }

      {
        searchTerm.length && !searchedData.length ?
        <View style={{justifyContent:"center",flex:1}}>
          <Text style={{ color: "white" , textAlign:"center", fontSize:30,opacity:0.7 }}>No Data Found</Text>
        </View>
        : null
      }

    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  searchContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "rgba(255,255,255,0.2)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20
  },
  input: {
    paddingVertical: 10,
    color: "white",
    flex: 1
  }, listContainer: {
    paddingHorizontal: 20
  },
  columnWrapper: { justifyContent: "space-between", marginBottom: 20 }
})