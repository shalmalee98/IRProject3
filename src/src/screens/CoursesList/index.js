import React, {useState,useContext, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  LogBox,
  Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import shortid from 'shortid';
import styles from './coursesListStyle';
import {getIllustration, getBackground} from '../../utils';
import {AuthContext} from '../../context';
import {CourseDetail} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import axios from 'axios'

MaterialIcons.loadFont().then();

const Data = {
    "id": "621e85042ed8daf4a540a3e6",
    "name": "Machine Learning Basics",
    "rating": 4,
    "author": "Tanuja",
    "tags": [
        "ML",
        "DeepLearning"
    ],
    "levels": {
        "1": [
            {
                "title": "Intro to ML",
                "link": "https://arxiv.org/pdf/1511.06434.pdf"
            },
            {
                "title": "Intro review to DL",
                "link": "https://arxiv.org/pdf/1511.06434.pdf"
            }
        ],
        "2": [
            {
                "title": "Intro to CNN",
                "link": "https://arxiv.org/pdf/1511.06434.pdf"
            }
        ],
        "3": [
            {
                "title": "Adam: Stochastic Optimizer",
                "link": "https://arxiv.org/pdf/1511.06434.pdf"
            }
        ]
    }
}
export function coursesList({route, navigation}) {

  const [levelData, setLevelData] = useState(null)
  const {course, email, papers,token} = route?.params;
  // console.log("Paper list"+ papers)
  const [roadmapData, setRoadmapData] = useState(papers)
 

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Sending \`onAnimatedValueUpdate\` with no listeners registered.']);
    LogBox.ignoreLogs(['Each child in a list should have a unique \"key\" prop']);
    processPapers(roadmapData); 
},[])
  useEffect(() => { setLevelData(levelData => levelData) }, [levelData])
  // console.log(levelData.levels["1"])
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({
    tabs: ['Level 1', 'Level 2', 'Level 3'],
    activeTab: 'Level 1',
    displayedCategories: levelData === null ? null: levelData.levels["1"],
  });
// console.log(course)
// console.log(roadmapData)
  const ratings = []
  for (let i = 1; i <= parseInt(course.rating); i++){
    ratings.push("i");
  }

  const processPapers = (data) => {
    level1List = []
    level2List = []
    level3List = []
    data.map((category) => {
      if(category.level === "1"){
        level1List.push( {
          "paper_id": category.uid,
          "title": category.name,
          "link": category.link,
          "difficulty": category.diffculty,
          "related_works": category.related_works,
          "referenced_works": category.referenced_works
        });
      }
      if(category.level === "2"){
        level2List.push( {
          "paper_id": category.uid,
          "title": category.name,
          "link": category.link,
          "difficulty": category.diffculty,
          "related_works": category.related_works,
          "referenced_works": category.referenced_works
        });
      }
      if(category.level === "3"){
        level3List.push( {
          "paper_id": category.uid,
          "title": category.name,
          "link": category.link,
          "difficulty": category.diffculty,
          "related_works": category.related_works,
          "referenced_works": category.referenced_works
        });
      }
    });
  const sorter = (a, b) => a.diffculty > b.diffculty ? 1 : -1;
   level1List.sort(sorter);
   level2List.sort(sorter);
   level3List.sort(sorter);
    const tData = {
      "levels":{
        "1": level1List,
        "2": level2List,
        "3": level3List
      }
    }

    setLevelData(tData);
  }
  const handleTabPress = (tab, index) => {
    let {activeTab, displayedCategories} = data;
    activeTab = tab;

    if (index === 0) {
        // displayedCategories = categories?.filter(
        //   (category) => category.isLevel == "easy");
        displayedCategories = levelData.levels["1"];
      } else if (index === 1) {
      // displayedCategories = categories?.filter((category) => category.isLevel == "medium");
      displayedCategories = levelData.levels["2"];
    } else if (index === 2) {
    //   displayedCategories = categories?.filter((category) => category.isLevel == "hard");
    displayedCategories = levelData.levels["3"];
     } 

    setData({...data, activeTab, displayedCategories});
  };

  const handleNavigation = (route, param1, param2) => {
    navigation?.navigate('SingleStack', {screen: route, params:{roadmap: param1, papers: param2}});
  };
  const handleBackButton = () => {
    navigation?.goBack();
  };

  const handleLearning = async () => {  
    console.log(course?.uid)
      const postData = {
      "learning_list": course?.uid,
    };
    const response = await axios.post(`https://project700-backend-neo.herokuapp.com/user/learning_list`, postData,{params: {user_email: email}},
    {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    });
        try{
        if (response.status === 200) {
          console.log(` You have created: ${JSON.stringify(response.data)}`);
          Alert.alert("Success", "Added to active learning roadmaps")
        } else {
          throw new Error("An error has occurred");
        }
      } catch (error) {
       console.log("An error has occurred");
      }
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
          {ratings?.map((index) => (
          <MaterialIcons style={styles.stars} name="stars" size={15} color="orange" />
          ))}
          </Text>
          <TouchableOpacity
            style={styles.learnButton}
            onPress={() => handleLearning()}>
            <MaterialIcons name="playlist-play" size={25} color="#000" />
            <Text>Start Learning</Text>
          </TouchableOpacity>
        
        <View style={styles.tabHeaderContainer}>
      {data?.tabs?.map((tab, index) => (
        <TouchableOpacity
          //key={shortid.generate()}
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
            {data?.displayedCategories?.map((category, index) => (
             <CourseDetail courseDetail={category} roadmapName = {course?.name} level = {data?.activeTab} navigation={navigation}/>
             ))}
          </View>
     
        {/* <FlatList
          data={state?.courses}
          keyExtractor={() => shortid.generate()}
          renderItem={renderCourseList}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.sectionScrollContainer}
        /> */}
        </ScrollView>
          <View style={styles.createButton}><TouchableOpacity onPress={() => handleNavigation('updateInitRoadmap', course,roadmapData)}>
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={[ '#545352', '#737271', '#B3B1AF']}
        style={styles.gradBox}>
          <Text style= {styles.createText}>Edit Roadmap</Text>  
          <MaterialIcons style = {styles.icon1} name="mode-edit" size={15} color="white"/>
          </LinearGradient>         
          </TouchableOpacity >
                </View>
        
      </View>
    </View>
  );
}
