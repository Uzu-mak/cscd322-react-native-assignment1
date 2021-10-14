import { StatusBar } from 'expo-status-bar';
import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const itemListData = [
    { id: "1", price: "1700.00", name: "Pinarello Bike", imagePath: require("../assets/bicycle1.png") },
    { id: "2", price: "1500.00", name: "Bromptton Bike", imagePath: require("../assets/bicycle2.png") },
    { id: "3", price: "1200.00", name: "Schwinn Bike", imagePath: require("../assets/bicycle3.png") },
    { id: "4", price: "980.00", name: "Norco Bike", imagePath: require("../assets/bicycle4.png") },
];

const ItemList = () => {
    return (
        <FlatList
            data={itemListData}

            numColumns={2}

            keyExtractor={(item, index) => index}

            renderItem={({ item }) => (
                <View style={styles.listItem}>
                    <Ionicons style={styles.heartIcon} name="ios-heart-circle-outline" size={28} color="white" />
                    <Image resizeMode='contain' style={styles.listItemImage} source={item.imagePath} />
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text><Text style={styles.dollarSign}>$</Text><Text style={styles.priceAmount}>{item.price}</Text></Text>
                </View>
            )}
        />
    );
}

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <Ionicons name="menu" size={28} color="black" />
                <MaterialCommunityIcons name="motorbike" size={28} color="black" />
                <View style={styles.searchNotifIcons}>
                    <AntDesign name="search1" size={28} color="black" />
                    <Ionicons style={styles.notifIcon} name="notifications-outline" size={28} color="black" />
                </View>
            </View>
            <ItemList></ItemList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingHorizontal: 20
    },

    navigationBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 20
    },

    searchNotifIcons: {
        flexDirection: 'row'
    },

    notifIcon: {
        marginLeft: 20
    },

    listItem: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        width: 250,
        height: 280,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: "#e3e3e3",
        padding: 15,
        borderRadius: 20
    },

    heartIcon: {
        alignSelf: 'flex-end',
        marginBottom: 5
    },

    listItemImage: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginBottom: 20
    },

    itemName: {
        color: "rgba(0, 0, 0, 0.6)",
    },

    dollarSign: {
        color: 'orange',
        fontWeight: 'bold'
    },

    priceAmount: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});