import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>To Do App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    paddingTop: 10,
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
