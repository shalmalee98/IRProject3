import React, { useState,useContext } from 'react'
import { Alert,Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';
import { firebase } from '../../firebase/config'
import {AuthContext} from '../../context';
import Logo from '../../assets/photos/logo.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function RegisterComponent({route, navigation}) {
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
  
    const onRegisterPressed = () => {
      firebase
           .auth()
           .createUserWithEmailAndPassword(username, password)
           .then(userCredentials => {
             const user = userCredentials.user;
             console.warn('Registered with:', username);
             Alert.alert(
              "You have been registered",
              "Please log in to continue"
              
            );
             if (user) {
              navigation.goBack()
            }
           })
           .catch(error => alert(error.message))
           
           
       }
       const onGoBack = () => {
        navigation.goBack()
      
     }
       //import { LoginComponent } from '../LoginComponent';
     
    return (
        
    <ScrollView>
      
    <View style = {styles.root}>
      <Image  source={Logo} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
      secureTextEntry={false}/>
      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}/>
      <CustomButton 
      text="Register now"
      onPress = {onRegisterPressed}
      type="PRIMARY"
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
      <CustomButton 
      text="Back to Login"
      onPress = {onGoBack}
      type="PRIMARY"
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
      
    </View>
    </ScrollView>
    );
}