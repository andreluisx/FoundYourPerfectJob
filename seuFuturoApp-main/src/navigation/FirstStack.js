import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wellcome from '../screens/Wellcome';
import FirstQuestion from '../screens/FirstQuestion';
import Result from '../screens/Result';
import { History } from '../screens/History';

const Stack = createNativeStackNavigator();

const FirstStack = () => {
  return (
    <Stack.Navigator initialRouteName='Wellcome' >
      <Stack.Screen
        name="Wellcome"
        component={Wellcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FirstQuestion" component={FirstQuestion} options={{headerShown: false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown: false}}/>
      <Stack.Screen name="History" component={History} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default FirstStack