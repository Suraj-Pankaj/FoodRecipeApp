import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScanScreen from '../screens/ScanScreen';
import SearchScreen from '../screens/SearchScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Food Lens"
        component={HomeScreen}
        options={{
            headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#2e64e5',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
          
        }}
      />
      <Stack.Screen
      name="ScanScreen"
      component={ScanScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        
      }}
    />
     <Stack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        
      }}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        
      }}
    />
      </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
      name="EditProfileScreen"
      component={EditProfileScreen}
      options={{
        title: '',
        headerLeft: () => (
          
          <Button 
          onPress={() => navigation.navigate('ProfileScreen')}
            title="Info"
            color="#fff"
            
          />
        ),
        headerTitleAlign: 'center',
       headerShown: false,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        
      }}
    />
      
</Stack.Navigator>
);
const AppStack = () => {
    return (
        <Tab.Navigator
        
      >

      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: 'black',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={({route}) => ({
          // tabBarLabel: 'Home',
          headerShown: false,
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: 'black',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        })}
      />
      </Tab.Navigator>
    )
}


export default AppStack

