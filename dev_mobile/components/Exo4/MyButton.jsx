import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Alert } from "react-native";

const MyButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Hello", "You clicked me!")}
        >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
});

export default MyButton;