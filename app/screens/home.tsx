import React from 'react';
import { View, Text } from 'react-native';
import CustomHeader from '../../components/header/headerCustom';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <CustomHeader Header="TrashMap" />
            <Text>Bem-vindo à Home!</Text>
        </View>
    );
}

export default HomeScreen;