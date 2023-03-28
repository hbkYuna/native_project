import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TodoContext } from '../conexts/TodoContext';

export default function AddTodoScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { handleAddTodo } = route.params;
    const { todoList, setTodoList } = React.useContext(TodoContext);

    const [type, setType] = useState('');
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const newTodo = { type, subject, date, description };
        setTodoList([...todoList, newTodo]);
        handleAddTodo();
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.field}>
                <Text style={styles.label}>Choose a Type:</Text>
                <RadioButton.Group onValueChange={setType} value={type}>
                    <View style={styles.radioOption}>
                        <RadioButton value="Work" />
                        <Text style={styles.radioLabel}>Work</Text>
                    </View>
                    <View style={styles.radioOption}>
                        <RadioButton value="School" />
                        <Text style={styles.radioLabel}>School</Text>
                    </View>
                    <View style={styles.radioOption}>
                        <RadioButton value="Personal" />
                        <Text style={styles.radioLabel}>Personal</Text>
                    </View>
                </RadioButton.Group>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Subject:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setSubject}
                    value={subject}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Date:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDate}
                    value={date}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                    maxLength={30}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Add Todo" onPress={handleSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    label: {
        marginRight: 10,
        fontSize: 16,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    radioLabel: {
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
});
