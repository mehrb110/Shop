import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { IconComponentProvider, IconButton, Icon } from "@react-native-material/core";
import axios from 'axios';
import {ProductList} from './../Data/DataFile'
//import ItemInfo from './ItemInfo';

//const Stack = createNativeStackNavigator();

const Vitrin = props => {
   const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

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
            //setDataList([]);
            setLoaded(false);
            //setDataList(JSON.parse(datat));
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
                        setDataList(j);
                        //console.log("response22:  " + dataList);
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

    const renderItem = ({ item }) => {
        const backgroundColor = "#fff";  //item.id === selectedId ? "#666bc7" : "#00cc96";
        const color = 'black';  //item.id === selectedId ? 'black' : 'white';
        //const imgUrl = ({ i }) => { var u = './Images/' + i + '_0.jpg'; console.log(u); return require(u); }
        return (<>
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    console.log(selectedId);
                    console.log(item);
                    console.log(item.index);
                    //props.navigation.navigate('ItemInfo');
                    props.navigation.navigate('ItemInfo', {
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
        <FlatList
            data={ProductList}
            renderItem={renderItem}
            keyExtractor={(key) => key.index}
            extraData={selectedId}
        >
        </FlatList>
    </>
    );
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