import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { TodoContext } from '../conexts/TodoContext';

export default function AddTodoScreen({ navigation }) {
    const [todo, setTodo] = useState('');
    const { setTodoList } = useContext(TodoContext);

    const handleAddTodo = () => {
        setTodoList((prevTodoList) => [...prevTodoList, todo]);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>What do you want to do?</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setTodo(text)}
                value={todo}
            />
            <Button title="Add Todo" onPress={handleAddTodo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    label: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
});
