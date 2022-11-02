import React, {useState,useContext,useEffect} from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  LogBox
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import shortid from 'shortid';
import styles from './updateRoadmapStyle';
import DraggableFlatList, {ScaleDecorator} from 'react-native-draggable-flatlist'
import {AuthContext} from '../../context';
import axios from 'axios'

MaterialIcons.loadFont().then();
Ionicons.loadFont().then();

export function updateRoadmap({route, navigation}) {

  const {roadmapLabel, levels, tags, roadmap} = route.params;
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");
  const [hintList, setHintList] = useState([{"name":" ", "link":" "}])
  const [modalVisible, setModalVisible] = useState(false)
  const arr =[]
  var i = 1
  for (var j = 1; j <= levels; j++) {
   arr.push(String(j));
}
let l1 = []
  roadmap.map((category) => {
      l1.push( {
        "key": i,
        "label": category.name,
        "link": category.link,
        "level": category.level,
        "new": false
      });
      i++;
  });

  var existingArray = [...l1];

  const [initialElements, changeEl]  = useState(existingArray);
  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(i+1);
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({
    tabs: arr,
    activeTab: '1',
    tabIndex: 0,
    displayedCategories: exampleState,
  });
const filterHints = async (value)=> {
    
    setLabel(value)
    if(value != ""){
    let response = await fetch("https://api.openalex.org/autocomplete/works?q="+value, {
      // let response = await fetch("https://api.openalex.org/works?search="+value+"&per-page=100", {
      method: "GET",
      headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    });
    const filterData = await response.json();
    //console.log(filterData)
    let list = filterData.results
    // filterData.results?.map((category) => {
    //     list.push( {
    //       "name": category.display_name,
    //       "link": category.external_id
    //     });
    // });
    if(list.length > 0){
      setHintList(list);
      setModalVisible(true)
    }
    else if(list.length < 0){
      setModalVisible(false)
    }
    }
    else{
      setHintList([]);
      setModalVisible(false)
    }
  };
   useEffect(() => { 
       if(label == "")
        setModalVisible(false)
    }, [label])

  const onPaperSelected = (paper) =>{
    setModalVisible(false)
    setLabel(paper.display_name)
    setUrl(paper.external_id)
  }

  const addElement = () => {
    var newArray = [...initialElements , {key : idx, label: (label), link: url, level: data?.activeTab, new: true}];
    incr(idx + 1);
    setExampleState(newArray);
    changeEl(newArray);
  }

  const removeElement = (key) => {
    var newArray = [...exampleState];
    var i = exampleState.findIndex(item => item.key === key)
    newArray.splice(i, 1);
    setExampleState(newArray);
    changeEl(newArray);
  }

  useEffect(() => { 
       LogBox.ignoreLogs(['Failed child context type: Invalid child context `virtualizedCell.cellKey` of type `number` supplied to `CellRenderer`, expected `string`.']);
       handleTabPress(data?.activeTab, data?.tabIndex);
       setLabel("");
       setUrl("");
    }, [exampleState])

  const handleTabPress = (tab, index) => {
    let {activeTab, tabIndex, displayedCategories} = data;
    activeTab = tab;
    tabIndex = index;
    if (index === 0) {
        displayedCategories = exampleState?.filter(
          (category) => category.level === "1");
      } else if (index === 1) {
      displayedCategories = exampleState?.filter((category) => category.level === "2");
    } else if (index === 2) {
      displayedCategories = exampleState?.filter((category) => category.level === "3");
    } 
    
    setData({...data, activeTab, tabIndex, displayedCategories});
  };

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const filterPapers = (level) => {
    const levelList= [];
    exampleState?.filter((category) => {
      if(category.level === level){
        levelList.push( {
          "title": category.label,
          "link": category.link
        });
      }
    });
    return levelList;
  }
  const createRequest = async () => {
   const postData = {
      "name": roadmapLabel,
      "rating": 0,
      "author": "Jinjun Xiong",
      "email": "jinjun@gmail.com",
      "tags": tags,
      "levels": levels,
      "public": true
    };
        const response = await axios.put(`https://project700-backend-neo.herokuapp.com/roadmap/?roadmap_id=`, postData);
        try{
        if (response.status === 200) {
          console.log(` You have created: ${JSON.stringify(response.data)}`);
        } else {
          throw new Error("An error has occurred");
        }
      } catch (error) {
       console.log("An error has occurred");
      }

      for (var level = 1; level <= levels; level++) {
      const levelList = filterPapers(level);
      levelList?.map((paper, index) => {
        const postPaper =  {
          "name": paper.title,
          "publish": today,
          "roadmaps":[{
            "rm": roadmapLabel,
            "level": String(level),
            "diffculty": String(index+1)
          }
          ],
          "link":paper.link,
        }
        //console.log(postPaper);
        axios.put("https://project700-backend-neo.herokuapp.com/paper",postPaper)
      .then(res => {
        console.log(` You have updated a paper: ${JSON.stringify(res)}`);
      })
      .catch(err => {
          console.log(err)
      })  
      });
  }
  navigation?.navigate('DrawerStack', {screen: 'MyRoadmaps'});
  }

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem, styles.paperBodyContainer     
          ]}
        >
             <View style={[styles.singleCourse, { backgroundColor: isActive ? "#F3EEEF" : "white" },]}>
              {/* <ImageBackground
                source={{
                  uri: 'https://www.kindpng.com/picc/m/160-1608792_circle-document-icon-png-transparent-png.png',
                }}
                style={[styles.courseImage]}
                imageStyle={[styles.courseBackgroundStyle]}>
              </ImageBackground> */}

              <View style={styles.courseRightContainer}>
              <TouchableOpacity onPress={() => removeElement(item.key)}>
              <MaterialIcons
                name="cancel"
                size={20}
                color="#292929"
                style={styles.bookmarkIcon} />           
          </TouchableOpacity>
  
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.courseInfo}>
                  {item.label}
                </Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.courseLink}>
                  {item.link}
                </Text>
              </View>
              </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (   
    <View style={styles.coursesListContainer}>
      <View style={[styles.bgContainer]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => handleBackButton()}>
            <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
          </TouchableOpacity>
          <Text style={styles.coursesListTitle}>
          Update Roadmap
        </Text>
      </View>   
      <View style={styles.coursesListContent}>

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
            Level {tab}
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
           <View style={[styles.tabBodyContainer]}>
        <DraggableFlatList
      data={data?.displayedCategories}
      onDragEnd={({ data }) => setExampleState(data)}
      keyExtractor={(item) => item.key}
      renderItem={renderItem}/>
</View>

    <View style={styles.searchContainer}>
    <View style={styles.seContainer}>
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={[ '#545352', '#737271', '#B3B1AF']}
        style={{
          borderRadius: 15,
        }}
      >
                    <TextInput
           placeholder="Title for the paper"
           style={styles.searchInput}
           onChangeText={(value) => filterHints(value)}
           value={label}/>
           </LinearGradient>
                    {modalVisible === true? (
                    // <ScrollView>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <FlatList
                              data={hintList}
                              renderItem={({item, index}) => (
                                <View style={styles.item}>
                                <TouchableOpacity
                                  onPress={() => onPaperSelected(item)}>
                                   <Text>{item?.display_name}</Text>
                                </TouchableOpacity>
                                 </View>
                              )}
                               keyExtractor={(item, index) => index.toString()}
                  />
      </View>
    </View>
    // </ScrollView>
    ):null}
           </View>
           {modalVisible === false? (
           <View style={styles.seContainer}>
       <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={['#545352', '#737271', '#B3B1AF']}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}
      >
                     <TextInput
           placeholder="Link to the paper"
           style={styles.searchInput}
           onChangeText={(value) => setUrl(value)}
           value = {url}/>
       </LinearGradient>
      </View>):null}
</View>
{modalVisible === false? (
   <TouchableOpacity
     onPress={() => addElement()} >
       <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{x: 1, y: 1 }}
          colors={['#545352', '#737271', '#B3B1AF']}
          style={styles.addButton}
          >
          <Text style={styles.addButtontext}>
            Add Paper
          </Text>
        </LinearGradient>
        </TouchableOpacity>):null}
        </ScrollView> 
        {data?.activeTab == levels  ? (
        <View style={styles.createButton}><TouchableOpacity onPress={() => createRequest()} >
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={['#7F36C2','#935DC5', '#AA91C0']}
        style={styles.gradBox}>
          <Text style= {styles.createText}>Update</Text>  
          <MaterialIcons style = {styles.icon1} name="arrow-forward" size={15} color="white"/>
          </LinearGradient>         
          </TouchableOpacity >
                </View>
        ) : null}
    </View>
    
    </View>
  );
}
