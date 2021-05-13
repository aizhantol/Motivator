import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class Goals extends Component {

    constructor(props){
        super(props);
        this.state={
            areas : [
                {
                title: 'Карьера',
                allGoals: [{
                    year: 20,
                    goals: ['hhhh', 'oooo','kkok'],
                    text:'',
                },
                {
                    year: 10,
                    goals: ['hhhh', 'oooo','kkok'],
                    text:'',
                },
                {
                    year: 5,
                    goals: [],
                    text:'',
                },
                {
                    year: 1,
                    goals: [],
                    text:'',
                }]
             },
            {
                title: 'Семья',
                allGoals: [{
                    year: 20,
                    goals:['hhhh', 'oooo','kkok']
                },
                {
                    year: 10,
                    goals: [],
                    text:'',
                },
                {
                    year: 5,
                    goals: [],
                    text:'',
                },
                {
                    year: 1,
                    goals: [],
                    text:'',
                }]
            },
            {
                title: 'Бизнес',
                allGoals: [{
                    year: 20,
                    goals:[],
                    text:'',
                },
                {
                    year: 10,
                    goals: [],
                    text:'',
                },
                {
                    year: 5,
                    goals: [],
                    text:'',
                },
                {
                    year: 1,
                    goals: [],
                    text:'',
                }]
            },
            {
                title: 'Финансы',
                allGoals: [{
                    year: 20,
                    goals:[],
                    text:'',
                },
                {
                    year: 10,
                    goals: [],
                    text:'',
                },
                {
                    year: 5,
                    goals: [],
                    text:'',
                },
                {
                    year: 1,
                    goals: [],
                    text:'',
                }]
            },
            {
                title: 'Личная жизнь',
                allGoals: [{
                    year: 20,
                    goals:[],
                    text:'',
                },
                {
                    year: 10,
                    goals: [],
                    text:'',
                },
                {
                    year: 5,
                    goals: [],
                    text:'',
                },
                {
                    year: 1,
                    goals: [],
                    text:'',
                }]
            },
            {
                title: 'Отдых',
                allGoals: [{
                    year: 20,
                    goals:[],
                    text:'',
                },
                {
                    year: 10,
                    goals: [],
                    text:'',
                },
                {
                    year: 5,
                    goals: [],
                    text:'',
                },
                {
                    year: 1,
                    goals: [],
                    text:'',
                }]
            },
            {
                title: 'Самореализация',
                allGoals: [{
                    year: 20,
                    goals:[],
                    text:'',
                },
                {
                    year: 10,
                    goals: [],
                    text:'',
                },
                {
                    year: 5,
                    goals: [],
                    text:'',
                },
                {
                    year: 1,
                    goals: [],
                    text:'',
                }]
            },
            {
                title: 'Духовность',
                allGoals: [{
                    year: 20,
                    goals:[],
                    text:'',
                },
                {
                    year: 10,
                    goals: [],
                    text:'',
                },
                {
                    year: 5,
                    goals: [],
                    text:'',
                },
                {
                    year: 1,
                    goals: [],
                    text:'',
                }]
            },
            {
                title: 'Здоровье',
                allGoals: [{
                    year: 20,
                    goals:[],
                    text:'',
                },
                {
                    year: 10,
                    goals: [],
                    text:'',
                },
                {
                    year: 5,
                    goals: [],
                    text:'',
                },
                {
                    year: 1,
                    goals: [],
                    text:'',
                }]
            } 
        ]}}
    
    render() {  
        return(
            <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                <Text style={styles.header}>Цели</Text>
                </View>
                <View style={{paddingHorizontal:15}}>
                {
                    this.state.areas.map(({title, allGoals}, itemId) => (
                    <View key={itemId}>
                        <View style={styles.areaContainer}>
                            <Text style={styles.area}>{title}</Text>
                        </View>
                            {allGoals.map(({year, goals, text}, id) => (                   
                                <View key={id}>
                                    <Text style={styles.year}>{year} лет</Text>
                                    <View>
                                        <View>
                                        {goals.map((goal, goalId)=>    
                                         <View style={styles.goal} key={goalId}>                                    
                                            <Text style={styles.goalText}>{goalId+1}. {goal}</Text> 
                                            <TouchableOpacity onPress={(goalId)=>{
                                                goals.splice(goalId,1)
                                                this.setState({areas:this.state.areas})
                                            }
                                            }
                                                style={styles.deleteButton}>
                                                <FontAwesome5 name={'trash-alt'} color={'#202020'} size={14} />
                                            </TouchableOpacity>     
                                        </View>                                                                    
                                        )}
                                        </View>
                                        <View>
                                            <TextInput 
                                            style={styles.textInput}
                                            placeholder='Пример'
                                            onChangeText={(goalText)=>{
                                                text=goalText;
                                                this.setState({areas:this.state.areas})}}
                                                value={text}/>
                                            <TouchableOpacity style={styles.addButton}
                                            onPress={()=>{
                                                if(text){
                                                    goals.push(text);
                                                    this.setState({areas:this.state.areas})                                                }
                                            }}>
                                                <Text style={styles.addButtonText}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>)
                            )}
                            
                    </View>))
                    }
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
        textAlign:'left'
    },
    areaContainer:{
        backgroundColor: '#0080FF',
        borderRadius:5,
        marginTop:15
        
    },
    area:{
        color: 'white',
        fontSize: 18,
        margin:10,
        fontWeight:'500',
    },
    year:{
        padding:10,
        fontWeight:'500',
        fontSize:18,
        paddingBottom:10
    },
    goal:{
        position:'relative',
        padding:20,
        paddingRight: 100,
    },
    goalText:{
        fontSize: 15,
        paddingLeft:5
    },
    textInput:{
        color: 'black',
        alignSelf: 'stretch',
        padding:10,
        fontSize:15,
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
    },
    deleteButton:{
        position: 'absolute',
        top: 10,
        bottom: 10,
        right:10,
        justifyContent:'center',
        alignItems:'center',
        padding:5
    }
})