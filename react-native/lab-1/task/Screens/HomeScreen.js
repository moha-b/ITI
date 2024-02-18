import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useSelector } from "react-redux";
import NoTasksScreen from "./NoTasksScreen";
import Todo from "../Components/Todo";
import BottomSheet from "../Components/BottomSheet";
import { styles } from "../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const HomeScreen = () => {
  const { todos } = useSelector((state) => state.todo);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {todos.length > 0 ? <Todo todos={todos} /> : <NoTasksScreen />}

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons name="lead-pencil" size={27} color="orange" />
      </TouchableOpacity>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <BottomSheet setModalVisible={setModalVisible} />
        </Modal>
      </View>
    </View>
  );
};

export default HomeScreen;
