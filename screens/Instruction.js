import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  View
} from 'react-native';

export default class Instruction extends Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Инструкция
                    </Text>
                </View>
                <View style={styles.textContainer}>
                <Text style={styles.text}>
                </Text>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding:20
    },
    headerContainer:{
        borderBottomWidth:1,
        borderBottomColor:'#C0C0C0',
        marginHorizontal:15
    },
    header: {
        color: '#202020',
        padding:15,
        fontSize: 22,
        fontWeight:'500',
        textAlign:'left'
    },
    textContainer:{
        margin:12
    },
    text:{
        fontSize:15
    }
})