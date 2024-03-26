import React from "react";
import { View, Text, StyleSheet, FlatList, Image ,TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation"
const getFoodCard = (item,navigation) => {
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("RestaurantPage",{id:item.id,name:item.name})
    }}>
    <View style={styles.tile}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.rating} stars</Text>
    </View>
    </TouchableOpacity>
  );
};
const ListCards = (props) => {
  const { title, data,navigation} = props;
  //const navigation= useNavigation()
   if (!data.length) return null
  return (
    <View>
      <Text style={styles.title}>
        {title} - {data.length}
      </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return getFoodCard(item,navigation);
          }}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:15,
    marginBottom:10
  },
  tile: {
    marginLeft:15
  },
  name: { fontSize: 16, fontWeight: "bold" },
  image: {
    height: 200,
    width: 200,
    borderRadius: 30,
    marginBottom:5
  },
});
export default withNavigation(ListCards)