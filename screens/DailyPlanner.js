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
import Plan from '../components/Plan';

export default class DailyPlanner extends Component {

    constructor(props){
        super(props)
        this.state={
            month: {
                text: '',
                plans: []
            },
            main: {
                text: '',
                plans: []
            },
            minor: {
                text: '',
                plans: []
            }
        }
    }
    addMonth(){
        if(this.state.month.text){
            this.state.month.plans.push({
                plan: this.state.month.text,
                id: this.state.month.plans.length+1,
                done: false
            })
            this.state.month.text=''
            this.setState({month:this.state.month})
        }
    }
    addMain(){
        if(this.state.main.text){
            this.state.main.plans.push({
                plan: this.state.main.text,
                id: this.state.main.plans.length+1,
                done: false
            })
            this.state.main.text=''
            this.setState({main:this.state.main})
        }
    }
    addMinor(){
        if(this.state.minor.text){
            this.state.minor.plans.push({
                plan: this.state.minor.text,
                id: this.state.minor.plans.length+1,
                done: false
            })
            this.state.minor.text=''
            this.setState({minor:this.state.minor})
            console.log(this.state.minor.plans)
        }
    }

    delete(key, item) {
        item.plans.splice(key, 1);
        this.setState({item})
    }

    done(key, item){
        if(item.plans[key].done){
            item.plans[key].done=false
        }else{
            item.plans[key].done=true
        }
        this.setState({item})
    }
    
    render() {

        let month = this.state.month.plans.map((val, key)=>{
           return <Plan key={key} val={val} 
            deleteMethod={()=>this.delete(key, this.state.month)}
            doneMethod={()=>this.done(key, this.state.month)}/>
        });
        let main = this.state.main.plans.map((val, key)=>{
            return <Plan key={key} val={val}
             deleteMethod={()=>this.delete(key, this.state.main)}
             doneMethod={()=>this.done(key, this.state.main)}/>
         });
         let minor = this.state.minor.plans.map((val, key)=>{
            return <Plan key={key} val={val}
             deleteMethod={()=>this.delete(key, this.state.minor)}
             doneMethod={()=>this.done(key, this.state.minor)}/>
         });
         return(
             <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                <Text style={styles.header}>Ежедневник</Text>
                </View>
                <View style={{paddingHorizontal:15}}>
                <View style={{marginBottom:15}}>
                    <View style={styles.h2Container}>
                    <Text style={styles.h2}>На 90 дней</Text>
                    </View>
                    {month}
                    <View>
                    <TextInput 
                        style={styles.textInput}
                        placeholder={`${this.state.month.plans.length+1}.`}
                        onChangeText={(text)=>{
                            let state = {...this.state.month}
                            state.text=text
                            this.setState({month:state})
                        }}
                        value={this.state.month.text}
                        />
                        <TouchableOpacity
                        style={styles.addButton}
                        onPress={this.addMonth.bind(this)}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>  
                    </View>
                                  
                </View>
                <View style={{marginBottom:15}}>
                    <View style={styles.h2Container}>
                    <Text style={styles.h2}>Главные</Text>
                    </View>
                    {main}
                    <View>
                        <TextInput 
                        style={styles.textInput}
                        placeholder={`${this.state.main.plans.length+1}.`}
                        onChangeText={(text)=>{
                            let state = {...this.state.main}
                            state.text=text
                            this.setState({main:state})
                        }}
                        value={this.state.main.text}
                        />
                        <TouchableOpacity
                        style={styles.addButton}
                        onPress={this.addMain.bind(this)}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>   
                    </View>                
                </View>
                <View>
                    <View style={styles.h2Container}>
                    <Text style={styles.h2}>Второстепенные</Text>
                    </View>
                    {minor}
                    <View>
                        <TextInput 
                        style={styles.textInput}
                        placeholder={`${this.state.minor.plans.length+1}.`}
                        onChangeText={(text)=>{
                            let state = {...this.state.minor}
                            state.text=text
                            this.setState({minor:state})
                        }}
                        value={this.state.minor.text}
                        />
                        <TouchableOpacity
                        style={styles.addButton}
                        onPress={this.addMinor.bind(this)}>
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
        backgroundColor: 'white',
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