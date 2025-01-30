import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#780B78',
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 4,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
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
