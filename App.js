import { StatusBar } from 'expo-status-bar';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"

import { StyleSheet, Text, View } from 'react-native';
import {SearchScreen} from "./src/screens/SearchScreen"
import {RestaurantPage} from "./src/screens/RestaurantPage"

const navigator = createStackNavigator({
  SeachScreen : SearchScreen,
  RestaurantPage:RestaurantPage},
  {
    initialRouteName:"SeachScreen",
    defaultNavigationOptions:{
      title:"Search"
       
    }
  
  }
)

//default react content produced by createStackNavigator
export default createAppContainer(navigator)