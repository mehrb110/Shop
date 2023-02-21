import { StyleSheet, Text, View } from 'react-native';

export default function Basket() {
    return (
        <View style={{ flexDirection: 'row-reverse', backgroundColor: '#7fffd4' }}>
            <View style={{ backgroundColor: '#44ff66', justifyContent: 'center', alignItems: 'center', height: 102, width: 102, padding: 5, margin: 5 }}>
                <Text>
                    Photo graph
                </Text>
            </View>
            <View style={{ backgroundColor: '#ffddcc', flex: 1, justifyContent: 'flex-start', alignItems: 'stretch', padding: 5, margin: 5 }}>
                <Text>
                    سبد خرید
                </Text>
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