import React, {useState, useContext, useEffect, useRef,componentDidUpdate} from 'react';
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
import styles from './homeStyle.js';
import FriesMenu from '../../assets/icons/FriesMenu.png';
import ProfilePhoto from '../../assets/photos/photo-1494790108377-be9c29b29330.jpg';
import {getIllustration, getBackground} from '../../utils';
import {AuthContext} from '../../context';
import axios from "axios";
import * as RNFS from 'react-native-fs';

MaterialIcons.loadFont().then();
Ionicons.loadFont().then();
MaterialCommunityIcons.loadFont().then();

const sample = [
  {
    id: 0,
    title: 'Deep Learning',
    number: 9,
    isTrendy: false,
    isBestRated: true,
    creator: 'J Xiong',
  },
];

export function Home({route,navigation}) {
  const {state, dispatch} = useContext(AuthContext);
  const [rmData, setRmData] = useState([]);
  const {token, allData, email} = route?.params
  const [categories, setCategories] = useState(allData);
  // console.log("Home "+token)

  useEffect(() => {

  //   RNFS.unlink(`${RNFS.DocumentDirectoryPath}/northstar/Deep Learning Evolution`).then(res => {
  // })
  // .catch(err => {
  //     console.log(err.message, err.code);
  // });
},[])

//console.log(categories[0][0].author)
  const [data, setData] = useState({
    tabs: ['New', 'Trendy', 'Best rated'],
    activeTab: 'New',
    displayedCategories: categories,
  });

  const handleTabPress = (tab, index) => {
 
    let {activeTab, displayedCategories} = data;
    activeTab = tab;

    if (index === 0) {
      displayedCategories = categories;
    } else if (index === 1) {
      displayedCategories = categories?.filter((category) => category.isTrendy);
    } else if (index === 2) {
      displayedCategories = categories?.filter(
        (category) => category.isBestRated,
      );
    }

    setData({...data, activeTab, displayedCategories});
  };

  const handleNavigation = async (route, param1, param2) => {
     try {
     const response = await fetch("https://project700-backend-neo.herokuapp.com/roadmap/papers"+param1.uid, {
      method: "GET"
    })
    const json = await response.json();
    const result = json.roadmap_papers;
    navigation?.navigate('SingleStack', {screen: route, params:{course: param1, email: param2, papers: result, token: token}});
  } catch (error) {
        console.log(error);
      }
  };

  const handleDrawer = () => {
    navigation?.openDrawer();
  };
  
  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContent}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => handleDrawer()}>
          <Image source={FriesMenu} />
          <Image source={ProfilePhoto} style={styles.profilePhotoImage} />
        </TouchableOpacity>
        <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Hi</Text>
          <Text style={styles.usernameText}>{state?.username}</Text>
        </View>
        <Text style={styles.learnText}>Learn something new today!</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={23} color="#808080" />
          <TextInput
            placeholder="Search for a topic"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.dropdownContainer}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={23}
              color="#808080"
            />
          </TouchableOpacity>
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
       
          <View style={styles.tabBodyContainer}>
            {data?.displayedCategories?.map((category, index) => (
              <TouchableOpacity
                key={shortid.generate()}
                style={[
                  styles.categoryContainer,
                  styles.categoryShortHeight,
                  getBackground(Math.floor(Math.random() * (3))),
                ]}
                onPress={() => handleNavigation('coursesList', category, email)}>
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
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
