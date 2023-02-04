import { useEffect, useState } from 'react';
import { Dimensions, Text, View, StyleSheet, TouchableOpacity, Image, Button, Alert } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import UseEffectAxios from './Component/UseEffectAxios'
const Stack = createNativeStackNavigator();
//const [dataList, setDataList] = useState(
export default function ItemInfo(props) {
    console.log('________________________' + Date.now());
    const baseUrl = 'https://testfrooshgah1100.loca.lt';
    const [jsonData, setJsonData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    //const [index, setIndex] = useState(0);
    const [entityItemTitle, setEntityItemTitle] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState("https://testfrooshgah1100.loca.lt/UploadCenter/UploadedFiles/1_0.jpg");

    const { index, EntityItemTitle, ItemName, Price, Img } = props.route.params;
    //setEntityItemTitle(props.route.params.EntityItemTitle)
    //setItemName(ItemName)
    //setPrice(Price)
    //setImg(Img)
    //setIndex(index)
    //const index1 = props.route.params.index;
    console.log('Date.now(): ' + Date.now());
    console.log(props.route.params.EntityItemTitle);
    console.log({ index });
    console.log(EntityItemTitle + 'ppp: ' + props.route.params);
    const width = Dimensions.get('window').width;
    const images = [
        "https://testfrooshgah1100.loca.lt/UploadCenter/UploadedFiles/1_0.jpg",
        "https://testfrooshgah1100.loca.lt/UploadCenter/UploadedFiles/2_0.jpg",
        "https://testfrooshgah1100.loca.lt/UploadCenter/UploadedFiles/3_0.jpg",
        "https://testfrooshgah1100.loca.lt/UploadCenter/UploadedFiles/4_0.jpg",
        "https://testfrooshgah1100.loca.lt/UploadCenter/UploadedFiles/5_0.jpg",
        "https://testfrooshgah1100.loca.lt/UploadCenter/UploadedFiles/6_0.jpg"
    ];

    //  lt --port 1100 --subdomain testfrooshgah1100
    //  lt --port 1100 -h http://localtunnel.me --subdomain testfrooshgah1100
    //npx expo update SDK 47
    //const url = 'http://localhost:1100/api/Webhook';
    //const url = 'http://MPC:1100/api/Webhook';
    //const url = 'http://localhost:5195/api/Webhook?ActionName=product.ProductsList&InputValue={%22Owner%22:%202,%20%22q%22:%20%22%22}';   //get
    //const url = 'http://192.168.1.5:1100/api/Webhook';   // POST
    //const url = 'https://87ac-2-177-90-123.eu.ngrok.io/api/Webhook';   // POST
    //const url = 'http://www.iransitenegar.ir//api/Webhook';      /// 0iCh3a8%
    //const url = 'https://localhost:7150/api/ApiHaspitals';
    //const url = 'https://reqres.in/api/users?page=2';  
    //const url = "https://c568-2-177-3-237.eu.ngrok.io/api/Webhook";
    //  lt --port 1100 -s testfrooshgah1100 -h
    //const url = 'https://testfrooshgah1100.loca.lt/api/Webhook';   // POST
    const url = 'https://localhost:44305/api/Webhook';
    const data = {
        "ActionName": "product.ProductList",
        "InputValue": "{ \"Owner\": \"2\", \"Id\": \"" + index + "\" , \"q\": \"\"}"
    };
    //console.log(url, data);
    useEffect(() => {
        const setData = () => {
            setEntityItemTitle(props.route.params.EntityItemTitle);
            setItemName(ItemName);
            setPrice(Price);
            setImg(Img);
        };
        setData();
    }, []);
    useEffect(() => {
        const fetchRecords = async () => {
            setError('');
            setIsLoading(true);
            //setDataList(JSON.parse(datat));
            try {
                await axios({
                    url: url,
                    headers: { 'Content-Type': 'application/json; CHARSET=UTF-8' },
                    method: 'POST',
                    data: data,
                }).then(function (response) {
                    console.log("response:  " + response.status);
                    //console.log("response.data:  " + response.data);
                    //console.log(response);        /// کل دیتا سیستمی هم
                    if (response.status === 200) {
                        //setJsonData(response.data);
                        //const { index, EntityItemTitle, ItemName, Price, Img } = Object.values(JSON.parse(response.data))[0]
                        setEntityItemTitle(Object.values(JSON.parse(response.data))[0].EntityItemTitle)
                        setItemName(Object.values(JSON.parse(response.data))[0].ItemName)
                        setPrice(Object.values(JSON.parse(response.data))[0].Price)
                        setImg(Object.values(JSON.parse(response.data))[0].Img)
                        setIndex(Object.values(JSON.parse(response.data))[0].index)
                        //console.log("index:  " + index);
                        //console.log("Img:  " + Img);
                        //console.log("EntityItemTitle:  " + EntityItemTitle);
                    }
                    else {
                        setError("Failed to get data " + response.status);
                    }
                }).catch(function (error) {
                    setError('error in fetch axios: ' + error);
                });
            } catch (error) {
                if (error.response) {
                    // The request was made, but the server responded with a status code
                    // that falls out of the range of 2xx
                    setError('error response: ' + error.response.status + error.response.headers + ' ' + error.response.headers);
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            } finally {
                setIsLoading(false);
            }
        };
        //fetchRecords();
    }, []);

    return (<>
        <View style={{ alignItems: 'center' }}>
            {isLoading && <Image style={styles.Img} source={require('../assets/Loading8.gif')} />}
            {!isLoading && <Image style={styles.Img} source={{ uri: img }} alt={entityItemTitle} />}
        </View>
        <View style={{ alignContent: 'flex-start', padding: 5, margin: 5 }}>
            <Text>عنوان: {entityItemTitle}</Text>
            <Text>برند: {itemName}</Text>
            <Text>قیمت: {price}</Text>
        </View>
        <View>
            <Button onPress={() => props.navigation.navigate('Basket', { index: 1 })}
                title="اضافه کردن به سبد index : 110 "
                color="#841584"
                accessibilityLabel=" ...  اضافه کردن به سبد "
            />
        </View>
        <View>
            <Button onPress={() => Alert('sssss')}
                title="اضافه کردن به سبد"
                color="#841584"
                accessibilityLabel=" ...  اضافه کردن به سبد "
            />
        </View>
        <View style={{ alignItems: 'center' }}>
            {!isLoading && <Text> {error} </Text>}
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        height: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperStyle: {
        minHeight: 128,
    },
    Img: {
        textAlign: 'center',
        width: 110,
        height: 110,
        //borderColor: "yellow",
        borderWidth: 1,
        borderRadius: 6,
    }
});