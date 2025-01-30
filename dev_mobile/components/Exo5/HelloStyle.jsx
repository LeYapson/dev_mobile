import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HelloStyle = (props) => {
    return (
            <View style={styles.container}>
            <Text style={styles.Header}>Hello {props.name}</Text> 
            <Text style={styles.label}> j'ai {props.age} ans,</Text>
             <Text style={styles.value}>j'habite a {props.ville}</Text>
            <View style={styles.descriptionContainer}>
             <Text style={styles.decription}>{props.children}</Text>
             </View>
            </View>
        );  
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: "center",
    },
    Header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFA500', // Orange
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    value: {
        fontSize: 16,
        marginBottom: 5,
    },
    descriptionContainer: {
        backgroundColor: '#E8E8E8',
        padding: 8,
        borderRadius: 5,
        marginTop: 5,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
});

export default HelloStyle;