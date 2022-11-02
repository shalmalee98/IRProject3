import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
pdf: {
  flex:1,
  // width:Dimensions.get('window').width,
  // height:Dimensions.get('window').height,
  width: '100%',
  height: '100%',
},
coursesListContainer: {
  flex: 1,
  backgroundColor: '#FFFFFF',
},
bgContainer: {
  width: '100%',
  height: '5%',
},
backButton: {
  position: 'absolute',
  top: 16,
  left: 16,
  backgroundColor: '#eee',
  height: 32,
  width: 32,
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
searchContainer: {
  borderColor: '#ddd',
  borderWidth: 1,
  marginBottom: 30,
  borderRadius: 5,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 5,
},
searchInput: {
  height: 40,
  fontSize: 15,
  marginLeft: 15,
  width: '80%',
},
dropdownContainer: {
  borderLeftColor: '#ddd',
  borderLeftWidth: 1,
  height: 40,
  width: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
container: {
backgroundColor: 'white',
position: 'relative',
borderColor: '#ddd',
borderWidth: 1,
marginBottom: 30,
borderRadius: 5,
overflow: 'visible'
},
icon:{
  position:'absolute',
  marginTop: 12,
  marginLeft: 8
},
centeredView: {
  //maxHeight: '50%',
  flex: 0.5,
  justifyContent: "center",
  alignItems: "center",
  marginTop: '30%',
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  backgroundColor: "#4CC174"
},
buttonOpen: {
  marginTop: '2%',
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  backgroundColor: "#2196F3",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},
closeIcon: {
  marginLeft: '75%',
  color: '#A93444'
},
buttonIcon: {
  marginRight: '3%',
}
});


export default styles;
