import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import Splash from '../../screens/splash/index';
import CustomDrawerContent from './drawer-content';
import CandidateDashboard from '../../screens/candidates-screens/candidate-dashboard';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // drawerType: 'back',
        drawerStyle: {width: 300},
        overlayColor: 'transparent',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="CandidateDashboard" component={CandidateDashboard} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
