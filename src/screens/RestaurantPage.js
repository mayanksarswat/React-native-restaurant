import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
export const RestaurantPage = ({ route, navigation }) => {
  const id = navigation.getParam("id");
  const [menu, setMenu] = useState(null);
  const getRestaurantData = async () => {
    try {
      const response = await yelp.get(`/${id}`);
      setMenu(response.data);
    } catch (err) {}
  };
  useEffect(() => {
   //git navigation.setOptions({title:"hhj"})
    getRestaurantData(id);
  }, []);
  if (!menu) {
    return null;
  }
  return (
    <View style={{marginLeft:10}}>
    <Text style={styles.review}>Photos</Text>
      <FlatList
        data={menu?.photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  review:{
  fontSize:30,
  marginTop:20,
  marginLeft:10,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius:20,
    marginRight:10,
    marginTop:5
  },
});
