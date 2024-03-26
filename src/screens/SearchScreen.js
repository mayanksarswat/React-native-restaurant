import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SearchBar } from "./Searchbar";
import { useFetch } from "../hooks/useFetch";
import ListCards from "../screens/ListCards";

export const SearchScreen = (props) => {
  const { navigation } = props; //this prop is not used in this componenet but in child
  const [searchInput, setSearchInput] = useState("");
  const { data, isError, isLoading, onSubmit } = useFetch({ search: "pasta" });
  const filterByPrice = (price) => {
    return data.filter((item) => {
      return item.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchInput}
        onChange={setSearchInput}
        onSubmit={() => {
          onSubmit(searchInput);
        }}
      />
      {isError ? <Text>something went wrong !!</Text> : null}
      {isLoading ? (
        <AntDesign
          name="loading1"
          size={70}
          color="black"
          style={styles.loading}
        />
      ) : (
        <FlatList
          data={[
            { title: "Cost Effectitve", price: "$" },
            { title: "Bit Pricer", price: "$$" },
            { title: "Big Spender", price: "$$$" },
          ]}
          renderItem={({ item }) => {
            return (
              <ListCards title={item.title} data={filterByPrice(item.price)} />
            );
          }}
          keyExtractor={(item) => item.title}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    backgroundColor: "#E2EAEB",
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    top: "50%",
    left: "40%",
  },
});
