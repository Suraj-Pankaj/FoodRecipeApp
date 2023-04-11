import React, {useContext} from 'react';
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import {AuthContext} from '../navigation/AuthProvider';
import ScanScreen from './ScanScreen';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bgmain.jpg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Food Lens</Text>
        
        <Text style={styles.subtitle}>Find the best food recipes</Text>

      </View>

      <View style={styles.scanbuttons}>
        <TouchableOpacity style={styles.scanbtn} onPress={() => navigation.navigate('ScanScreen')}>
          <Text style={styles.btntext}>Scan Ingredients</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchbtn} onPress={() => navigation.navigate('SearchScreen')}>
          <Text style={styles.btntext}>Search Ingredients</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    opacity: 0.95,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    //  backgroundColor: 'rgba(0,0,0,.5)',
  },

  title: {
    fontSize: 40,
    // fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Lato-SemiItalic',
    // backgroundColor: 'rgba(0,0,0,.5)',
  },
  subtitle:{
    fontSize: 20,
    color:'white',
    fontFamily: 'Lato-SemiItalic',

  },
  scanbuttons: {
    position: 'absolute',
    bottom: 50,
    width: '100%',

  },
  btntext: {
    color: 'white',
    fontSize: 15,
  },
  scanbtn: {
    backgroundColor: '#368D68',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  searchbtn: {
    backgroundColor: '#368D68',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
});
