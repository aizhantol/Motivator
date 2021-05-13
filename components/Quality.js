import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Quality extends Component{
  render(){
    return(
      <View key={this.props.keyval} style={styles.quality}>
          <Text style={styles.qualityText}>{this.props.val.id}. {this.props.val.quality}</Text>
          <TouchableOpacity onPress={this.props.deleteMethod}
          style={styles.deleteButton}>
              <FontAwesome5 name={'trash-alt'} color={'#202020'} size={14} />
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quality:{
      position:'relative',
      padding:20,
      paddingRight: 100,
  },
  qualityText:{
      color:'black',
      paddingLeft:15,

  },
  deleteButton:{
      position: 'absolute',
      top: 10,
      bottom: 10,
      right:10,
      justifyContent:'center',
      alignItems:'center',
      padding:5
  },
})
