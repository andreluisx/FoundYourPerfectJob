export default function Reducer(state, action){
    switch(action.type){
        case 'SET_DESCRIPTION':
            return {...state, description: action.payload}
        case 'SET_RESULT':
            return {...state, result: action.payload}
        case 'SET_ALLRESULTS':
            return {...state, results: action.payload}
        case 'SET_LOADING':
            return {...state, loading: action.payload}
        default:
            return state
    }
}

