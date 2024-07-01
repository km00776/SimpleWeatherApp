/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Home} from './project/features/home/home';
import {name as appName} from './app.json';

// potential wrapperå
AppRegistry.registerComponent(appName, () => Home);
