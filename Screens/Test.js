import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Keyboard, Pressable, Button } from 'react-native'
import React, { Component } from 'react'
import { style } from '../Style'

class Data_Pasar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            price:'',
            listData:[],
        };
        this.url = 'http://10.100.0.37/api/api.php';
    }
    componentDidMount(){
        this.ambilListData()
    }
    async ambilListData(){
        await fetch(this.url)
        .then((response)=>response.json())
        .then((json)=>{
            console.log('Hasil yang didapat: '+JSON.stringify(json.data.result));
            this.setState({listData:json.data.result});
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render() {
        return (
            <View style={style.viewWrapper}>
                <View style={style.viewData}>
                    {
                        this.state.listData.map((val,index)=>(
                            <View style={style.viewList} key=
                            {index}>
                                <Text style={style.textListNama}
                                >{val.name}</Text>
                            </View>
                        ))
                    }
                </View>
                <View style={style.viewForm}>
                    <TextInput
                        style={style.textInput}
                        placeholder="Masukan Nama"
                        value={this.state.name}
                        onChange={(text)=>this.setState(
                        {name:text})}
                        >
                        </TextInput>
                    <TextInput
                        style={style.textInput}
                        placeholder="Masukan Harga"
                        value={this.state.price}
                        onChange={(text)=>this.setState(
                        {price:text})}
                        >
                        </TextInput>
                    <Button title='Masukkan Data'></Button>
                </View>
            </View>
        )
    }
}

export default Data_Pasar