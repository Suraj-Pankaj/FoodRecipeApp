import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Button,
    Pressable
  } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';




const Loginbutton = ({title}) => {
  
  const navigation = useNavigation();
    // const title = props.title;
    // const navigation = props.navigation;
    return(
        <View style={styles.container}>
          <Pressable style={styles.button}
          onPress={() => navigation.navigate('Login') }
            
        
          >
            <Text style={styles.text }>{title}</Text>
          </Pressable>


          
        </View>




    );
};

export default Loginbutton;




