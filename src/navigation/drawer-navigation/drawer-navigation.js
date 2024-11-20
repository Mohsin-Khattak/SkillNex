import {createDrawerNavigator} from '@react-navigation/drawer';

import {TabBar} from 'navigation/user/curvedtabs';
import React from 'react';
import CarReservation from 'screens/user/car-reservation';
import CustomDrawerContent from './drawer-content';
import Splash from '../../screens/splash/index';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Splash" component={Splash} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
