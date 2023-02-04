import React from "react";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';

import Profile from "../Profile";
import ContactUs from "../ContactUs";
import Faq from "../Faq";
import Help from "../Help";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="TabNavigator" drawerType="slide"
      screenOptions={{
        headerLeft: false,
        headerTitleAlign: 'center',
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#eae298',
          headerLeft: false,
          width: 240,
          color: '#e60f4f'
        },
        headerRight: () => <DrawerToggleButton />
      }}>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{
        headerTitle: '...ویترین', drawerLabel: 'ویترین'
        , drawerIcon: ({ focused, size }) => (
          <Ionicons
            name="card"
            size={size}
            color={focused ? '#f55858' : '#31f834'}
           // style={{    position: "absolute",right: 10,}}
          />
        )
       }} 
      />
      <Drawer.Screen name="Profile" component={Profile} options={{ headerTitle: 'پرونده کاربر', drawerLabel: 'پرونده کاربر' }} />
      <Drawer.Screen name="ContactUs" component={ContactUs} options={{ headerTitle: 'ارتباط با ما', drawerLabel: 'ارتباط با ما' }} />
      <Drawer.Screen name="Faq" component={Faq} options={{ headerTitle: 'سوالات متداول', drawerLabel: 'سوالات متداول' }} />
      <Drawer.Screen name="Help" component={Help} options={{ headerTitle: 'راهنمایی', drawerLabel: 'راهنمایی' }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;