import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

import ChildParam from "./ChildParam";

export default function Parameter(props) {
    const [st, setSt] = useState('ff');
    const dataUseState = { f1: 'aaa', f2: 'bb' }
    const [data, setData] = useState('parent');

    const childToParent = (childdata) => {
        console.log(99);
        setData(childdata);
    }
    OnBUttonPress = () => {
        this.props.navigator.push({
            id: 'ChildParam'
        })
    }
    return (<>
        <Button
            title="Go to Details"
            onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('ChildParam', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                });
            }} />
        {/* <View>
            <TouchableHighlight onPress={this.OnBUttonPress}>
                <Text>Test Push</Text>
            </TouchableHighlight>
        </View> */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ChildParam name="parent data to clild" childToParent={childToParent} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Parameter: {props.name}
            </Text>
            <Text>data f1: {dataUseState.f1}</Text>
            <Text>data f2: {dataUseState.f2}</Text>
            <Text>setState: {st}</Text>
            <Ripple>
                <Text>touch me</Text>
                <Button
                    onPress={() => {
                        setSt('set in button');
                        setData('');
                    }}
                    title="press to setSt" />
            </Ripple>
            <Text>data from clild to parent: {data}</Text>
        </View>

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