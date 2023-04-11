// In App.js in a new project

// import * as React from 'react';
// import { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './components/HomeScreen';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Loginbutton from './components/Loginbutton';
// import Signupbutton from './components/Signupbutton';
// import OnboardingScreen from './components/OnboardingScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';



import React from 'react';
import Providers from './navigation';

const App = () => {
  return <Providers />;
}

export default App;

// const Stack = createNativeStackNavigator();

// const App = () => {
//   const[isFirstLaunch, setIsFirstLaunch] = React.useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then(value => {
//       if(value == null){
//         AsyncStorage.setItem('alreadyLaunched','true');
//         setIsFirstLaunch(true);
//       }
//       else{
//         setIsFirstLaunch(false);
//       }
//     });
  
//   }, []);

//   if(isFirstLaunch === null){
//     return null;
//   }
//   else if (isFirstLaunch === true){
//     return (
//       <NavigationContainer>
     
//      <Stack.Navigator>
     
//      <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} options={{headerShown: false}} />
//       <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
//       <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
//       <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
//       <Stack.Screen name="Loginbutton" component={Loginbutton} options={{headerShown: false}} />
//       <Stack.Screen name="Signupbutton" component={Signupbutton} options={{headerShown: false}} />

      
//     </Stack.Navigator>
     
//     </NavigationContainer>
//     );
//   } else{
//     return <Login/>;
//   }
  
//   return (
//     <NavigationContainer>
     
//      <Stack.Navigator>
     
//      <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} options={{headerShown: false}} />
//       <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
//       <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
//       <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
//       <Stack.Screen name="Loginbutton" component={Loginbutton} options={{headerShown: false}} />
//       <Stack.Screen name="Signupbutton" component={Signupbutton} options={{headerShown: false}} />
      
//     </Stack.Navigator>
     
//     </NavigationContainer>
//   );
// }

// export default App;