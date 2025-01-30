import React from 'react';
import { Text, View } from 'react-native';
import styles from './ProfileCardStyles'; // Import des styles externalisés

const ProfileCard = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.header}>Bonjour à tous !</Text>
            
            <Text style={styles.label}>Je suis</Text>
            <Text style={styles.value}>{props.name}</Text>

            <Text style={styles.label}>J'ai</Text>
            <Text style={styles.value}>{props.age} ans</Text>

            <Text style={styles.label}>Né à</Text>
            <Text style={styles.value}>{props.city}</Text>

            <Text style={styles.label}>Description</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                {props.children}
                </Text>
            </View>
        </View>
    );
};

export default ProfileCard;
