import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import FirstStack from './src/navigation/FirstStack';
import { Provider } from './src/context/jobContext/Context';
import Toast from 'react-native-toast-message';


const App = () => {
  
  return (
    <NavigationContainer>
      <Provider>
        <Toast/>
        <FirstStack/>
      </Provider>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;