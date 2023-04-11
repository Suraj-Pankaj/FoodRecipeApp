// In App.js in a new project

import * as React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import OnboardingScreen from '../screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const[isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }
      else{
        setIsFirstLaunch(false);
      }
    });
  
  }, []);

  if(isFirstLaunch === null){
    return null;
  }
  else if (isFirstLaunch === true){
    

      routeName = 'OnboardingScreen';
    //   <NavigationContainer>
     
    //  <Stack.Navigator>
     
    //  <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} options={{headerShown: false}} />
    //   <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
    //   <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
    //   <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
    //   <Stack.Screen name="Loginbutton" component={Loginbutton} options={{headerShown: false}} />
    //   <Stack.Screen name="Signupbutton" component={Signupbutton} options={{headerShown: false}} />

      
    // </Stack.Navigator>
     
    // </NavigationContainer>
  
  } else{
    routeName = 'Login';
  }
  
  return (
    
     
     <Stack.Navigator initialRouteName={routeName}>
     
     <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />

      
    </Stack.Navigator>
     
    
  );
}

export default AuthStack;