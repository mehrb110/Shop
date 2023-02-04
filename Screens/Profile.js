import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, IconComponentProvider, IconButton, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

export default function Profile(navigation) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>پروفایل!
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name="home" size={24} color="red" />
            </IconComponentProvider>
          </Text>
          <View style={styles.container}>
            <Text>پروفابل کاربر</Text>
            <Text>پروفابل کاربر</Text>
            <StatusBar style="light" />
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      height: 25,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });