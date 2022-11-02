import React, { useState,useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions,Alert} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
import { firebase } from '../../firebase/config'
import {AuthContext} from '../../context';
import Logo from '../../assets/photos/logo.png';

export function ForgotPasswordComponent({route, navigation}) {
    const {state, dispatch} = useContext(AuthContext);

    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
  
    const {height}=useWindowDimensions();
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //       //console.log(user); // It shows the Firebase user
    //       //console.log(firebase.auth().user); // It is still undefined
    //       user.getIdToken().then(function(idToken) {  // <------ Check this line
    //          console.log(idToken); // It shows the Firebase token now
    //       });
    //   }
  // });
  //navigation.goBack()
  const onGoBack = () => {
     navigation.goBack()
   
  }
       const onForgotPassword = () => {
         //console.warn("Forgot Password");
         
          firebase.auth().sendPasswordResetEmail(username)
            .then(function (user) {
              //console.warn('Please check your email...')
            }).catch(function (e) {
              console.log(e)
            })
            Alert.alert(
              "Password Sent",
              "Please check your email for the password link"
              
            );
            navigation.goBack()
        
       }
       
     
    return (
        
    <ScrollView>
    <View style = {styles.root}>
      <Image  source={Logo} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
      <CustomInput 
      placeholder="Email ID" 
      value={username} 
      setValue={setUsername}

      secureTextEntry={false}/>
      
      <CustomButton 
      text="Send Password Reset Link"
      onPress = {onForgotPassword}
      type = "TERTIARY"
      />
      <CustomButton 
      text="Back to Login"
      onPress = {onGoBack}
      type = "TERTIARY"
      />
      
    </View>
    </ScrollView>
    );
}