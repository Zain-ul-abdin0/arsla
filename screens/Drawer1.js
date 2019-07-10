import React, { Component } from 'react';
import { View, Text,ImageBackground,Image,TouchableOpacity } from 'react-native';

class Drawer1 extends Component {


  render() {
    return (
      <ImageBackground source ={require('../pics/stones.jpg')} style={{height:"100%",width:'100%'}}>
          <TouchableOpacity style={{margin:10,marginTop:10}} onPress={()=>{    this.props.navigation.openDrawer()}}>
          <Image  source ={require('../pics/draw.png')}/>
      </TouchableOpacity>

      <View style={{flex:1,justifyContent:'center',alignItems:'center',top:60}}>
          </View>
    </ImageBackground>
    );
  }
}

export default Drawer1;
