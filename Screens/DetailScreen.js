import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DetailScreen({ route }) {
    const { todo } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do Detail</Text>
            <Text style={styles.detail}>{todo}</Text>
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
    detail: {
        fontSize: 18,
    },
});
