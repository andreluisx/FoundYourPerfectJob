import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton ({content, action}) {
    return(
        <TouchableOpacity 
            style={[
                styles.submitButton, 
                {marginTop: 20}
            ]}
            onPress={action}
            activeOpacity={0.9}
        >
            <Text style={styles.submitButtonText}>{content}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submitButton: {
        width: '80%',
        backgroundColor: '#303668',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
})