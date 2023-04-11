import {StyleSheet, Text, View,ImageBackground, TextInput, TouchableOpacity,Image,Button,ActivityIndicator} from 'react-native';
import React from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { useState,useContext } from 'react';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/AuthProvider';

const ScanScreen = () => {
  const {user, logout} = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [post, setPost] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
    // ImagePicker.openCamera({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    // });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //   console.log(image);
    // });
  };

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);
    console.log('Post: ', post);

    firestore()
    .collection('picture')
    .add({
      userId: user.uid,
      post: post,
      postImg: imageUrl,
      postTime: firestore.Timestamp.fromDate(new Date()),
      likes: null,
      comments: null,
    })
    .then(() => {
      //console.log('Post Added!');
      Alert.alert(
        'Post published!',
        'Your post has been published Successfully!',
      );
      setPost(null);
    })
    .catch((error) => {
      console.log('Something went wrong with added post to firestore.', error);
    });
  }

  const uploadImage = async () => {
    if( image == null ) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop(); 
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      Alert.alert(
        'Image uploaded!',
        'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      );
      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };



  return (
    <View style={styles.container}>
        <ImageBackground
        source={require('../assets/bgmain.jpg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Food Lens</Text>
      </View>

      <View style={styles.InputWrapper}>
        {image != null ? <Image style={styles.AddImage} source={{uri: image}} /> : null}

        {/* <TextInput style={styles.InputField}
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={(content) => setPost(content)}
        /> */}
        <View style={styles.InputField}
          // placeholder="What's on your mind?"
          // multiline
          // numberOfLines={4}
          value={post}
          onChangeText={(content) => setPost(content)}
        />
        {uploading ? (
          <View style={styles.StatusWrapper}>
            <Text style={{color:'white'}}>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
          <TouchableOpacity style={styles.SubmitBtn} onPress={submitPost}>
            <Text style={styles.SubmitBtnText}  >Post</Text>
          </TouchableOpacity>
        )}
      </View>

      <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={takePhotoFromCamera}>
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={choosePhotoFromLibrary}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
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
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 20,
        
        // backgroundColor: 'rgba(0,0,0,.5)',
      },
      InputWrapper:{
        flex: 1,
       justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        
        // backgroundColor: '#2e64e515',
      },
      AddImage:{
        width:'80%',
        height: 250,
        marginBottom: 15,

      },
      InputField:{
    justifyContent:'center',
    alignItems:'center',
    fontSize: 24,
    textAlign: 'center',
    width:'90%',
    marginBottom: 15,
    // align-items: center;
    // font-size: 24px;
    // text-align: center;
    // width:90%;
    // margin-bottom: 15px;
      },
      StatusWrapper:{
        justifyContent:'center',
        alignItems:'center'
      },
      SubmitBtn:{
        // flex-direction: row;
        // justify-content: center;
        // background-color: #2e64e515;
        // border-radius: 5px;
        // padding: 10px 25px;
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: '#368D68',
        borderRadius:5,
        padding: 10
      },
      SubmitBtnText:{
    //     font-size: 18px;
    // font-family: 'Lato-Bold';
    // font-weight: bold;
    // color: #2e64e5;
    fontSize: 18,
    fontFamily:'Lato-Bold',
    fontWeight:'bold',
    color:'white'
      }

  });