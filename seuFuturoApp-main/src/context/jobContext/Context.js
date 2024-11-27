import createDataContext from '../createDataContext';
import Reducer from './Reducer';
import { setDescription, setResult, getResult, getAllResults } from './Actions'; 


const initialState = {
    description: '',
    results: [],
    result: {},
    loading: false,
};

export const { Context, Provider } = createDataContext(
    Reducer,
    { setDescription, setResult, getResult, getAllResults },
    initialState
);