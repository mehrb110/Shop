// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Vitrin from "../Vitrin";
import ItemInfo from "../ItemInfo";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Vitrin" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Vitrin" component={Vitrin} options={{ headerShown: false, headerTitle: '...ویترین', drawerLabel: 'ویترین' }} />
      <Stack.Screen name="ItemInfo" component={ItemInfo} options={{ headerShown: true, headerTitle: 'بازگشت' }} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

export { MainStackNavigator, ContactStackNavigator };
