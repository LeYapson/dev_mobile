import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from './Checkbox'; // Import du composant Checkbox

const CheckboxList = () => {
    // États pour gérer les cases cochées
    const [selectedItems, setSelectedItems] = useState({
        selectAll: false,
        item1: false,
        item2: false,
        item3: false,
        item4: false,
    });

    // Fonction pour gérer la sélection
    const toggleCheckbox = (key) => {
        if (key === 'selectAll') {
            // Toggle "Tout sélectionner"
            const newValue = !selectedItems.selectAll;
            setSelectedItems({
                selectAll: newValue,
                item1: newValue,
                item2: newValue,
                item3: newValue,
                item4: newValue,
            });
        } else {
            // Toggle d'un élément individuel
            const newSelection = { ...selectedItems, [key]: !selectedItems[key] };
            const allSelected = newSelection.item1 && newSelection.item2 && newSelection.item3 && newSelection.item4;
            newSelection.selectAll = allSelected; // Active "Tout sélectionner" si toutes les cases sont cochées
            setSelectedItems(newSelection);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sélectionnez des éléments :</Text>
            <Checkbox label="Tout sélectionner" checked={selectedItems.selectAll} onToggle={() => toggleCheckbox('selectAll')} />
            <Checkbox label="Élément 1" checked={selectedItems.item1} onToggle={() => toggleCheckbox('item1')} />
            <Checkbox label="Élément 2" checked={selectedItems.item2} onToggle={() => toggleCheckbox('item2')} />
            <Checkbox label="Élément 3" checked={selectedItems.item3} onToggle={() => toggleCheckbox('item3')} />
            <Checkbox label="Élément 4" checked={selectedItems.item4} onToggle={() => toggleCheckbox('item4')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default CheckboxList;
