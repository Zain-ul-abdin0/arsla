import React, { Component } from 'react';
import {createBottomTabNavigator , createDrawerNavigator, createSwitchNavigator,createStackNavigator} from 'react-navigation'
import Second from './screens/Second';
import Main from './screens/Main';
import Drawer1 from './screens/Drawer1'
import Drawer2 from './screens/Drawer2'

class App extends Component {
    static navigationOptions = {
        header: null
    }
  render() {
    return (
        <View>
            <Stack/>
        </View> 
    );
  }
}


export default Stack= createDrawerNavigator({
    Main:Main,
    Drawer1:Drawer1,
    Drawer2:Drawer2,
    Second:Second
 
})
