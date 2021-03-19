import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Todos from "./components/todos";

export default function App() {
  const [text, setText] = useState("");
  const [total, setTotal] = useState(0);
  const [todos, setTodos] = useState([]);

  const deleteTodoHandler = (item) => {
    setTodos((prev) => [
      ...prev.filter((val) => Number(val.id) !== Number(item.id)),
    ]);
    setTotal(total - 1);
  };

  const setDoneHandler = (item) => {
    setTodos((prev) => [
      ...prev.map((val) => {
        if (Number(val.id) === Number(item.id)) {
          return { ...val, isDone: !val.isDone };
        } else return val;
      }),
    ]);
  };

  const addTodoHandler = () => {
    if (text.length <= 1) {
      Alert.alert("Todo can't be empty!");
    } else {
      setTodos((prev) => [
        ...prev,
        { id: String(total + Math.random()), task: text, isDone: false },
      ]);
      setTotal(total + 1);
      setText("");
    }
    console.log(todos);
  };

  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.textHeader}>TODO-list</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputText}
            placeholder="Create a TODO"
            onChangeText={(val) => setText(val)}
            value={text}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTodoHandler}>
            <FontAwesomeIcon color="white" icon={faPlus} />
          </TouchableOpacity>
        </View>
      </View>
      <Todos
        data={todos}
        setDone={setDoneHandler}
        setDelete={deleteTodoHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
  },
  container: {
    height: "15%",
    height: 100,
  },
  textHeader: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  inputText: {
    backgroundColor: "white",
    width: "80%",
    padding: 5,
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
    padding: 10,
    backgroundColor: "#0e9aeb",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
  },
});
