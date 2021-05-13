import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';
import  * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


export default class Wishlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
         hasCameraPermission: null,
         images:[]
        }
       }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: status === "granted" });
       }


    _getPhotoLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
         allowsEditing: true,
         aspect: [4, 3]
        });
        if (!result.cancelled) {
            this.state.images.push(result.uri)
            this.setState({ images: this.state.images });
        }
    }

    render() {
        const { images, hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
        return <View />
        }
        else if (hasCameraPermission === false) {
        return <Text>Access to camera has been denied.</Text>;
        }
        else {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Визуализация</Text>
                </View>
                <View style={styles.imageContainer}>
                    {images ? (
                    <FlatList
                    data={images}
                    numColumns={3}
                    renderItem={({item}) => (
                        <Image style={styles.image} source={{uri:item}} />
                    )
                    }
                    keyExtractor={(item, index) => item.key}
                    />
                ) : (
                <View />
                )}
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button 
                onPress={this._getPhotoLibrary.bind(this)} 
                title="Добавить желание"
                />
                </View>
        </SafeAreaView>
        );
        }
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
    imageContainer: {
        height: '80%',
        marginTop:10,
        marginHorizontal:5
    },
    image: {
        margin: 3,
        width: '33%',
        height: 150,
    },
})