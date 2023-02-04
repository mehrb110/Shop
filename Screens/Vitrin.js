import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, StyleSheet, TouchableOpacity, Image, Button, SafeAreaView, ScrollView, VirtualizedList, Pressable } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { FlatList } from 'react-native-gesture-handler';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { IconComponentProvider, IconButton, Icon } from "@react-native-material/core";
import axios from 'axios';
//import ItemInfo from './ItemInfo';
import {ProductList} from './Data/DataFile'
//const Stack = createNativeStackNavigator();
//import VitrinItem from './Component/VitrinItem';

const Vitrin = props => {
    const [modalVisible, setModalVisible] = useState(false);
    //const [ProductList, setProductList] = useState([{ "index": 1, "EntityItemTitle": "روسری نخی روسری نخی پاییز روسری نخی پاییز روسری نخی پاییز پاییزه", "ItemName": "نم نم استور", "Price": 1.310980000000000e+009, "Img": "https:\/\/testfrooshgah1100.loca.lt\/UploadCenter\/UploadedFiles\/1_0.jpg" }
    //    , { "index": 2, "EntityItemTitle": "روسری نخی قواره 140", "ItemName": "متفرقه", "Price": 1.088780000000000e+009, "Img": "https:\/\/testfrooshgah1100.loca.lt\/UploadCenter\/UploadedFiles\/2_0.jpg" }
    //    , { "index": 3, "EntityItemTitle": "شال وارداتی حاشیه گیپور", "ItemName": "نم نم استور", "Price": 1.388750000000000e+009, "Img": "https:\/\/testfrooshgah1100.loca.lt\/UploadCenter\/UploadedFiles\/3_0.jpg" }
    //    , { "index": 4, "EntityItemTitle": "شال نخی دستک شیشه ای", "ItemName": "نم نم استور", "Price": 1.422080000000000e+009, "Img": "https:\/\/testfrooshgah1100.loca.lt\/UploadCenter\/UploadedFiles\/4_0.jpg" }
    //    , { "index": 5, "EntityItemTitle": "شال نخی مجلسی", "ItemName": "نم نم استور", "Price": 1.166550000000000e+009, "Img": "https:\/\/testfrooshgah1100.loca.lt\/UploadCenter\/UploadedFiles\/5_0.jpg" }
    //    , { "index": 6, "EntityItemTitle": "روسری نخی قواره 140", "ItemName": "متفرقه", "Price": 1.088780000000000e+009, "Img": "https:\/\/testfrooshgah1100.loca.lt\/UploadCenter\/UploadedFiles\/2_0.jpg" }
    //    , { "index": 7, "EntityItemTitle": "شال وارداتی حاشیه گیپور", "ItemName": "نم نم استور", "Price": 1.388750000000000e+009, "Img": "https:\/\/testfrooshgah1100.loca.lt\/UploadCenter\/UploadedFiles\/3_0.jpg" }]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const width = Dimensions.get('window').width;
/*
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
    const url = 'https://testfrooshgah1100.loca.lt/api/Webhook';   // POST
    useEffect(() => {
        const fetchRecords = async () => {
            console.log(url);
            setError('');
            //setProductList([]);
            setLoaded(false);
            //setProductList(JSON.parse(datat));
            try {
                await axios({
                    url: url,
                    headers: { 'Content-Type': 'application/json; CHARSET=UTF-8' },
                    method: 'POST',
                    data: {
                        "ActionName": "product.ProductList",
                        "InputValue": "{ \"Owner\": \"2\", \"q\": \"\" }"
                    },
                }).then(function (response) {
                    //console.warn("response:  " + response.status);
                    console.warn("response:  " + response.data);
                    //console.log(response);
                    if (response.status === 200) {
                        var j = JSON.parse(response.data);
                        console.log("response json:  " + j[0].Img);
                        setProductList(j);
                        //console.log("response22:  " + ProductList);
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
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            } finally {
                setLoaded(true);
            }
        };
        //fetchRecords();
    }, []);
    */
    const renderItem = ({ item }) => {
        const backgroundColor = "#fff";  //item.id === selectedId ? "#666bc7" : "#00cc96";
        const color = 'black';  //item.id === selectedId ? 'black' : 'white';
        //const imgUrl = ({ i }) => { var u = './Images/' + i + '_0.jpg'; console.log(u); return require(u); }
        return (<>
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    //console.log(selectedId);
                    //console.log(item);
                    //console.log(item.index);
                    //index, EntityItemTitle, ItemName, Price, Img
                    props.navigation.push('ItemInfo', {
                        index: item.index,
                        EntityItemTitle: item.EntityItemTitle,
                        ItemName: item.ItemName,
                        Price: item.Price,
                        Img: item.Img,
                    });
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        </>);
    };

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.container, { margin: 5, padding: 5 }]}>
            <View style={{
                flexDirection: 'row-reverse',
                direction: 'rtl',
                borderColor: '#552211',
                borderWidth: 2,
                borderRadius: 6
            }}>
                <View style={[{ width: 110, height: 110, margin: 5, padding: 5, justifyContent: 'center' }]}>
                    {/* OK <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://0035-2-177-3-237.eu.ngrok.io/UploadCenter/UploadedFiles/3_0.jpg' }} alt={item.EntityItemTitle} /> */}
                    {/* NOK <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://MPC:1100/UploadCenter/UploadedFiles/3_0.jpg' }} alt={item.EntityItemTitle} /> */}
                    <Image style={styles.Img} source={{ uri: item.Img }} alt={item.EntityItemTitle} />
                </View>
                <View style={{ padding: 5, flex: 1, justifyContent: 'flex-start' }}>
                    <Text style={styles.heading}>
                        {item.EntityItemTitle}
                    </Text>
                    <Text>
                        {item.ItemName}
                    </Text>
                    <Text>
                        قیمت(ریال): {item.Price}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (<>
{/* 
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>

        <VitrinItem modalVisible /> */}
        <ScrollView horizontal={false} nestedScrollEnabled={true} >
            <ScrollView horizontal={true}>
                <View style={{ flex: 1, width: width }}>
                    <View style={{ height: width / 2 }}>
                        <Carousel
                            enableGestureSwipe={true}
                            panGestureHandlerProps={{
                                activeOffsetX: [-10, 10],
                            }}
                            loop
                            width={width}
                            height={width / 2}
                            autoPlay={true}
                            //data={[...new Array(6).keys()]}
                            data={ProductList}
                            scrollAnimationDuration={1000}
                            //onSnapToItem={(index) => console.log('current index:', index)}
                            //onSnapToItem={(index) => console.log('current index:', ProductList[index].Img)}
                            renderItem={({ index }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        borderWidth: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center', padding: 10, margin: 5
                                    }}
                                >
                                    <TouchableOpacity onPress={() => {
                                        props.navigation.push('ItemInfo', {
                                            index: ProductList[index].index,
                                            //EntityItemTitle: ProductList[index].EntityItemTitle,
                                            //ItemName: ProductList[index].ItemName,
                                            //Price: ProductList[index].Price,
                                            //Img: ProductList[index].Img,
                                        });
                                    }}
                                        style={[styles.container, { margin: 5, padding: 5 }]}                        >
                                        <Image style={{ textAlign: 'center', width: width / 2, height: (width / 2 - 50) }}
                                            onPress={() => props.navigation.navigate('Basket')}
                                            source={{ uri: ProductList[index].Img }} alt={ProductList[index].Img} />
                                        <Text style={{ textAlign: 'center', fontSize: 14 }}>
                                            {ProductList[index].EntityItemTitle}
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            )}
                        />
                    </View >
                    <FlatList
                        nestedScrollEnabled={true}
                        data={ProductList}
                        renderItem={renderItem}
                        keyExtractor={(key) => key.index}
                        extraData={selectedId}
                    >
                    </FlatList>
                </View>
            </ScrollView>
        </ScrollView>
    </>);
}

const styles = StyleSheet.create({
    container: {
        //display: "flex",
        //flexDirection: "vertical",
        //justifyContent: "center",
        alignItems: "center",
        //height: "100%",
        //textAlign: "center"
    },
    modal: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "100%",
        height: "100%"
    },
    modalContent: {
        flex: 1
    },
    modalHeader: {
        flexDirection: "row",
    },
    /* The header takes up all the vertical space not used by the close button. */
    modalHeaderContent: {
        flexGrow: 1,
    },
    modalHeaderCloseText: {
        textAlign: "center",
        paddingLeft: 5,
        paddingRight: 5
    },
    outsideModal: {
        backgroundColor: "rgba(1, 1, 1, 0.2)",
        flex: 1,
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        //backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    Img: {
        textAlign: 'center',
        width: 110,
        height: 110,
        //borderColor: "yellow",
        borderWidth: 1,
        borderRadius: 6,
    }
})

export default Vitrin;