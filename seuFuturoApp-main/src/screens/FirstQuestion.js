import React, { useState, useContext } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform 
} from "react-native";
import { Context } from "../context/jobContext/Context";
import Loading from "../components/Loading";
import MyButton from "../components/MyButton";

export default function FirstQuestion({navigation}) {
    const { state, setDescription, setResult } = useContext(Context)
    const { description, loading } = state
    const [charCount, setCharCount] = useState(0);
    const MAX_CHARS = 500;

    const handleTextChange = (text) => {
        setDescription(text);
        setCharCount(text.length);
    };

    const handleSubmit = () => {
        if (description.trim().length > 0) {
            console.log('Enviando descrição:', description);
            setResult(description, navigation, 'Result')
        }
    };

    return(
        <KeyboardAvoidingView 
            style={styles.background}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps={true}
        
        >
            <Loading visible={loading}/>
            <View style={styles.container}>
                <Text style={styles.title}>Me fale um pouco sobre você.</Text>
                <Text style={styles.subTitle}>Hobbies, habilidades, costumes e etc.</Text>
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    numberOfLines={10}
                    placeholder="Digite aqui uma descrição sobre você..."
                    placeholderTextColor="#888"
                    value={description}
                    onChangeText={handleTextChange}
                    maxLength={MAX_CHARS}
                    textAlignVertical="top"
                />
                
                <View style={styles.charCountContainer}>
                    <Text style={styles.charCount}>
                        {charCount}/{MAX_CHARS}
                    </Text>
                </View>
            </View>

            <TouchableOpacity 
                style={[
                    styles.submitButton, 
                    description.trim().length === 0 && styles.submitButtonDisabled
                ]}
                onPress={handleSubmit}
                disabled={description.trim().length === 0}
                activeOpacity={0.9}
            >
                <Text style={styles.submitButtonText}>Enviar</Text>
            </TouchableOpacity>
            
            <MyButton content={'Histórico'} action={()=>navigation.navigate('History')}/>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '80%',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
    },
    subTitle: {
        fontSize: 16,
        marginTop: 10,
        color: '#666',
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        height: 200,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#999',
        padding: 15,
        backgroundColor: 'white',
        textAlignVertical: 'top',
        fontSize: 16,
    },
    charCountContainer: {
        alignItems: 'flex-end',
        marginTop: 5,
    },
    charCount: {
        color: '#888',
        fontSize: 12,
    },
    submitButton: {
        width: '80%',
        backgroundColor: '#303668',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    submitButtonDisabled: {
        backgroundColor: '#cccccc',
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});