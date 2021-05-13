import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

const image = require("./assets/todo-social.jpg");

const App = () => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <Header />
      <View style={{ backgroundColor: "rgba(0,255,0,0.3)" }}>
        <AddTodo />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default App;
