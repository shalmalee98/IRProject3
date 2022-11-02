import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Linking, TextInput,KeyboardAvoidingView,Modal,Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './pdfStyle';
import {AuthContext} from '../../context';
import Pdf from 'react-native-pdf';
import SearchableDropdown from 'react-native-searchable-dropdown';
import axios from "axios";

MaterialIcons.loadFont().then();
MaterialCommunityIcons.loadFont().then();
Ionicons.loadFont().then();

export function viewPdf({route, navigation}) {

  const {state, dispatch} = useContext(AuthContext);
  const [referenceData, setReferenceData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setSelectedItem] = useState({});
  const {url, title, uid, references} = route.params; 
console.log(references)
  //const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
  const source = {uri : url, cache: true};

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const handleConfirmReadingList = async (item) => {
    setModalVisible(!modalVisible)
    levelList = []
    //selectedreadingList?.filter((list) => {
        levelList.push( {
          "title": item.name,
          "link": item.link
        });
   // });

    const postData = {
      "name": title,
      "rating": 0,
      "author": "Tanuja",
      "tags": [],
      "levels": {
        "1": levelList,
        "2": [],
        "3": []
      }
    }
    console.log(postData)
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

  const displayModal = (item) => {
    setSelectedItem(item)
    setModalVisible(true)
  };

  useEffect(() => {
    let list = []
    references?.map((ref) => {
        list.push({
          "name": ref.title,
          "link": ref.url
        });
      });
    setReferenceData(list);
  }, []);

  const handleNavigation = (route, param1, param2) => {
    setModalVisible(false)
    if(param1.substr(param1.length - 3) != "pdf")
      Linking.openURL(param1)
    else
      navigation?.push('SingleStack', {screen: route, params: {url: param1, title: param2}});
  };

  return (
    // <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
    <View style={styles.coursesListContainer}>
    <View style={[styles.bgContainer]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => handleBackButton()}>
          <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
        </TouchableOpacity>
    </View> 
    <View style={{flex:1}}> 
    <Pdf
        source={source}
        onLoadComplete={(numberOfPages,filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages) => {
            console.log(`Current page: ${page}`);
        }}
        // onError={(error) => {
        //     console.log(error);
        // }}
        onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
        }}
        //fitPolicy = {0}
        style={styles.pdf}/>
    <View style= {[styles.container]}> 
      {/* <View style={styles.searchContainer}>
          <Ionicons name="search" size={23} color="#808080" />
          {/* <TextInput
            placeholder="Search for a paper"
            style={styles.searchInput}
          /> */} 
           <Ionicons name="search" size={23} color="#808080" style={styles.icon}/>
          <SearchableDropdown
          placeholder="Search for a paper"
          style={styles.searchInput}
          onTextChange={(text) => console.log(text)}
          // Change listner on the searchable input
          onItemSelect={(item) => displayModal(item)}
          // Called after the selection from the dropdown
          containerStyle={{padding: 5}}
          // Suggestion container style
          textInputStyle={{
            // Inserted text style
            padding: 12,
            paddingLeft: 30,
            borderWidth: 1,
            borderColor: '#ccc',
            //backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            // Single dropdown item style
            padding: 10,
            marginTop: 2,
            //backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            // Text style of a single dropdown item
            color: 'black',
          }}
          itemsContainerStyle={{
            // Items container style you can pass maxHeight
            // To restrict the items dropdown hieght
            maxHeight: '50%',
            minHeight: '20%'
          }}
          items={referenceData}
          // Mapping of item array
          defaultIndex={2}
          // Place holder for the search input
          resetValue={false}
          // Reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          // To remove the underline from the android input
        />
          {/* <TouchableOpacity style={styles.dropdownContainer}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={23}
              color="#808080"
            />
          </TouchableOpacity> */}
   
        </View>
    </View>
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
      <MaterialCommunityIcons name='close-circle' size={20} style={styles.closeIcon} />
      </TouchableOpacity>
        <Text style={styles.modalText}>{item.name}</Text>
        <Pressable
          style={[styles.button]}
          onPress={() => handleConfirmReadingList(item)}
        >
          <Text style={styles.textStyle}><MaterialCommunityIcons name='file-plus-outline' size={20} style={styles.buttonIcon} />Add to List</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonOpen]}
          onPress={()=> handleNavigation('viewPdf', item.link, item.name)}
        >
          <Text style={styles.textStyle}><Ionicons name='md-open-outline' size={18} style={styles.buttonIcon}/>View Paper</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
</View>
  // </KeyboardAvoidingView>
  );
}
