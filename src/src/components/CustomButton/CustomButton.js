import React,{useState} from 'react';
import {
  View, Button,Text,Pressable, TextInput, Image, StyleSheet, useWindowDimensions
} from 'react-native';

const CustomButton = ({onPress,text,type="PRIMARY",bgColor,fgColor}) => {
  return (
    <Pressable onPress={onPress} style = {[
        styles.container, 
        styles['container_${type}'],
        bgColor ? {backgroundColor: bgColor} : {}
        ]}>
        <Text style = {[styles.text,
            styles['text_${type}'],
            fgColor ? {color: fgColor} : {}
            ]}>{text}</Text>
    </Pressable>
  )
 }
 const styles = StyleSheet.create({
     container:{
         
         backgroundColor: '#3B71F3',
         width: '100%',

         padding: 15,
         marginVertical: 5,

         alignItems: 'center',
         borderRadius: 5,
     },
     container_PRIMARY:{
        backgroundColor: '#3B71F3',
     },
     container_TERTIARY: {
        backgroundColor: 'white',
     },
     text_TERTIARY: {
         color:'gray',
     },
     text: {
         fontWeight: 'bold',
         color: 'white',
     }
 })
 export default CustomButton