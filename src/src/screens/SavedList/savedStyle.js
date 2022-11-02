import {StyleSheet} from 'react-native';
import ScaledSheet from 'react-native-scaled-sheet';

const styles = ScaledSheet.create({
  coursesListContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgContainer: {
    width: '100%',
    height: '5%',
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
  coursesListContent: {
    top: '9%',
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
  },
  coursesListTitle: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 15,
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
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    paddingVertical: 7,
    marginBottom: 30,
    borderRadius: 5,
    paddingHorizontal: 7,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  courseImage: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  courseBackgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    borderRadius: 5,
  },
  playButton: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%',
    left: '30%',
  },
  courseRightContainer: {display: 'flex', width: '100%'},
  bookmarkIcon: {
    marginLeft: '63%',
  },
  courseInfo: {
    fontWeight: 'bold',
    width: '69%',
    marginBottom: 'auto',
    fontSize: 25,
  },
  progressBarContainer: {
    backgroundColor: '#EEEDF4',
    height: 10,
    width: '69%',
    borderRadius: 20,
  },
  progressBarItem: {
    backgroundColor: '#D9864E',
    height: 10,
    borderRadius: 20,
  },
  sectionScrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 60
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  homeContent: {
    height: '100%',
    padding: 16,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    alignItems: 'center',
  },
  profilePhotoImage: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
    marginLeft: 5,
  },
  learnText: {
    fontSize: 16,
    marginBottom: 30,
    opacity: 0.6,
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
    marginLeft: 5,
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
  tabHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 30,
  },
  scrollViewContent:{
    paddingTop: 10,
    paddingBottom: 40
  },
  singleTab: {
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeTabText: {
    opacity: 0.9,
  },
  inActiveTabText: {
    opacity: 0.3,
  },
  activeTabBottom: {
    height: 8,
    width: 8,
    backgroundColor: '#B79069',
    borderRadius: 50,
  },
  tabBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    width: '43%',
    borderRadius: 12,
    marginBottom: 30,
  },
  categoryShortHeight: {
    height: 160,
  },
  categoryLongHeight: {
    height: 200,
  },
  categoryTitletext: {
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.9,
  },
  categoryNumbertext: {
    fontSize: 13,
  },
  illustrationImage: {
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    width: '100%',
  },
  backgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 55,
  },
  transparentBg: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  bg0: {
    backgroundColor: '#FDAAB0',
  },
  bg1: {
    backgroundColor: '#E296DE',
  },
  bg2: {
    backgroundColor: '#9E7CF4',
  },
  bg3: {
    backgroundColor: '#96D8CA',
  },
  createButton :{
    marginBottom: 85,
    marginLeft: '30%',
    width: '40%',
    justifyContent: 'center'
  },
  createText: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  gradBox :{
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 22,
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
  },
  icon1 : {
    marginLeft: -5,
    marginRight: 10,
  },
  stars: {
    marginLeft: '65%'
  }
});

export default styles;
