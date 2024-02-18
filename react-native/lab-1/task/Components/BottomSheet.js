import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { addTodo } from "../Redux/Slices/todoSlice";
import { unCompleteTodoAdd } from "../Redux/Slices/uncompletedSlice";
import { styles } from "../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import CustomAlert from "../Components/Alert";

const BottomSheet = ({ setModalVisible }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [alertVisible, setAlertVisible] = useState(false);
  const [error, setError] = useState("");
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleTimeChange = (event, time) => {
    setShowTimePicker(false);
    if (time) {
      setSelectedTime(time);
    }
  };

  const handleTitleInput = (text) => {
    console.log(text);
    setTitle(text);
  };

  const handleDescriptionInput = (text) => {
    setDescription(text);
  };

  const handleAddTask = () => {
    if (!title.trim()) {
      setAlertVisible(true);
      setError("Title Can't be Empty");
      return;
    }

    if (!description.trim()) {
      setAlertVisible(true);
      setError("Description Can't be Empty");
      return;
    }

    const todoExit = todos
      .map((todo) => todo.title.toLowerCase())
      .includes(title.toLowerCase());

    if (!todoExit) {
      const todoObject = {
        id: Date.now(),
        title,
        description,
        selectedTime: selectedTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        selectedDate: selectedDate.toLocaleDateString([], {
          weekday: "short",
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      dispatch(addTodo(todoObject));
      dispatch(unCompleteTodoAdd(todoObject));
      setModalVisible(false);
    } else {
      setError("Task Already Exist");
      setAlertVisible(true);
    }

    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.bottomSheet}>
      <CustomAlert
        visible={alertVisible}
        title="Error❗"
        message={error}
        onCancel={() => setModalVisible(false)}
        onConfirm={() => setAlertVisible(false)}
        showCancel={true}
        showConfirm={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={handleTitleInput}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={handleDescriptionInput}
        value={description}
      />
      <TextInput
        style={styles.input}
        placeholder="Task Date"
        onFocus={() => setShowDatePicker(true)}
        value={selectedDate.toLocaleDateString()}
      />
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Task Time"
        onFocus={() => setShowTimePicker(true)}
        value={selectedTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      />
      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}
      {/* <Text style={styles.textError}>{error}</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleAddTask();
        }}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheet;
