import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.iconImage} source={require("../assets/bicycle0.png")} />
            <Text style={styles.welcomeText}>
                Welcome to
            </Text>
            <Text style={styles.powerText}>
                Power Bike Shop
            </Text>
            <TouchableOpacity style={styles.touchableGmail} onPress={() => navigation.navigate("Tabs")}>
                <AntDesign name="google" size={24} color="rgb(255, 100, 10)" />
                <Text style={styles.gmailText}>Login with Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableApple} onPress={() => navigation.navigate("Tabs")}>
                <AntDesign name="apple1" size={24} color="white" />
                <Text style={styles.appleText}>Login with Apple</Text>
            </TouchableOpacity>
            <Text style={styles.nonMemberText}>
                Not a member? {" "}
                <Text style={styles.signupText} onPress={() => navigation.navigate("Tabs", {screen: "Cart"})}>
                    Sign Up
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconImage: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginBottom: 50,
        transform: [{ rotate: "45deg" }]
    },

    welcomeText: {
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: 24
    },

    powerText: {
        color: "black",
        fontSize: 30,
        fontWeight: "600"
    },

    touchableGmail: {
        backgroundColor: "#e3e3e3",
        padding: 10,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: "row"
    },

    touchableApple: {
        backgroundColor: "black",
        padding: 10,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: "row"
    },

    gmailText: {
        fontSize: 20,
        marginLeft: 15
    },

    appleText: {
        fontSize: 20,
        marginLeft: 15,
        color: "white"
    },

    nonMemberText: {
        marginTop: 10,
        fontWeight: "500",
        color: "grey"
    },

    signupText: {
        color: "orange",
        fontWeight: "bold"
    }
});