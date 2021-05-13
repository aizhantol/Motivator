import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class Plan extends Component{
  render(){
    return(
      <View key={this.props.keyval} style={this.props.val.done ? styles.planDone : styles.plan}>
          <Text style={styles.planText}>{this.props.val.id}. {this.props.val.plan}</Text>
          <TouchableOpacity onPress={this.props.doneMethod}
          style={styles.doneButton}>
              <FontAwesome5 name={'check-circle'} color={this.props.val.done ? 'green' : 'grey'} size={16}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.deleteMethod}
          style={styles.deleteButton}>
              <FontAwesome5 name={'trash-alt'} color={'#202020'} size={14}/>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  planDone:{
      position:'relative',
      padding:10,
      marginVertical:10,
      backgroundColor:'#CCFFCC'
  },
  plan:{
    position:'relative',
    padding:10,
    marginVertical:10,
},
  planText:{
    color:'black',
    paddingLeft:5,

  },
  doneButton:{
    position: 'absolute',
    top: 5,
    bottom: 5,
    right:30,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  deleteButton:{
      position: 'absolute',
      top: 5,
      bottom: 5,
      right:5,
      justifyContent:'center',
      alignItems:'center',
      padding:5
  },
})
