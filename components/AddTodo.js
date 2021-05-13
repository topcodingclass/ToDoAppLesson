import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddTodo = () => {
  return (
    <View
      style={{ flexDirection: "row", marginVertical: 5, marginHorizontal: 10 }}
    >
      <TextInput
        style={{ backgroundColor: "#eaeaea", height: 50, flex: 1 }}
        placeholder="Add new todo"
      />
      <View
        style={{
          backgroundColor: "#eaeaea",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Ionicons name="md-add" size={30} style={{ color: "red" }} />
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({});
