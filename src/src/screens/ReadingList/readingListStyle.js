import {StyleSheet} from 'react-native';
import {ms, vs, ScaledSheet} from 'react-native-size-matters';

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
    borderRadius: '10@ms',
    width: '100%',
  },
  illustrationBackgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: '0@ms',
  },
  backButton: {
    position: 'absolute',
    top: '16@ms',
    left: '16@ms',
    backgroundColor: '#eee',
    height: '32@ms',
    width: '32@ms',
    borderRadius: '5@ms',
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
    marginLeft: '30@ms',
    fontWeight: 'bold',
    fontSize: '16@ms',
    marginBottom: '15@ms',
  },
  scrollViewContent: {
    paddingTop: '15@ms',
    flex: '1@ms',
  },
  coursesListWrapper: {
    paddingHorizontal: '16@ms',
    paddingBottom: '100@ms',
  },
  singleCourse: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: '1@ms',
    },
    shadowOpacity: 0.18,
    shadowRadius: '1.0@ms',
    elevation: '1@ms',
    paddingVertical: '7@ms',
    marginBottom: '30@ms',
    borderRadius: '5@ms',
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
    height: '30@vs',
    width: '30@ms',
    backgroundColor: '#fff',
    borderRadius: '50@ms',
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
    fontSize: '14@ms',
  },
  progressBarContainer: {
    backgroundColor: '#EEEDF4',
    height: '10@vs',
    width: '69%',
    borderRadius: '20@ms',
  },
  progressBarItem: {
    backgroundColor: '#D9864E',
    height: '10@vs',
    borderRadius: '20@ms',
  },
  sectionScrollContainer: {
    paddingHorizontal: '16@ms',
    paddingBottom: '60@vs'
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  homeContent: {
    height: '100%',
    padding: '16@ms',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '40@vs',
    alignItems: 'center',
  },
  profilePhotoImage: {
    height: '40@vs',
    width: '40@ms',
    borderRadius: '5@ms',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3@ms',
  },
  nameText: {
    fontSize: '20@ms',
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: '20@ms',
    fontWeight: 'bold',
    opacity: 0.7,
    marginLeft: '5@ms',
  },
  learnText: {
    fontSize: '16@ms',
    marginBottom: '30@ms',
    opacity: 0.6,
  },
  searchContainer: {
    borderColor: '#ddd',
    borderWidth: '1@ms',
    marginBottom: '30@ms',
    borderRadius: '5@ms',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5@ms',
  },
  searchInput: {
    height: '40@ms',
    fontSize: '15@ms',
    marginLeft: '5@ms',
    width: '80%',
  },
  dropdownContainer: {
    borderLeftColor: '#ddd',
    borderLeftWidth: 1,
    height: '40@ms',
    width: '40@ms',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20@ms',
    marginLeft: '30@ms',
  },
  scrollViewContent:{
    paddingTop: '10@ms',
    paddingBottom: '40@ms'
  },
  singleTab: {
    marginRight: '20@ms',
    display: 'flex',
    alignItems: 'center',
  },
  tabText: {
    fontSize: '14@ms',
    fontWeight: 'bold',
  },
  activeTabText: {
    opacity: 0.9,
  },
  inActiveTabText: {
    opacity: 0.3,
  },
  activeTabBottom: {
    height: '8@ms',
    width: '8@ms',
    backgroundColor: '#B79069',
    borderRadius: '50@ms',
  },
  tabBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    width: '43%',
    borderRadius: '12@ms',
    marginBottom: '30@ms',
  },
  categoryShortHeight: {
    height: '160@vs',
  },
  categoryLongHeight: {
    height: '200@vs',
  },
  categoryTitletext: {
    fontWeight: 'bold',
    fontSize: '16@ms',
    opacity: 0.9,
  },
  categoryNumbertext: {
    fontSize: '13@ms',
  },
  illustrationImage: {
    flex: 1,
    position: 'relative',
    borderRadius: '10@ms',
    width: '100%',
  },
  backgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: '55@vs',
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
    marginBottom: '85@vs',
    marginLeft: '30%',
    width: '40%',
    justifyContent: 'center'
  },
  createText: {
    fontSize: '15@ms',
    paddingVertical: '10@ms',
    paddingHorizontal: '15@ms',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  gradBox :{
    margin: 1,
    backgroundColor: 'white',
    borderRadius: '22@ms',
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
  },
  icon1 : {
    marginLeft: '-5@ms',
    marginRight: '10@ms',
  },
  stars: {
    marginLeft: '65%'
  }
});

export default styles;
