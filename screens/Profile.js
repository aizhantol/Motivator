import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Quality from '../components/Quality';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            formula:'',
            goodsArray:[],
            goodsText:'',
            badsArray:[],
            badsText:'',
        }
    }
    addGoods(){
        if(this.state.goodsText){
          this.state.goodsArray.push({
              'quality': this.state.goodsText,
              'id': this.state.goodsArray.length+1
          });
          this.setState({goodsArray: this.state.goodsArray})
          this.setState({goodsText:''})
        }
    }
    addBads(){
        if(this.state.badsText){
          this.state.badsArray.push({
              'quality': this.state.badsText,
              'id': this.state.badsArray.length+1
          });
          this.setState({badsArray: this.state.badsArray})
          this.setState({badsText:''})
        }
    }
    deleteGoods(key) {
        this.state.goodsArray.splice(key, 1);
        this.setState({goodsArray: this.state.goodsArray})
    }
    deleteBads(key) {
        this.state.badsArray.splice(key, 1);
        this.setState({badsArray: this.state.badsArray})
    }
    render() {
        let goods = this.state.goodsArray.map((val, key) => {
            return <Quality key={key} val={val} 
            deleteMethod={()=>this.deleteGoods(key)}/>
        });
        let bads = this.state.badsArray.map((val, key) => {
            return <Quality key={key} val={val} 
            deleteMethod={()=>this.deleteBads(key)}/>
        });
        return(
            <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Профиль</Text>
                </View>
                <View style={{paddingHorizontal:15}}>
                <View style={{marginBottom:15}}>
                    <View style={styles.h2Container}>
                        <Text style={styles.h2}>
                        Личная формула предназначения
                        </Text>
                    </View>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        onChangeText={(text) => this.setState({formula:text})}
                        value={this.state.formula}
                        style={{ height:200, 
                        backgroundColor:'#e9f1f5',
                        paddingHorizontal:15}}/>
                </View>
                <View style={styles.scrollContainer}>
                    <View style={styles.h2Container}>
                        <Text style={styles.h2}>
                            Мои положительные качества
                        </Text>
                    </View>
                    {goods}
                    <View>
                        <TextInput 
                        style={styles.textInput}
                        placeholder={`${this.state.goodsArray.length+1}.`}
                        onChangeText={(goodsText)=>this.setState({goodsText})}
                        value={this.state.goodsText}/>
                        <TouchableOpacity style={styles.addButton}
                        onPress={this.addGoods.bind(this)}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.scrollContainer}>
                     <View style={styles.h2Container}>
                        <Text style={styles.h2}>
                         Мои отрицательные качества
                         </Text>
                    </View>
                    {bads}
                    <View>
                        <TextInput 
                        style={styles.textInput}
                        placeholder={`${this.state.badsArray.length+1}.`}
                        onChangeText={(badsText)=>this.setState({badsText})}
                        value={this.state.badsText}/>
                        <TouchableOpacity style={styles.addButton}
                        onPress={this.addBads.bind(this)}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
    },
    scrollContainer:{
        marginBottom:15
    }, 
    h2Container:{
        backgroundColor: '#0080FF',
        borderRadius:5,
        marginVertical:15
        
    },
    h2:{
        color: 'white',
        fontSize: 18,
        margin:10,
        fontWeight:'500',
    },
    textInput:{
        color: 'black',
        alignSelf: 'stretch',
        padding:10,
        backgroundColor:'#e9f1f5',
        borderRadius:5
    },
    addButtonText:{
        fontSize:20,
        color:'#0080FF'
    },
    addButton:{
        position:'absolute',
        right:0,
        bottom:0, 
        top:0,
        justifyContent:'center',
        paddingRight:15
    }
    
})