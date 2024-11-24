import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigator} from './src/navigation/root-navigation';
import {navigationRef} from './src/navigation/navigation-ref';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
