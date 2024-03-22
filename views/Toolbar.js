import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Toolbar = ({ title }) => {
    return (
        <View style={styles.toolbar}>
            <TouchableOpacity onPress={() => console.log('Menu button pressed')}>
                <Text style={styles.button}>Menu</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() => console.log('Search button pressed')}>
                <Text style={styles.button}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333', // Change the background color as per your design
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    button: {
        color: '#fff', // Change the color as per your design
        fontSize: 16,
    },
    title: {
        color: '#fff', // Change the color as per your design
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Toolbar;
