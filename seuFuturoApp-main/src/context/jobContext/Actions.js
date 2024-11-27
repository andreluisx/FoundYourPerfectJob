import { appServer } from "../../server/appServer"
import Toast from 'react-native-toast-message';

const setDescription = dispatch => {
    return (description)=>{
        dispatch({'type': 'SET_DESCRIPTION', 'payload': description})
    }
}

const setResult = dispatch => {
    return async (text, navigation, nextPage)=>{
        try {
            dispatch({type: 'SET_LOADING', payload: true})
            const response = await appServer.post('/results', {text});
            const id = response.data.insertedId

            dispatch({type: 'SET_LOADING', payload: false})

            if(navigation){
                navigation.navigate(nextPage, {id})
            }
           
        } catch(e) {
            dispatch({type: 'SET_LOADING', payload: false})
            Toast.show({
                type: 'error',
                text1: 'Tivemos um problema!',
                text2: e.message || 'Algo não deu certo...'
            });
            
        }
    }
}

const getResult = dispatch => {
    return async (id) => {
        try{
            
            dispatch({type: 'SET_LOADING', payload: true})
            const response = await appServer.get(`/results/${id}`)
            
            dispatch({type: 'SET_RESULT', payload: response.data})
            
            dispatch({type: 'SET_LOADING', payload: false})

        }catch(e){
            dispatch({type: 'SET_LOADING', payload: false})
            Toast.show({
                type: 'error',
                text1: 'Tivemos um problema!',
                text2: e.message || 'Algo não deu certo...'
            });
        }

    }
}
const getAllResults = dispatch => {
    return async () => {
        try{
            
            dispatch({type: 'SET_LOADING', payload: true})
            const response = await appServer.get(`/results`)
            dispatch({type: 'SET_LOADING', payload: false})
            
            dispatch({type: 'SET_ALLRESULTS', payload: response.data})
            
        }catch(e){
            dispatch({type: 'SET_LOADING', payload: false})
            Toast.show({
                type: 'error',
                text1: 'Tivemos um problema!',
                text2: e.message || 'Algo não deu certo...'
            });
        }

    }
}


export {
    setDescription, setResult, getResult, getAllResults
}