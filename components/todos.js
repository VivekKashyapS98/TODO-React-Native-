import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  TouchableOpacity,
  View,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";

const Item = ({ item, onPress, style, setDelete }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text>{item.task}</Text>
    <TouchableOpacity onPress={setDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </TouchableOpacity>
  </TouchableOpacity>
);

export default function Todos(props) {
  const renderItem = ({ item }) => {
    const border = item.isDone ? "#52fc03" : "#23045e";

    return (
      <Item
        item={item}
        onPress={() => props.setDone(item)}
        setDelete={() => props.setDelete(item)}
        style={{
          ...styles.todos,
          borderColor: border,
          borderWidth: 1,
          borderRadius: 5,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 0, marginBottom: 10 }}
        keyExtractor={(item) => item.id}
        data={props.data}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todos: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginTop: 20,
  },
});
