import React, { Component } from 'react';
import { View, Text, ImageBackground,Image,TouchableOpacity,Button } from 'react-native';
import {createDrawerNavigator} from 'react-navigation'
import Drawer1 from './Drawer1'
import Drawer2 from './Drawer2'

class Main extends Component {


  render() {
    return (
      <ImageBackground source ={require('../pics/flwer.jpeg')} style={{height:"100%",width:'100%'}}>
      
      <TouchableOpacity style={{margin:10,marginTop:10}} onPress={()=>{    this.props.navigation.openDrawer()}}>
          <Image  source ={require('../pics/draw.png')}/>
      </TouchableOpacity>

      <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Second')}}>
          <Image source ={require('../pics/btn.png')}></Image>
       </TouchableOpacity>
      </View>
    </ImageBackground>
    
    );
  }
}

export default Main;

const AppDrawerNavigator  = createDrawerNavigator({
    Main:Main,
    Drawer1:Drawer1,
    Drawer2:Drawer2

})
