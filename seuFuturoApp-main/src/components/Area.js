import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

export default function Area({ title, subtitle, training, salary, states }) {
    

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <View>
                    <FontAwesome name="suitcase" size={26} color="#1624c4" />
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
            <View style={styles.infoView}>
                <View style={styles.info}>
                    <Entypo name="book" size={17} color="#7d7d7d" />
                    <Text>Formação recomendada: {training}</Text>
                </View>
                <View style={styles.info}>
                    <FontAwesome name="money" size={17} color="#7d7d7d" />
                    <Text>Média salarial: {salary}</Text>
                </View>
                <View style={styles.info}>
                    <Entypo name="pin" size={17} color="#7d7d7d" />
                    <Text>Principais regiões: {states}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor: '#a3a3a3',
        paddingTop:24,
        paddingHorizontal:5,
        borderRadius:20
    },
    title: {
        fontWeight:'bold',
        fontSize:18,
        paddingBottom:7
    },
    subtitle:{
        color:'#919090',
        fontSize:12
    },
    titleView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:17,
        width:'80%',
        paddingBottom:15
    },
    info:{
        flexDirection:'row',
        paddingBottom:24,
        gap:10
    },
    infoView: {
        paddingTop:20,
        justifyContent:'center',
        width:'80%'
    }
    
});
