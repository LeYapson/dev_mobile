import React from 'react';
import { Text, View } from 'react-native';
import styles from './Flexboxstyle'; // Import des styles externalisés

const ProfileCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bonjour à tous !</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Je suis</Text>
                <Text style={styles.value}>{props.name}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>J'ai</Text>
                <Text style={styles.value}>{props.age} ans</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Né à</Text>
                <Text style={styles.value}>{props.city}</Text>
            </View>

            <Text style={styles.label}>Description</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    Ce paragraphe est ma description mais n'a pas été passé par les props
                </Text>
            </View>
        </View>
    );
};

export default ProfileCard;
