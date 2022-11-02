import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import shortid from 'shortid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './roadmapStyle.js';
import FriesMenu from '../../assets/icons/FriesMenu.png';
import ProfilePhoto from '../../assets/photos/photo-1494790108377-be9c29b29330.jpg';
import {getIllustration, getBackground} from '../../utils';
import {AuthContext} from '../../context';

MaterialIcons.loadFont().then();
Ionicons.loadFont().then();
MaterialCommunityIcons.loadFont().then();

const sample = [
  {
    id: 0,
    title: 'Deep Learning',
    number: 9,
    isCreated: false,
    isLearning: true,
    creator: 'J Xiong',
  },
];

export function MyRoadmaps({navigation}) {
  const {state, dispatch} = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchApiCall();
},[])

  const [data, setData] = useState({
    tabs: ['Learning', 'Created'],
    activeTab: 'Learning',
    displayedCategories: categories,
  });

  const handleTabPress = (tab, index) => {
    let {activeTab, displayedCategories} = data;
    activeTab = tab;

    if (index === 0) {
        displayedCategories = categories?.filter((category) => category.author != 'Jinjun Xiong');
      } else if (index === 1) {
      displayedCategories = categories?.filter((category) => category.author === 'Jinjun Xiong');
    } 

    setData({...data, activeTab, displayedCategories});
  };

  const handleNavigation = (route, params) => {
    navigation?.navigate('SingleStack', {screen: route, params});
  };

  const handleDrawer = () => {
    navigation?.openDrawer();
  };
  const fetchApiCall = async () => {
    try {
     const response = await fetch("https://project700-backend-neo.herokuapp.com/roadmap", {
      "method": "GET",
    })
    const json = await response.json();
    setCategories(json.roadmaps);
    //console.log(json)
  } catch (error) {
        console.log(error);
      }
    console.log("Inside fetch")
  }
  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContent}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => handleDrawer()}>
          <Image source={FriesMenu} />
          <Text style={styles.nameText}>My Roadmaps</Text>
          <Image source={ProfilePhoto} style={styles.profilePhotoImage} />
        </TouchableOpacity>
        <View style={styles.nameContainer}>
         
        </View>
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
            {data?.displayedCategories?.map((category, index) => (
              <TouchableOpacity
                key={shortid.generate()}
                style={[
                  styles.categoryContainer,
                    styles.categoryShortHeight,
                  getBackground(Math.floor(Math.random() * (3))),
                ]}
                onPress={() => handleNavigation('coursesList', category)}>
                <ImageBackground
                  source={getIllustration(Math.floor(Math.random() * (3)))}
                  style={styles.illustrationImage}
                  imageStyle={styles.backgroundStyle}>
                  <View style={styles.transparentBg}>
                    <Text style={styles.categoryTitletext}>
                      {category?.name}
                    </Text>
                    <MaterialCommunityIcons name='account-edit'size={18} color="#000">
                    <Text style={styles.categoryNumbertext}>
                      {category?.author}
                      </Text>
                      </MaterialCommunityIcons> 
                      <Text style={styles.categoryNumbertext}>
                       {category?.rating}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>            
            ))}
            {data?.activeTab === "Created" ? (
            <View style={styles.addButton}><TouchableOpacity onPress={() => handleNavigation('initRoadmap', null)}>
                <Ionicons name="add-circle" size={25} color="#000" />
              </TouchableOpacity><Text style={styles.addButtontext}>
                  Create New
                </Text></View>
        ) : null}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
