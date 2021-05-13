import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Instruction from '../screens/Instruction';

export default class LoginForm extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <TextInput 
                style={styles.input}
                placeholder='email'
                returnKeyType='next'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}/>
                <TextInput 
                style={styles.input}
                secureTextEntry
                placeholder='password'
                returnKeyType='go'/>
                <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => this.props.navigation.navigate('TabNavigator', {screen:'Инструкция'})}>
                    <Text style={styles.buttonText}>
                    Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
} 
const styles = StyleSheet.create({
    container: {
        padding:25,
        marginBottom:20
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 15,
        height: 50,
        fontSize: 17
    },
    buttonContainer: {
        paddingVertical: 15,
        backgroundColor: '#2980b9'
    },
    buttonText: {
       color: 'rgb(255, 255, 255)',
       textAlign:'center',
       fontWeight: '700',
       fontSize:17
    }
})