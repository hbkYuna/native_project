import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TodoContext } from '../conexts/TodoContext';

export default function OverviewScreen({ navigation }) {
    const { todoList, setTodoList } = useContext(TodoContext);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>
            {todoList.length === 0 ? (
                <Text style={styles.empty}>Your to-do list is empty.</Text>
            ) : (
                todoList.map((todo, index) => (
                    <Text
                        key={index}
                        style={styles.todo}
                        onPress={() => navigation.navigate('Detail', { todo })}
                    >
                        {todo}
                    </Text>
                ))
            )}
            <Button
                title="Add To-Do"
                onPress={() => navigation.navigate('AddTodo', { setTodoList })}
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
    empty: {
        fontSize: 18,
        fontStyle: 'italic',
    },
    todo: {
        fontSize: 18,
        marginBottom: 8,
    },
});
