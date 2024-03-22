import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import App from '../App';

export default function SearchScreen({navigation}) {

  useLayoutEffect(() =>{
    navigation.setOptions({
      title: 'Search',
    });
    }, [navigation]);
    return (
      <View style={( {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      })}>
        <Text>Seaarch!</Text>
      </View>
    );
  }