import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const SearchBar = (props) => {
  const { value, onChange, onSubmit } = props;

  return (
    <View style={styles.container}>
      <FontAwesome style={styles.icon} name="search" size={40} color="black" />
      <TextInput
        style={styles.searchInput}
        value={value}
        onChangeText={(val) => {
          onChange(val);
        }}
        placeholder="Search food"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => {
          onSubmit();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C0C0C0",
    height: 60,
    margin: 20,
    flexDirection: "row",
    borderRadius: 40,
  },
  icon: {
    marginLeft: 25,
    alignSelf: "center",
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 30,
    color: "#2C3539",
    flex: 1,
    marginRight: 20,
    marginVertical: 5,
  },
});
