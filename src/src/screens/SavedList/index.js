import React, {useState,useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  NativeModules,
  LogBox
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import shortid from 'shortid';
import styles from './savedStyle.js';
import {getIllustration, getBackground} from '../../utils';
import {AuthContext} from '../../context';
import {CourseDetail} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect } from 'react';
import * as RNFS from 'react-native-fs';

MaterialIcons.loadFont().then();

export function SavedList({route, navigation}) {
  var PSPDFKit = NativeModules.PSPDFKit;
  const {state, dispatch} = useContext(AuthContext);
  const [savedFiles, setFiles] = useState([]);

  const handleBackButton = () => {
    navigation?.goBack();
  };
useEffect(() => {
  LogBox.ignoreLogs(['Each child in a list should have a unique \"key\" prop']);
RNFS.readDir(RNFS.DocumentDirectoryPath+'/northstar').then(files => {
  //console.log(RNFS.DocumentDirectoryPath+'/abc')
  //'https://arxiv.org/pdf/2102.04883.pdf'
  setFiles(files)
})
.catch(err => {
  setFiles([])
  console.log(err.message, err.code);
});
},[]);

const handleNavigation = (route, param1, param2) => {
  console.log(param2)
  navigation?.navigate('SingleStack', {screen: route, params: {title: param1, dirPath: param2}});
};

const reloadFiles = () => {
  RNFS.readDir(RNFS.DocumentDirectoryPath+'/northstar').then(files => {
    console.log(files)
    setFiles(files)
  })
  .catch(err => {
    setFiles([])
    console.log(err.message, err.code);
  });
}
  return (
    <View style={styles.coursesListContainer}>
      <View style={[styles.bgContainer]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => handleBackButton()}>
            <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
          </TouchableOpacity>
      </View>   
      <View style={styles.coursesListContent}>
      <Text style={styles.coursesListTitle} onPress={() => reloadFiles()}>
          Saved Papers   <MaterialIcons name="check-circle" size={25} color="green" />
        </Text>
    <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.tabBodyContainer}>
            {savedFiles?.map((file, index) => (
        <View style={styles.singleCourse}>
        <ImageBackground
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/235/235251.png',
          }}
          style={styles.courseImage}
          imageStyle={styles.courseBackgroundStyle}>
        </ImageBackground>
        <View style={styles.courseRightContainer}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.courseInfo} onPress={()=> handleNavigation('viewLevels', file.name, RNFS.DocumentDirectoryPath+`/`+file.name)}>
           {file.name}
          </Text>    
          </View> 
        </View>
        ))}
      </View>
        </ScrollView>
      </View>
    </View>
  );
}
