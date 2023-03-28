import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/457933.jpg')} style={styles.image} />
            <Text style={styles.title}>Welcome to React Native To Do list</Text>
            <Button
                title="Todo lijst"
                onPress={() => navigation.navigate('Overview')}
            />
             <Text style={styles.title}></Text>
                  <Button
                    title="Contact Us"
                    onPress={() => navigation.navigate('Contact')}
                  />

             <Text style={styles.title}></Text>
                   <Button
                     title="Crypto"
                     onPress={() => navigation.navigate('Crypto')}
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