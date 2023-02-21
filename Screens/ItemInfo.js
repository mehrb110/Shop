import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function ItemInfo(props) {
    const { index, EntityItemTitle, ItemName, Price, Img } = props.route.params;
    return (<View>
        <View style={{ alignItems: 'center', padding:10, margin: 5 }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: Img }} alt={EntityItemTitle} />
        </View>

        {/* 
        <Text>index: {JSON.stringify(index)}</Text>
        <Text>Img: {JSON.stringify(Img)}</Text>
        */}
        <View style={{ alignContent: 'flex-start', padding: 5, margin: 5 }}>
            <Text>{JSON.stringify(EntityItemTitle)}</Text>
            <Text>{JSON.stringify(ItemName)}</Text>
            <Text>قیمت: {JSON.stringify(Price)}</Text>
        </View>
        <View>
        <Button onPress={() => props.navigation.navigate('Basket')}
            title="اضافه کردن به سبد"
            color="#841584"
            accessibilityLabel=" ...  اضافه کردن به سبد "
        /> 
        </View>
    </View>)
}