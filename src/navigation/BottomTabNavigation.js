import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from "../screens/HomeScreen"
import SearchScreen from "../screens/SearchScreen"
import HomeIcon from "../../assets/icons/HomeIcon.svg"
import SearchIcon from "../../assets/icons/SearchIcon.svg"
import ComingSoonIcon from "../../assets/icons/ComingSoonIcon.svg"
import ComingSoonIconActive from "../../assets/icons/ComingSoonIconActive.svg"
import DownloadIcon from "../../assets/icons/DownloadIcon.svg"
import MoreIcon from "../../assets/icons/MoreIcon.svg"
import MoreIconActive from "../../assets/icons/MoreIconActive.svg"
import ComingSoon from '../screens/ComingSoon'





const BottomTabNavigation = () => {

    const Tab = createBottomTabNavigator()
    
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{
            backgroundColor:"#121212"
        },
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:"#8C8787",
        tabBarHideOnKeyboard:true
    }}>
        <Tab.Screen name='home' component={HomeScreen} options={{
            tabBarLabel:"Home",
            tabBarIcon:({color}) => <HomeIcon  stroke={color} />
        }} />
        <Tab.Screen name='search' component={SearchScreen} options={{
            tabBarLabel:"Search",
            tabBarIcon:({color}) => <SearchIcon stroke={color} />
        }} />
        <Tab.Screen name='comingSoon' component={ComingSoon} options={{
            tabBarLabel:"Coming Soon",
            tabBarIcon:({focused}) => focused ? <ComingSoonIconActive />  : <ComingSoonIcon  />
        }} />
        <Tab.Screen name='downloads' component={ComingSoon} options={{
            tabBarLabel:"Downloads",
            tabBarIcon:({color}) => <DownloadIcon fill={color} />
        }} />
        <Tab.Screen name='more' component={ComingSoon}  options={{
            tabBarLabel:"More",
            tabBarIcon:({focused}) => focused ? <MoreIconActive /> :   <MoreIcon />
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
