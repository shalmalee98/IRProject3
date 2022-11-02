import React, {useState,useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import shortid from 'shortid';
import styles from './readingListStyle';
import {getIllustration, getBackground} from '../../utils';
import {AuthContext} from '../../context';
import {CourseDetail} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import * as RNFS from 'react-native-fs';

MaterialIcons.loadFont().then();
//const categories = state?.courses;

export function readingList({route, navigation}) {
  const course= {
    "name": 'Going Deeper with convolutions',
    'levels':{
"1":[
{
'title': 'Long short-term memory',
'link':''
},
{
'title': 'ImageNet Large Scale Visual Recognition Challenge',
'link':''
},
]
    }
  }
  // console.log(course.levels["1"]);
  const {state, dispatch} = useContext(AuthContext);
  const [typeIcon, setType] = useState("check-circle-outline");
  const [color, setColor] = useState("#292929");
  const [data, setData] = useState({
    tabs: ['List'],
    activeTab: 'List',
    displayedCategories: course.levels["1"],
  });
  
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

  const handleNavigation = (route, param1, param2) => {
    if(param1.substr(param1.length - 3) != "pdf")
      Linking.openURL(param1)
    else
      navigation?.navigate('SingleStack', {screen: route, params: {url: param1, title: param2}});
  };
  const handleTabPress = (tab, index) => {
    let {activeTab, displayedCategories} = data;
    activeTab = tab;

    if (index === 0) {
        // displayedCategories = categories?.filter(
        //   (category) => category.isLevel == "easy");
        displayedCategories = course.levels["1"];
      } else if (index === 1) {
      // displayedCategories = categories?.filter((category) => category.isLevel == "medium");
      displayedCategories = course.levels["2"];
    } else if (index === 2) {
    //   displayedCategories = categories?.filter((category) => category.isLevel == "hard");
    displayedCategories = course.levels["3"];
     } 

    setData({...data, activeTab, displayedCategories});
  };

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <View style={styles.coursesListContainer}>
      <View style={[styles.bgContainer, getBackground(course?.id)]}>
        <ImageBackground
          source={getIllustration(course?.id)}
          style={styles.illustrationImage}
          imageStyle={styles.illustrationBackgroundStyle}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => handleBackButton()}>
            <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
          </TouchableOpacity>
        </ImageBackground>
      </View>   
      <View style={styles.coursesListContent}>
      <Text style={styles.coursesListTitle}>
          {course?.name+ " "}
   
        </Text>
        <View style={styles.tabHeaderContainer}>
      {data?.tabs?.map((tab, index) => (
        <TouchableOpacity
          key={shortid.generate()}
          style={styles.singleTab}
          onPress={() => handleTabPress(tab, index)}>
          <Text
            style={[
              styles.tabText,
              data?.activeTab === tab
                ? styles.activeTabText
                : styles.inActiveTabText,
            ]}>
            {tab}
          </Text>
          {data?.activeTab === tab ? (
            <View style={styles.activeTabBottom}></View>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
    <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.tabBodyContainer}>
            {data?.displayedCategories?.map((courseDetail, index) => (
            //  <CourseDetail courseDetail={category} roadmapName = {course?.name} level = {data?.activeTab} navigation={navigation}/>
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
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.courseInfo} onPress={()=> handleNavigation('viewPdf', courseDetail?.link, courseDetail?.title)}>
            {courseDetail?.title}
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
