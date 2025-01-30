import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class BorderGrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startTimer = () => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ counter: prevState.counter + 1 }));
        }, 1000);
    };

    render() {
        return (
            <View style={[styles.box, { borderBottomWidth: this.state.counter }]}>
                <Text style={styles.text}>Compteur : {this.state.counter}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
        margin: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BorderGrow;
