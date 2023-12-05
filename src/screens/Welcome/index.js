import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Welcome() {

        const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text>Bem vindo</Text>
            </View>
            <View 
            style={styles.containerForm}
            >
            <TouchableOpacity
            onPress={() => {navigation.navigate('Login')}}
            
            >

                <Text style={styles.button}>Acessar</Text>
                
            </TouchableOpacity>
            </View>
            



        </View>
    )
}






const styles = StyleSheet.create({
    container:{

    },
    containerForm:{
        flex: 1,
        backgroundColor: '#FFF',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    button:{
        position:'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%'
    }
})



