import React, { useState,useContext,useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView , Button, useWindowDimensions,Alert} from 'react-native'
import { firebase } from '../../firebase/config'
import {AuthContext} from '../../context';
import {LoginComponent} from '../LoginComponent'

export function SignoutComponent({route, navigation}) {
    const {state, dispatch} = useContext(AuthContext);
    
       useEffect(() => {
        firebase
        .auth()
        .signOut()
        
         Alert.alert(
          "User Logged out",
          "You have been successfully logged out!"
          
        );
       },[]);
     
    return (
        <LoginComponent />
    )
}