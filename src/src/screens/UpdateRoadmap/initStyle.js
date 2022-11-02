import {StyleSheet} from 'react-native';
import ScaledSheet from 'react-native-scaled-sheet';

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
    top: 16,
    left: 16,
    backgroundColor: '#eee',
    height:  32  ,
    width:   32  ,
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
    marginLeft:   70  ,
    fontWeight: 'bold',
    fontSize:   26  ,
    marginTop:  23  ,
  },
  scrollViewContent: {
    paddingTop:     15  ,
    flex: 1,
  },
  sectionScrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 60  
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
  },
  seContainer: {
    paddingBottom: 15,
  },
  searchInput: {
    height: 40,
    fontSize: 20,
    width: 350,
    margin: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollViewContent:{
    paddingTop:   10  ,
    paddingBottom:   40  
  },
  tabBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop:   7  ,
    paddingBottom:   7  ,
    paddingHorizontal:   7  ,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  paperBodyContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  categoryContainer: {
    width: '43%',
    borderRadius: 12,
    marginBottom:  30  ,
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
  inputSegment: {
    margin: 1,
    borderRadius: 15,
    backgroundColor: '#B3B1AF'
  },
  inputHeader: {
    marginLeft: '2%',
    marginBottom: '3%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  header: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
}  );

export default styles;