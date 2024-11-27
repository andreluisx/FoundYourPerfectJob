import axios from 'axios'
import { Platform } from 'react-native';

const getServerUrl = () => {
    if (Platform.OS === 'android') {
      // Para emuladores Android
      return 'http://10.0.2.2:8000';
    } else if (Platform.OS === 'ios') {
      // Para iOS, use seu IP local
      return 'http://192.168.1.117:8000'; // Confirme se este é seu IP correto
    }
    // Para web/desenvolvimento
    return 'http://localhost:8000';
  };

const appServer = axios.create({
    baseURL: getServerUrl(),
    timeout: 10000 
  });

export { appServer };