import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomButton from '../components/CustomButton/CustomButton';
import {Home, 
  LoginComponent,
  ForgotPasswordComponent,
  RegisterComponent,
  SignoutComponent,
  coursesList,
  MyRoadmaps,
  createRoadmap, 
  initRoadmap, 
  readingList, 
  updateInitRoadmap,
  updateRoadmap, 
  SavedList, 
  viewPdf, 
  viewLevels, 
  viewList} from '../screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
MaterialIcons.loadFont().then();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
    >
     <Drawer.Screen
        name="Login"
        component={LoginComponent}
        options={{drawerLabel: () => null}}
      />

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize : 45,
          },
          // drawerIcon: ({focused}) => (
          //   <MaterialIcons
          //     name="keyboard-arrow-left"
          //     size = {45}
          //     color={focused ? '#7cc' : '#ccc'}
          //   />
          // )
        }}
      />
      
       {/* <CustomButton 
      text="Sign Out"
      onPress = {onSignOut}
      type = "TERTIARY"
      /> */}
      

      <Drawer.Screen
        name="Roadmaps"
        component={MyRoadmaps}
        options={{headerShown: false}}
      />
       <Drawer.Screen
        name="Saved"
        component={SavedList}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Logout"
        component={SignoutComponent}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const SingleStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name="coursesList"
        component={coursesList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="readingList"
        component={readingList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="initRoadmap"
        component={initRoadmap}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="createRoadmap"
        component={createRoadmap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="updateInitRoadmap"
        component={updateInitRoadmap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="updateRoadmap"
        component={updateRoadmap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="viewPdf"
        component={viewPdf}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="viewList"
        component={viewList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="viewLevels"
        component={viewLevels}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ForgotPasswordComponent"
        component={ForgotPasswordComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterComponent"
        component={RegisterComponent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    
  );
};

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="DrawerStack">
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingleStack"
        component={SingleStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
