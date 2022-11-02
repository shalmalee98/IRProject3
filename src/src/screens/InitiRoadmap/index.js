import React, {useState,useContext,useEffect} from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import shortid from 'shortid';
import styles from './initRoadmapStyle';
import {AuthContext} from '../../context';
import Tags from '../../components/TagComponent/Tags';
import NewTagModal from '../../components/TagComponent/NewTagModal';

MaterialIcons.loadFont().then();
Ionicons.loadFont().then();

const TAGS = [
];

export function initRoadmap({route, navigation}) {

  const [label, setLabel] = useState("");
  const [level, setLevel] = useState("");

  const [modalVisible, setModal] = useState(false);

  const {state, dispatch} = useContext(AuthContext);

  openModal = () => {
    setModal(true);
};
  closeModal = () => {
    setModal(false);
};
  onSubmitNewTag = (tag) => {
  _tagsComponent && _tagsComponent.onSubmitNewTag(tag);
  TAGS.push(tag);
  //console.log(TAGS);
};

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const handleNavigation = (route, param1, param2, param3) => {
    navigation?.navigate('SingleStack', {screen: route, params: {roadmapLabel: param1, levels: param2, tags: param3}});
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
          Initialise Roadmap
        </Text>
      </View>   
      <View style={styles.coursesListContent}>

     <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
           <View style={[styles.tabBodyContainer]}>
           <View style={styles.seContainer}>  
    <Text style = {styles.inputHeader}>Title</Text>          
    <View style={styles.inputSegment}>
           <TextInput
           placeholder="Title for the roadmap"
           style={styles.searchInput}
           onChangeText={(value) => setLabel(value)}
           value={label}/>
           </View>
           </View>

    <View style={styles.seContainer}>
           <Text style = {styles.inputHeader}>Levels</Text>
           <View style={styles.inputSegment}>
           <TextInput
           placeholder="Number of levels to create"
           style={styles.searchInput}
           onChangeText={(value) => setLevel(value)}
           value = {level}/>
           </View>
      </View>

      <View style={styles.seContainer}>
           <Text style = {styles.inputHeader}>Relevant Tags</Text>
           <View style={styles.container}>
        <StatusBar hidden={true} />

        <NewTagModal
          visible={modalVisible}
          onSubmit={(tag) => onSubmitNewTag(tag)}
          onClose={() => closeModal()}
        />

        <Tags
          ref={component => _tagsComponent = component }
          tags={TAGS}
          onPressAddNewTag={() => openModal()}
        />

      </View>
      </View>
</View>
        </ScrollView> 
        <View style={styles.createButton}><TouchableOpacity onPress={() => handleNavigation('createRoadmap', label, level, TAGS)}>
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={['#7F36C2','#935DC5', '#AA91C0']}
        style={styles.gradBox}>
          <Text style= {styles.createText}>Next</Text>  
          <MaterialIcons style = {styles.icon1} name="arrow-forward" size={15} color="white"/>
          </LinearGradient>         
          </TouchableOpacity >
                </View>
    </View>
    
    </View>
  );
}
