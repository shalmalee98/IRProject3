import {StyleSheet, Dimensions} from 'react-native';
//import ScaledSheet from 'react-native-scaled-sheet';
import {ms, ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  coursesListContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgContainer: {
    width: '100%',
    height: '30%',
  },
  illustrationImage: {
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    width: '100%',
  },
  illustrationBackgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  backButton: {
    position: 'absolute',
    top: '16@ms',
    left: '16@ms',
    backgroundColor: '#eee',
    height: '32@ms',
    width: '32@ms',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coursesListContent: {
    top: '25%',
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopLeftRadius: '50@ms',
    borderTopRightRadius: '50@ms',
    paddingTop: '30@ms',
  },
  coursesListTitle: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: '16@ms',
    marginBottom: '15@ms',
  },
  scrollViewContent: {
    paddingTop: 15,
    flex: 1,
  },
  coursesListWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  singleCourse: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: '1@ms',
    },
    shadowOpacity: '0.18@ms',
    shadowRadius: '1.0@ms',
    elevation: 1,
    paddingVertical: '7@ms',
    marginBottom: '30@ms',
    borderRadius: 5,
    paddingHorizontal: '7@ms',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  courseImage: {
    height: '90@ms',
    width: '90@ms',
    marginRight: '10@ms',
  },
  courseBackgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    borderRadius: '5@ms',
  },
  playButton: {
    height: '30@ms',
    width: '30@ms',
    backgroundColor: '#fff',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%',
    left: '30%',
  },
  courseRightContainer: {display: 'flex', width: '85%'},
  saveIcon: {
    marginLeft: '63%',
  },
  saveIcon2: {
    marginLeft: '85%',
  },
  bookmarkIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseInfo: {
    fontWeight: 'bold',
    width: '69%',
    marginBottom: 'auto',
    fontSize: '14@ms',
  },
  progressBarContainer: {
    backgroundColor: '#EEEDF4',
    height: '10@ms',
    width: '69%',
    borderRadius: '20@ms',
  },
  progressBarItem: {
    backgroundColor: '#D9864E',
    height: '10@ms',
    borderRadius: '20@ms',
  },
  progressBarItemCompleted: {
    backgroundColor: '#0BCC79',
    height: '10@ms',
    borderRadius: 20,
  },
  sectionScrollContainer: {
    paddingHorizontal: '16@ms',
    paddingBottom: '60@ms',
  },
  markText: {
    fontSize: '8@ms',
    marginLeft: '58%',   
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
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeIcon: {
    marginLeft: '75%',
    color: 'red'
  },
});


export default styles;
