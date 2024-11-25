import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import Splash from '../../screens/splash/index';
import CustomDrawerContent from './drawer-content';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown:false,
        drawerType: 'back',
        drawerStyle: { width: 300 },
        overlayColor: 'transparent',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Splash" component={Splash} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
