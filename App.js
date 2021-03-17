import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: "10%",
        flex: 1,
        backgroundColor: "whitesmoke",
      }}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.textHeader}>TODO-list</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputText}
            placeholder="Create a TODO"
            onChangeText={(text) => setText(text)}
          />
          <Button
            style={styles.addButton}
            title="Add"
            onPress={() => Alert.alert("Add button pressed!")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "15%",
  },
  textHeader: {
    fontSize: 25,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  inputText: {
    backgroundColor: "white",
    width: 280,
    height: 50,
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "grey",
  },
});
