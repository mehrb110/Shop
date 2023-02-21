import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import DrawerNavigator from "./Screens/navigation/DrawerNavigator";
import Parameter from './Sample/Parameter';

import { useSelector, useDispatch, Provider } from 'react-redux';
import { combineReducers } from 'redux';

export default function App() {
  const mystate = useSelector((state) => state.change);
    const dispatch = useDispatch();
  return (<>
    <Provider>
      <View style={{ alignContent: 'center', alignItems: 'center', flex: 3, backgroundColor: '#2ff155' }}>
        <Parameter name="Ya Ali" />
      </View>
    </Provider>
    <View style={{ flex: 1, backgroundColor: "#efeaad" }}>
      <Text> App </Text>
    </View>
     <NavigationContainer>
       <DrawerNavigator />
     </NavigationContainer>
    <StatusBar style="auto" />
  </>);
}

