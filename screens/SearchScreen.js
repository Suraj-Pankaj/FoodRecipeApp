import React, { useEffect, useState } from 'react';
import {View,Image,Keyboard, Text,TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {withNavigation} from 'react-navigation';


const SearchScreen = ({navigation}) => {

    const [recipes, setRecipes] = useState();
    const [searchQuery,setSearchQuery] = useState('');
    const [numberofRecipes, setNumberofRecipes] = useState('1');
    const [loading,setLoading] = useState(false);

    const apiId = '38e9b0fb'
    const apiKey = `2ff13e576c426678fa70c0acab918ab1`;
    const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberofRecipes}&calories=591-722&health=alcohol-free`;

    async function apiCall(){
        setLoading(true);
        let resp = await fetch(apiUrl);
        let respJson = await resp.json();
        setRecipes(respJson.hits);
        setLoading(false);
        Keyboard.dismiss()
        setSearchQuery('')
    }

    useEffect(() => {
        setLoading(true)
        apiCall()
    },[])

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 23,
          fontWeight: '800',
          width: '90%',
          color: '#008080',
        }}>
        What Recipe Would You like to Search?
      </Text>
      <View style={{display:'flex',flexDirection:'row'}}>
        <TextInput placeholder='Search Recipe...'
        style={styles.inputField}
        onChangeText={text => setSearchQuery(text)}
/>
<TextInput
onChangeText={text => setNumberofRecipes(text)}
style={[styles.inputField, {width:'20%', fontSize:18,marginLeft:15,color:'#008080',fontWeight:'bold'}]}
value={numberofRecipes}
keyboardType='number-pad'/>
      </View>

      <TouchableOpacity style={styles.button}
      onPress={apiCall}
    title='submit'>
        <Text style={styles.buttonText}>Search</Text>
    </TouchableOpacity>

    <SafeAreaView style={{flex:1}}>
        {loading ? <ActivityIndicator size='large' color='#008080'/> :
        <FlatList style={styles.recipes}
    data={recipes}
renderItem={({item}) => (
    <View style={styles.recipe}>
        <Image styles={styles.image}
        source={{uri: `${item.recipe.image}`}}
        />
        <View style={{padding:20, flexDirection:'row'}}>
            <Text style={styles.label}>{item.recipe.label}</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Details',{recipe:item.recipe})}}>
                <Text style={{marginLeft:50, fontSize:20,color:'#008080'}}>
                    Details
                </Text>
            </TouchableOpacity>
        </View>
    </View>
)}
keyExtractor={(item,index) => index.toString()} />}
    </SafeAreaView>
    </View>
  );
};
export default SearchScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: 20
    },
    inputField:{
        height:'100%',
        width:'65%',
        backgroundColor:'white',
        borderRadius: 20,
        marginTop:10,
        paddingLeft:15,

    },
    buttons:{
        flexDirection:'row'
    },
    button:{
        backgroundColor:'#008080',
        width:90 ,
        alignItems:'center',
        margin:15,
        height: 35,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 25,
    },
    buttonText:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
    
    },
    image:{
        width: '100% ',
        height: 100,
        borderRadius: 20
    },
    label: {
        fontSize: 15,
        width: '60%',
        color: '#008080',
        fontWeight:'700'
    },
    recipe:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 40
    }
});

