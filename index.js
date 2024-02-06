// /**
//  * @format
//  */

// import { AppRegistry } from 'react-native';
// // import Container from './app/src/screens/home/Home';
// // import Splash from './app/src/screens/Splash';
// import { name as appName } from './app.json';


// AppRegistry.registerComponent(appName, () => App);



/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, Text, TextInput, LogBox } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const AppRedux = () => (
                    <App />
               
);

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(AppRedux));

