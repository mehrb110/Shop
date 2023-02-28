import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import DrawerNavigator from "./Screens/navigation/DrawerNavigator";

// redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import TodoApp from './Screens/TodoApp';
import BasketApp from './Screens/BasketApp';
const store = configureStore({
  reducer: rootReducer
})

export default function App() {
  //const mystate = useSelector((state) => state.change);
  //const dispatch = useDispatch();
  return (<>
    {/* <Provider>
      <View style={{ alignContent: 'center', alignItems: 'center', flex: 3, backgroundColor: '#2ff155' }}>
        <Parameter name="Ya Ali" />
      </View>
    </Provider> */}
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
      {/* <TodoApp /> */}
    </Provider>
  </>);
}

