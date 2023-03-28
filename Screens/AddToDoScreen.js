import React, { useState, useContext } from 'react';
import {StyleSheet, View, Text, TextInput, Button, Image} from 'react-native';
import { TodoContext } from '../conexts/TodoContext';

export default function AddTodoScreen({ navigation }) {
    const [todo, setTodo] = useState('');
    const { setTodoList } = useContext(TodoContext);

    const handleAddTodo = () => {
        if (todo !== '') {
            setTodoList(prevTodoList => [...prevTodoList, todo]);
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a To-Do</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setTodo(text)}
                value={todo}
                placeholder="Enter a new to-do"
            />
            <Button title="Add" onPress={handleAddTodo} />
            <Image source={require('../assets/383342.jpg')} style={styles.image} />

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
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 16,
    },
});
