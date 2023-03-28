import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import * as Crypto from 'expo-crypto';

export default function App() {
    const [hash, setHash] = useState('');
    const [randomBytes, setRandomBytes] = useState(new Uint8Array(0));
    const [uuid, setUuid] = useState('');
    const [input, setInput] = useState('');
    const [algorithm, setAlgorithm] = useState('SHA-256');

    const generateHash = async () => {
        const digest = await Crypto.digestStringAsync(`SHA-${algorithm}`, input);
        setHash(digest);
    };

    const generateRandomBytes = async () => {
        const bytes = await Crypto.getRandomBytesAsync(16);
        setRandomBytes(bytes);
    };

    const generateUuid = () => {
        const uuid = Crypto.randomUUID();
        setUuid(uuid);
    };


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    onChangeText={(text) => setInput(text)}
                    value={input}
                />
                <Button color={'#21f39f'} title="Generate Hash" onPress={generateHash}/>
            </View>
            <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Hashing Algorithm:</Text>
                <View style={styles.picker}>
                    <Button
                        title="SHA-256"
                        onPress={() => setAlgorithm('256')}
                        color={algorithm === '256' ? '#21f39f' : '#b2b2b2'}
                    />
                    <Button
                        title="SHA-384"
                        onPress={() => setAlgorithm('384')}
                        color={algorithm === '384' ? '#21f39f' : '#b2b2b2'}
                    />
                    <Button
                        title="SHA-512"
                        onPress={() => setAlgorithm('512')}
                        color={algorithm === '512' ? '#21f39f' : '#888'}
                    />
                </View>
            </View>
            <Text style={styles.text}>Hash: {hash}</Text>
            <Button color={'#21f39f'} title="Generate Random Bytes" onPress={generateRandomBytes}/>
            <Text style={styles.text}>Random Bytes: {randomBytes.join(', ')}</Text>
            <Button color={'#21f39f'} title="Generate UUID" onPress={generateUuid}/>
            <Text style={styles.text}>UUID: {uuid}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        marginRight: 10,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 5,
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    pickerLabel: {
        marginRight: 10,
        color: '#fff',
    },
    picker: {
        flexDirection: 'row',
    },
    text: {
        color: '#fff',
        marginVertical: 10,
    },
})