import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddTodoScreen({ navigation, route }) {
    const [todoType, setTodoType] = useState('Work');
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('');

    const handleAddTodo = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a To-Do Item</Text>
            <View style={styles.formControl}>
                <Text style={styles.label}>Choose a Type:</Text>
                <View style={styles.radioButtons}>
                    <Button
                        title="Work"
                        onPress={() => setTodoType('Work')}
                        color={todoType === 'Work' ? '#007AFF' : 'gray'}
                    />
                    <Button
                        title="School"
                        onPress={() => setTodoType('School')}
                        color={todoType === 'School' ? '#007AFF' : 'gray'}
                    />
                    <Button
                        title="Personal"
                        onPress={() => setTodoType('Personal')}
                        color={todoType === 'Personal' ? '#007AFF' : 'gray'}
                    />
                </View>
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Subject:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setSubject}
                    value={subject}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Date:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDate}
                    value={date.toString()}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                    maxLength={30}
                />
            </View>
            <Button title="Add Todo" onPress={handleAddTodo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formControl: {
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    radioButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});
