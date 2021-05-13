import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.logoContainer}>
                    <Image 
                    style = {styles.logo}
                    source = {require('../assets/загр.png')}
                    />
                    <Text style = {styles.title}>
                        Мотиватор
                    </Text>
                </View>
                <View>
                    <LoginForm navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: 'black',
        textAlign: 'center',
        width:100,
        marginTop: 10,
        opacity: 0.9
    }

})