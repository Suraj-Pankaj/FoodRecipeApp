import { StyleSheet, Text, View, Image, TouchableOpacity,ImageBackground } from 'react-native'
import React, { useContext, useState, useEffect} from 'react'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {withNavigation} from 'react-navigation';
import EditProfileScreen from './EditProfileScreen';


import firestore from '@react-native-firebase/firestore';

  const ProfileScreen = ({navigation,route}) => {

    const {user, logout} = useContext(AuthContext)
    const [userData, setUserData] = useState(null);

    const getUser = async() => {
      await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if( documentSnapshot.exists ) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })
    }

    useEffect(() => {
      getUser();
    }, []);
  
      return (
  
        
           <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView 
            style={styles.container}
            contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
            showsVerticalScrollIndicator={false}
            > 
              <Image style={styles.userImg} source={require('../assets/profile3.png')}/>
              <Text style={styles.userName}>{userData ? userData.fname || 'Test' : 'Test'} {userData ? userData.lname || 'User' : 'User'}</Text>
              <Text style={styles.aboutUser}>{userData ? userData.about || 'No details added.' : ''}</Text>

              <View style={styles.userBtnWrapper}>

                <TouchableOpacity style={styles.userBtn} onPress={() => {
                  navigation.navigate('EditProfileScreen');
                }}>
                  <Text style={styles.userBtnTxt}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                  <Text style={styles.userBtnTxt}>Logout</Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
            </SafeAreaView>
          
        
      );
    };
    
    

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color:'black'
  },
  aboutUser: {
    fontSize: 15,
    fontWeight: '600',
    color:'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: 'black',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
  