import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./Routes/NavBar";
import { Provider } from "react-redux";
import { store } from "./Redux/Slices/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <BottomNav />
      </Provider>
    </NavigationContainer>
  );
}