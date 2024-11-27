import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CardJob ({jobName, jobDescription, action}) {
    return(
        <TouchableOpacity 
            style={[
                styles.CardPressable, 
                {marginTop: 20}
            ]}
            onPress={action}
            activeOpacity={0.8}
        >
            <View style={styles.info}>
                <Text style={styles.title}>{jobName}</Text>
                <Text style={styles.subtitle} numberOfLines={1} lineBreakMode="...">{jobDescription}</Text>
            </View>
            <View style={styles.id}>
                <Text style={styles.number}>
                    Ver Detalhes
                </Text>
                <Icon name="angle-right" size={18} color="#303668" />
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    CardPressable: {
        width: '100%',
        backgroundColor: '#f3f3f3',
        paddingTop:15,
        borderRadius: 10,
        alignItems: 'left',
        flexDirection: 'column',
        justifyContent:'space-between',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    
    },
    id:{
        backgroundColor: '#f3f3f3',
        borderTopWidth:1,
        borderColor:'#d9dada',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:23,
        paddingVertical:6,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    title: {
        color:'#303668',
        fontWeight: 'bold',
        fontSize: 20,
        
    },
    subtitle: {
        color: '#6f6f6f',
        fontSize: 14,
        paddingBottom:7
    },
    number:{
        color: '#c3c3c3',
        fontWeight: 'bold',
        fontSize: 12,
    },
    info:{
        maxWidth:'90%',
        paddingHorizontal:23,

    },
})