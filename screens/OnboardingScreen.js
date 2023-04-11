import { View, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'


const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
    SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image style={styles.image} source={require('../assets/learn.jpg')} />,
      title: 'Learn',
      subtitle: 'You can learn how to cook!!',
    },
    {
      backgroundColor: '#fff',
      image: <Image style={styles.image} source={require('../assets/discover.jpg')} />,
      title: 'Discover',
      subtitle: 'Discover 500+ Recipes!!',
    },
    {
      
      backgroundColor: '#fff',
      image: <Image style={styles.image} source={require('../assets/share.jpg')} />,
      title: 'Share',
      subtitle: 'Share your own Recipes!!',
    },
    
  ]}
/>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image:{
    height:200,
    width:300
  }
});