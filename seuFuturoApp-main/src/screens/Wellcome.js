import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Welcome({ navigation }) {
    return (
        <View
            style={styles.background} 
        >
            <SafeAreaView style={styles.container}>
                
                <View style={styles.content}>
                    <View>
                    </View>
                    <View>
                    <Image source={require("../images/logo.png")} style={styles.icon}></Image>
                    <Text style={styles.title}>Seja Bem Vindo.</Text>
                    <Text style={styles.subtitle}>Este aplicativo irá te mostrar a profissão que mais combina com você.</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('FirstQuestion') }} activeOpacity={0.9}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Acessar</Text>
                            <Icon name="arrow-right" size={20} color={'white'}/>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent:'center',
        alignItems: "center",
    },
    content:{
        flex:1,
        paddingHorizontal:30,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: "space-between",
    },
    title: {
        fontSize: 40,
        color: "black",
        fontWeight:'bold', 
        paddingBottom:5,
        textAlign:'center',
    },
    subtitle: {
        fontSize: 15,
        color: 'black', 
        textAlign:'left',
        paddingHorizontal:30,
    },
    background: {
        flex: 1, 
        resizeMode: "cover", 
    },
    button:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:40,
        backgroundColor:'#303668',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:14,
        borderRadius:12,
        paddingInline:30,
        paddingBlock:20,
        marginBottom:10,
    },
    buttonText:{
        fontSize:17,
        color:'white',
        fontWeight:'bold'
    },
    icon:{
        width:210,
        height:210,
        alignSelf:'center',
        marginBottom:30
    }
});
