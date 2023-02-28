import { Text, View, Dimensions} from 'react-native';
import React, { Component } from 'react'
import { LineChart } from 'react-native-chart-kit';



class Data_Harga extends Component {

  constructor(props) {
    super(props);
    this.state = {
        listData:[],
        dataDate: [],
        dataPrice: [],
        dataName: []
    };
    this.url = 'http://10.100.0.37/api/api.php'; //diganti sesuai dengan link yang ada
  }

  componentDidMount(){
    this.getItemHandler()
  }

  async getItemHandler(){
    try {
      const response = await fetch(this.url);
      const json = await response.json();
      this.setState({ listData: json.data.result });

    } catch (error) {
      console.log(error);
    }

    this.getDataDate();
    this.getDataPrice();
    this.getDataName();

  }


    getDataDate(){
        const tempData = []
        for (let i = 0; i < this.state.listData.length; i++) {
            tempData.unshift(this.state.listData[i].input_date);
        }

        this.setState(prevState => {
            return { dataDate: [...prevState.dataDate, ...tempData] }
        });
    }

    getDataPrice(){
        const tempData = []
        for (let i = 0; i < this.state.listData.length; i++) {
            tempData.unshift(parseInt(this.state.listData[i].price));
        }
        this.setState(prevState => {
            return { dataPrice: [...prevState.dataPrice, ...tempData] }
        });
    }

    getDataName(){
        const tempData = []
        for (let i = 0; i < this.state.listData.length; i++) {
            tempData.unshift(this.state.listData[i].name);
        }
        this.setState(prevState => {
            return { dataName: [...prevState.dataName, ...tempData] }
        });
    }
  
  render() {
    return (
      <View>
        { this.state.dataPrice.length > 0 
          &&
          <LineChart
            data={{
              labels: this.state.dataName,
              datasets: [{
                data: this.state.dataPrice
              }]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel={"Rp"}
            chartConfig={{
              backgroundColor: "#080808",
              backgroundGradientFrom: "#080808",
              backgroundGradientTo: "#080808",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#f1f1f1"
              }
            }}
            bezier={false}
            style={{
              marginVertical: 8,
              borderRadius: 5,
              margin: 10,
            }}
          />
        }
      </View>
    );
  }
}

export default Data_Harga
