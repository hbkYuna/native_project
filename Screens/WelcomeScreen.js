import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the To-Do List App!</Text>
            <Button
                title="Get Started"
                onPress={() => navigation.navigate('Overview')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
});