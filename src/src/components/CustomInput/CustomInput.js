import React,{useState} from 'react';
import {
  View, Button, TextInput, Image, StyleSheet, useWindowDimensions
} from 'react-native';

const CustomInput = ({placeholder,value,setValue,secureTextEntry}) => {
  return (
    <View style = {styles.container}>
        <TextInput 
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        autoCapitalize='none'
        secureTextEntry = {secureTextEntry}
        style={styles.input}></TextInput>
    </View>
  )
 }
 const styles = StyleSheet.create({
     container:{
         backgroundColor: 'white',
         padding:7,
         width: '100%',
         height: 30,
         alignContent: 'center',
         borderColor: '#e8e8e8',
         borderWidth: 1,
         borderRadius: 5,
         marginVertical: 10,
     },
     input:{},
 })
 export default CustomInput