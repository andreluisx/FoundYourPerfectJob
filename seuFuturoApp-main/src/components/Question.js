import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Question({ question, numberQuestion, navigation,  nextPage }) {
    const [color, setColor] = useState({ first: '', second: '', third: '' });

    const handlePress = (answer) => {
        switch (answer) {
            case 1:
                setColor({ first: '#575857'});
                break; 
            case 2:
                setColor({second: '#248724'});
                break;
            case 3:
                setColor({ third: '#07D407' });
                break;
            default:
                break;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.questionView}>
                <Text style={styles.questionText}>{numberQuestion}</Text>
                <Text style={styles.questionText}>{question}</Text>
            </View>
            <View style={styles.answer}>
                <TouchableOpacity onPress={() => handlePress(1)} style={styles.answerBox}>
                    <View style={[styles.circle, { backgroundColor: color.first }]}></View>
                    <Text>Nada</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress(2)} style={styles.answerBox}>
                    <View style={[styles.circle, { backgroundColor: color.second }]}></View>
                    <Text>Pouco</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress(3)} style={styles.answerBox}>
                    <View style={[styles.circle, { backgroundColor: color.third }]}></View>
                    <Text>Muito</Text>
                </TouchableOpacity>
                
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(nextPage)}>
                <View style={styles.send}>
                    <Text>Enviar Resposta</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    questionView: {
        flexDirection: 'row',
        gap: 10,
    },
    questionText: {
        fontSize: 20,
    },
    circle: {
        width: 30, 
        height: 30,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 15, 
       
    },
    answer: {
        marginTop: 40,
        flexDirection: 'row',
        gap: 60,
    },
    answerBox:{
        justifyContent:'center',
        alignItems:'center',
        gap:6
    },
    send: {
        padding:20,
        marginTop:70,
        borderWidth:1,
        minWidth:'80%',
        justifyContent:'center',
        borderRadius:40,
        alignItems:'center',
    }
});
