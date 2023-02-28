import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View, Card, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'


export default function Berita(){
    const navigation = useNavigation()
    return (
    <View style={styles.background}>
        <ScrollView>
            <View style={styles.container}>
                <View style={{paddingTop:80}}>
                    <Text style={{fontSize:28,color:'#080808',fontWeight:'bold'}}>Artikel dan berita terbaru terkait dengan harga bahan pokok</Text>
                </View>
                <View style={styles.searchflex}>
                    <TextInput
                        placeholder='Cari...'
                        style={styles.searchinput}
                    ></TextInput>
                    <TouchableOpacity color='#ffffff' onPress={() => {navigation.navigate('Home')}}>
                        <View style={styles.searchbutton}>
                            <Image
                                source={require('../assets/search.png')}
                                style={{width:24,height:24}}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardflex}>
                    <TouchableOpacity color='#ffffff'>
                        <View style={{flexDirection:'column',padding:5,borderRadius:10,marginHorizontal:5}}>
                            <Image
                                source={require('../assets/berita1.jpg')}
                                style={{height:200,width:150,borderRadius:10}}
                            />
                            <View style={{backgroundColor:'#080808',borderRadius:10,height:30,width:80,marginTop:10,alignSelf:'center'}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5,fontSize:11}}>Lorem Ipsum</Text>
                            </View>
                            <Text style={{alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'}}>Lorem Ipsum</Text>
                            <Text style={{alignSelf:'center',fontSize:12,paddingTop:5}}>Lorem Ipsum</Text>
                            <Text style={{alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'}}>4 Febuari 2023</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity color='#ffffff'>
                        <View style={{flexDirection:'column',padding:5,borderRadius:10}}>
                            <Image
                                source={require('../assets/berita2.jpg')}
                                style={{height:200,width:150,borderRadius:10}}
                            />
                            <View style={{backgroundColor:'#080808',borderRadius:10,height:30,width:80,marginTop:10,alignSelf:'center'}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5,fontSize:11}}>Lorem Ipsum</Text>
                            </View>
                            <Text style={{alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'}}>Lorem Ipsum</Text>
                            <Text style={{alignSelf:'center',fontSize:12,paddingTop:5}}>Lorem Ipsum</Text>
                            <Text style={{alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'}}>1 Januari 2023</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',marginHorizontal:-10}}>
                    <TouchableOpacity color='#ffffff'>
                        <View style={{flexDirection:'column',padding:5,borderRadius:10,marginHorizontal:5}}>
                            <Image
                                source={require('../assets/berita2.jpg')}
                                style={{height:200,width:150,borderRadius:10}}
                            />
                            <View style={{backgroundColor:'#080808',borderRadius:10,height:30,width:80,marginTop:10,alignSelf:'center'}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5,fontSize:11}}>Lorem Ipsum</Text>
                            </View>
                            <Text style={{alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'}}>Lorem Ipsum</Text>
                            <Text style={{alignSelf:'center',fontSize:12,paddingTop:5}}>Lorem Ipsum</Text>
                            <Text style={{alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'}}>29 september 2022</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity UnderlayColor='white' onPress={() => {navigation.navigate('Home')}}>
                        <View style={{flexDirection:'column',padding:5,borderRadius:10}}>
                            <Image
                                source={require('../assets/berita1.jpg')}
                                style={{height:200,width:150,borderRadius:10}}
                            />
                            <View style={{backgroundColor:'#080808',borderRadius:10,height:30,width:80,marginTop:10,alignSelf:'center'}}>
                                <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5,fontSize:11}}>Lorem Ipsum</Text>
                            </View>
                            <Text style={{alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'}}>Lorem Ipsum</Text>
                            <Text style={{alignSelf:'center',fontSize:12,paddingTop:5}}>Lorem Ipsum</Text>
                            <Text style={{alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'}}>10 Desember 2022</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
    )
}

const styles = ({
    background: {
        backgroundColor:'#f6f6f6'
    },

    container: {
        marginHorizontal:20,
        paddingBottom:90
    },
    
    logo:{
        height:50,
        width:230,
        marginBottom:30,
        alignSelf:'center',
        backgroundColor: '#080808'
    },

    searchflex: {
        paddingTop:30,
        flexDirection:'row',
        alignItems:'center'
    },

    searchinput:{
        width:250,
        borderRadius:20,
        padding:5,
        paddingLeft:15,
        borderColor:"#2f318d",
        height:50,
        borderWidth:1
    },

    searchbutton:{
        backgroundColor:'#0f0f0f',
        borderRadius:75,
        width:50,
        height:50,
        alignItems:'center',
        paddingTop:10,
        marginLeft:10
    },

    cardflex:{
        flexDirection:'row',
        marginHorizontal:-10
    }
})