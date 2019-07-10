import React, { Component } from 'react';
import { View, Text,ImageBackground,Image  ,TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import Main from './Main'

class Second extends Component {


  render() {
    return (
      <ImageBackground source ={require('../pics/leaf.jpeg')} style={{height:"100%",width:'100%'}}>
       
       <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Main')}}>
          <Image source ={require('../pics/back.png')} ></Image>
       </TouchableOpacity>
      </View>
      
    </ImageBackground>
    );
  }
}


export default Tab = createBottomTabNavigator({
    
    Main:{screen:Main},
    Second:{screen:Second},

})