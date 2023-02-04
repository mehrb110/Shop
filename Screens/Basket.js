import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function Basket(props) {
    const [index, setIndex] = useState(0);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    //setError('');
    console.log('____________________' + Date.now());
    console.log(props.route.params.index);
    const resiveApi = async () => {
        try {
            const resive = await axios.get('https://192.168.1.4/api/Webhook?a=product.ProductList&v={%22Owner%22:2,%22Id%22:2,%22q%22:%22%22}'
                , {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        'Accept': "application/json",
                    }
                }
            );
            console.log('gggggg: ' + resive.data);
        } catch (error) {
            console.log('errr11: ' + error);
        }
    }
    useEffect(() => {
        resiveApi();
    }, []);

    useEffect(() => {
        const getApi = async () => {
            console.log('dddd');
            setIndex(props.route.params.index);
            setError('');
            setIsLoading(true);
            try {
                await axios({
                    //url: 'https://testfrooshgah1100/api/Webhook?a=product.ProductList&v={%20%22Owner%22:%20%222%22,%20%22Id%22:%20%222%22%20,%20%22q%22:%20%22%22}',
                    url: 'https://192.168.1.4:443/api/Webhook?a=product.ProductList&v={"Owner":2,"Id":2,"q":""}',
                    headers: { 'Content-Type': 'application/json; CHARSET=UTF-8' },
                    method: 'POST',
                    //data: {
                    //    "ActionName": "product.ProductList",
                    //    "InputValue": "{ \"Owner\": \"2\", \"Id\": \"" + index + "\" , \"q\": \"\"}"
                    //},
                }).then(function (response) {
                    console.log("response: 200 " + response.status);
                    //console.log("response.data:  " + response.data);
                    //console.log(response);        /// کل دیتا سیستمی هم
                    if (response.status === 200) {
                        setError(response.data);
                        console.log("index:  " + index);
                        //const { index, EntityItemTitle, ItemName, Price, Img } = Object.values(JSON.parse(response.data))[0]
                        //setEntityItemTitle(Object.values(JSON.parse(response.data))[0].EntityItemTitle)
                        //setItemName(Object.values(JSON.parse(response.data))[0].ItemName)
                        //setPrice(Object.values(JSON.parse(response.data))[0].Price)
                        //setImg(Object.values(JSON.parse(response.data))[0].Img)
                        //setIndex(Object.values(JSON.parse(response.data))[0].index)
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
                console.log('finally');
                setIsLoading(false);
            }
        };
        getApi();
    }, []);
    return (<>
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <ScrollView style={{ ackgroundColor: '#aa33ee' }}>
                <View style={{ flexDirection: 'row-reverse', backgroundColor: '#7fffd4' }}>
                    <View style={{ backgroundColor: '#44ff66', justifyContent: 'center', alignItems: 'center', height: 102, width: 102, padding: 5, margin: 5 }}>
                        <Text>
                            Photo graph: {index}
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#ffddcc', flex: 1, justifyContent: 'flex-start', alignItems: 'stretch', padding: 5, margin: 5 }}>
                        <Text>
                            سبد خرید: {props.route.params.index}
                        </Text>
                    </View>
                    <View>
                        <Text>aaaaaa</Text>
                    </View>

                </View>
                <View>
                    <Text>Error ----- {error}</Text>
                </View>
                <View>
                    <Text style={{ padding: 50 }}>rrrrrrrrr</Text>
                </View>
                <View>
                    <Text style={{ padding: 50 }}>aaaaaa</Text>
                </View>
                <View>
                    <Text style={{ padding: 50 }}>wwwwwwwwwww</Text>
                </View>
                <View>
                    <Text style={{ padding: 50 }}>aaaaaaaaaaaa</Text>
                </View>
                <View>
                    <Text style={{ padding: 50 }}>ssssssss</Text>
                </View>
                <View>
                    <Text style={{ padding: 50 }}>ddddddddd</Text>
                </View>
                <View>
                    <Text style={{ padding: 50 }}>ffffffff</Text>
                </View>
                <View>
                    <Text style={{ padding: 50 }}>kkkkkkkk</Text>
                </View>
                <View>
                    <Text style={{ padding: 50 }}>lll</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    </>);
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