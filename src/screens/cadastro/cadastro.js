import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignUp = async () => {
        if (!email || !password || !name) {
            Alert.alert("Erro", "Você precisa preencher todos os campos!");
            return;
        }

        try {
            const user = await AsyncStorage.getItem(email);
            if (user !== null) {
                Alert.alert("Erro", "Um usuário com esse e-mail já existe!");
                return;
            }

            const newUser = JSON.stringify({ name, email, password });
            await AsyncStorage.setItem(email, newUser);
            Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert("Erro", "Houve um erro ao salvar o usuário!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            
            <TextInput
                placeholder="Nome Completo"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />

            <TextInput
                placeholder="Endereço de Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
            />

            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    button: {
        marginTop: 10,
        width: '100%',
        padding: 15,
        backgroundColor: '#38a69d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Cadastro;
