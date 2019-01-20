import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'react-native-firebase';


//console.log("Nombre:" + firebase.database().app.name); // '[DEFAULT]'
//console.log("hora base: " + firebase.database().getServerTime())

export default class componentName extends Component {

  constructor(){
  super();
  this.state = {
  usuarios: ''
  }
  }
 
componentDidMount() {
 
   this.obtenerUsuario();

}

  obtenerUsuario() {
    firebase.database().ref('Usuarios/0/aa').once('value',(snapshot) => {
        
      this.setState({
          usuarios: snapshot.val()
        })
       
     })
   }
 
  render() {
    return (
      <View>
        <Text> {this.state.usuarios} </Text>
      
        
      </View>
    )
  }
}