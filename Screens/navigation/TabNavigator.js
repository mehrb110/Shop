// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Basket from "../Basket";
//import Test from "../Test";
import { MainStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="MainStackNavigator"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'MainStackNavigator') {
            iconName = focused
              ? 'shopping'
              : 'shopping-outline';
          } else if (route.name === 'Basket') {
            iconName = focused
              ? 'basket'
              : 'basket-check';
          } return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        headerTitleAlign: 'center',
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="MainStackNavigator" component={MainStackNavigator} options={{ tabBarLabel: 'ویترین', headerShown: false, headerTitle: 'ویترین' }} />
      {/* <Tab.Screen name="Test" component={Test} options={{ tabBarLabel: 'تست', headerTitle: 'تست', headerStyle: { backgroundColor: '#cdf9ea' }, headerTitleStyle: { color: '#225599' } }} /> */}
      <Tab.Screen name="Basket" component={Basket} options={{ tabBarLabel: 'سبد خرید', headerTitle: 'سبد خرید', headerStyle: { backgroundColor: '#cdf9ea' }, headerTitleStyle: { color: '#225599' } }} />
    </Tab.Navigator>
  );
};

export default TabNavigator