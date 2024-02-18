import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "../utils/Constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  flatList: {
    width: "100%",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "indigo",
    marginHorizontal: 80,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 70,
  },
  buttonText: {
    color: "white",
  },
  text: {
    fontSize: 27,
    fontWeight: "600",
    color: "orange",
    margin: 15,
  },
  textTodo: {
    fontSize: 18,
    color: "indigo",
    fontWeight: "500",
  },
  bottomSheet: {
    position: "absolute",
    bottom: 50,
    height: 340,
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3F4080",
  },
  input: {
    height: screenHeight / 15,
    margin: 7,
    width: screenWidth - 20,
    borderWidth: 1.5,
    borderColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 100,
    height: 40,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "700",
  },
  flatList: {
    width: "100%",
  },
  item: {
    // backgroundColor: "indigo",
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    height: 110,
  },
  timeView: {
    backgroundColor: "orange",
    borderRadius: 50,
    height: 90,
    width: 90,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconsView: {
    flexDirection: "row",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-evenly",
  },
  icon: {
    margin: 10,
    fontSize: 25,
    color: "orange",
  },

  floatingButton: {
    position: "absolute",
    bottom: 10,
    right: 13,
    backgroundColor: "#3F4080",
    borderRadius: 20,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  stackNav: {
    backgroundColor: "#3F4080",
  },
  stackNavText: {
    fontSize: 20,
    color: "black",
  },
  screenNoTasks: {
    width: screenWidth,
    height: screenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  noTasksDesign: {
    height: 8,
    width: 75,
    marginBottom: 10,
    backgroundColor: "grey",
  },
  textNoTasks: {
    fontSize: 17,
    fontWeight: "bold",
    color: "grey",
    margin: 15,
  },
  containerAlert: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentAlert: {
    backgroundColor: "#3F4080",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  titleAlert: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
    fontWeight: "bold",
  },
  messageAlert: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
    fontWeight: "bold",
  },
  buttonsContainerAlert: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonAlert: {
    padding: 10,
    borderRadius: 5,
    minWidth: 80,
    alignItems: "center",
  },
  cancelButtonAlert: {
    backgroundColor: "red",
  },
  okButtonAlert: {
    backgroundColor: "green",
  },
  buttonTextAlert: {
    color: "white",
    fontWeight: "bold",
  },
});
