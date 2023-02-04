import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, StyleSheet, TouchableOpacity, Image, Button, SafeAreaView, ScrollView, VirtualizedList, Modal, Pressable } from 'react-native';

const VirtinItem = (modalVisible) => {
    //const [modalVisible, setModalVisible] = useState(false);

    return (<>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                About VintinItem
            </Text>
        </View>
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                buttonClose={true}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    console.warn("close ");
                    console.log("close ");
                    setModalVisible(!modalVisible);
                }}            >
                <Pressable style={styles.outsideModal}
                    onPress={(event) => {
                        if (event.target == event.currentTarget) {
                            console.log("ssss   ");
                            setModalVisible(false);
                        }
                    }} >
                    <View style={styles.modal}>
                        <View style={styles.modalHeader}>
                            <View style={styles.modalHeaderContent}><Text>Other header content</Text></View>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.modalHeaderCloseText}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalContent}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Hide Modal</Text>
                                        <Text style={styles.textStyle}>{ }</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </View>
    </>)
}
export default VirtinItem;
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
