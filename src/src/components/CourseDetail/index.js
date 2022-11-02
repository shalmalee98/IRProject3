import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ImageBackground, ScrollView, LogBox, TouchableOpacity, Modal, Pressable ,Linking, ListViewBase} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './courseDetailStyle';
import {AuthContext} from '../../context';
import * as RNFS from 'react-native-fs';
import SelectMultiple from '@horizonlime/react-native-select-multiple'
import axios from 'axios'

MaterialIcons.loadFont().then();

export function CourseDetail({courseDetail, roadmapName, level, navigation}) {


//console.log(courseDetail)
  const {state, dispatch} = useContext(AuthContext);
  const [typeIcon, setType] = useState("check-circle-outline");
  const [color, setColor] = useState("#292929");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedreadingList, setReadingList] = useState([])
  // const readingList = ['Machine Learning: The Basics', 'Handbook of Mathematical Functions', 
  // 'Introduction to Probability','Elements of Information Theory']
  const readingList = []
  courseDetail.related_works.map((category) => {
        readingList.push(category.title);
      })

useEffect(() => {
    LogBox.ignoreLogs(['Possible Unhandled Promise Rejection (id:1)']);
    
},[])

  const handleConfirmReadingList = async () => {
    setModalVisible(!modalVisible)
  //   levelList = []
  //   selectedreadingList?.filter((list) => {
  //       levelList.push( {
  //         "title": list.value,
  //         "link": 'https://arxiv.org/pdf/1805.05052.pdf'
  //       });
  //   });
  //   console.log(levelList);
  //   const postData = {
  //     "name": courseDetail?.title,
  //     "rating": 0,
  //     "author": "Tanuja",
  //     "tags": [],
  //     "levels": {
  //       "1": levelList,
  //       "2": [],
  //       "3": []
  //     }
  //   }
  //   const response = await axios.post(`https://project700-backend-neo.herokuapp.com/roadmap`, postData);
  //   try{
  //   if (response.status === 200) {
  //     console.log(` You have created: ${JSON.stringify(response.data)}`);
  //   } else {
  //     throw new Error("An error has occurred");
  //   }
  // } catch (error) {
  //  console.log("An error has occurred");
  // }
  }
  const onSelectionsChange = (selectedreadingList) => {
    setReadingList(selectedreadingList)
  }
  const handleComplete = () => {
    if (color == "#292929"){
      setColor("green");
      setType("check-circle");
    }
    else{
      setColor("#292929");
      setType("check-circle-outline");
    }
  };

  const handleSave = (url, name) => {
    RNFS.mkdir(RNFS.DocumentDirectoryPath+`/northstar`).then(files => {
      console.log(files)
    RNFS.mkdir(RNFS.DocumentDirectoryPath+`/northstar/`+roadmapName).then(files => {
      RNFS.mkdir(RNFS.DocumentDirectoryPath+`/northstar/`+roadmapName+`/`+level).then(files => {
          console.log("success");
      }).catch(err => {
          console.log(err.message, err.code);
      });
    }).catch(err => {
        console.log(err.message, err.code);
    });
     }).catch(err => {
        console.log(err.message, err.code);
    });
    RNFS.downloadFile({
      fromUrl: url,
      toFile: RNFS.DocumentDirectoryPath+'/'+ roadmapName+'/'+level+'/'+name+'.pdf',
    }).promise.then((r) => {
      console.log("File downloaded to" + RNFS.DocumentDirectoryPath+'/northstar/'+ roadmapName+'/'+level+'/'+name+'.pdf')
      setDone(true)
    });
  };

  const handleNavigation = (route, param1, param2, param3, param4) => {
    if(param1.substr(param1.length - 3) != "pdf")
      Linking.openURL(param1)
    else
      navigation?.navigate('SingleStack', {screen: route, params: {url: param1, title: param2, uid: param3, references: param4}});
  };

  return (
    <View style={styles.singleCourse}>
        <ImageBackground
          source={{
            uri: 'https://ieeexplore.ieee.org/xploreAssets/images/absImages/01491134.png',
          }}
          style={styles.courseImage}
          imageStyle={styles.courseBackgroundStyle}>
          <TouchableOpacity style={styles.playButton} onPress={() => handleComplete()}>
          <MaterialIcons name={typeIcon} size={20} color={color} />
        </TouchableOpacity>
        </ImageBackground>
        <View style={styles.courseRightContainer}>
          <TouchableOpacity onPress={() => handleSave(courseDetail?.link, courseDetail?.title)}> 
          <Text style={styles.markText}>
              <MaterialIcons
                name='save-alt'
                size={20}
                style={styles.saveIcon} />Save</Text>
          </TouchableOpacity>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.courseInfo} onPress={()=> handleNavigation('viewPdf', courseDetail?.link, courseDetail?.title, courseDetail?.paper_id, courseDetail?.referenced_works)}>
            {courseDetail?.title}
          </Text>
          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
      style={styles.button}
      onPress={() => setModalVisible(true)}>
      <Text style={styles.buttonText}><MaterialIcons name='format-align-right' size={20} style={styles.saveIcon} />Related Works</Text>     
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation?.navigate('SingleStack', {screen: 'readingList', params: ''})}>
      <Text style={styles.buttonText}><MaterialIcons name='menu-book' size={20} style={styles.saveIcon2} />Tutorial</Text>     
    </TouchableOpacity>
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <MaterialCommunityIcons name='close-circle' size={20} style={styles.closeIcon} />
          </TouchableOpacity>
            <Text style={styles.modalText}>Related Works</Text>
            <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
            <SelectMultiple
        items={readingList}
        selectedItems={selectedreadingList}
        onSelectionsChange={onSelectionsChange} />
    </ScrollView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleConfirmReadingList()}
            >
              <Text style={styles.textStyle}>Add to Tutorial</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        </View>
      </View>
  );
}
