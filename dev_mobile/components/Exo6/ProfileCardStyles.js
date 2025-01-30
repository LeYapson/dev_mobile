import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
    },
    header: {
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
