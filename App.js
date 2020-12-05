import React,{useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput  
} from 'react-native';

//import Snackbar from "react-native-snackbar";

const currencyPerRupee = {
  DOLLAR:0.014,
  EURO:0.012,
  YEN:1.54,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  DINAR:0.0043,
  BITCOIN:0.000004
}

const App = () => {

  const [inputValue,setInputValue]=useState(0);
  const [resultValue,setResultValue]=useState(0)

  const btnPressed = (currancy) =>{
    /*if(!inputValue){
      Snackbar.show({
        text: 'Hello world',
        duration: Snackbar.LENGTH_SHORT,
      });
     }*/
     //else{
      let result = parseFloat(inputValue) * currencyPerRupee[currancy]
      setResultValue(result.toFixed(2))
    // }
   
  }

  return (
    <>
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardDismissMode="on-drag" 
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled">
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>
            {resultValue}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.inputValue} 
          keyboardType="numeric"
          placeholder="Enter Value"
          placeholderTextColor="#c1c1c1"
          value={inputValue.toString()}
          onChangeText={(inputValue) => setInputValue(inputValue)}
          >
          </TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((currancy) => (
            <TouchableOpacity
            key={currancy}
            style={styles.converterBtn}
            onPress={() => btnPressed(currancy)}
            >
              <Text style={styles.convertBtnText}>{currancy}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>     
    </SafeAreaView>      
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1b262c'
  },
  resultContainer:{
    height:70,
    marginTop:80,
    justifyContent:'center',
    borderColor:"#ec209e",
    borderWidth:2,
    alignItems:'center'
  },
  resultValue:{
    padding:10,
    fontSize:30,
    color:'#ffff',
    fontWeight:'bold'
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#f7f316'
  },
  inputValue:{
    fontSize:30,
    textAlign:'center',
    color:"#fff"
  },
  convertButtonContainer:{
    flexDirection:"row",
    flexWrap:'wrap',
    marginTop:10
  },
  convertBtnText:{
    color:'#fff',
    fontSize:15
  },
  converterBtn:{
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:"33.3%",
    borderWidth:2,
    borderRadius:5,
    borderColor:"#12abe7",
    backgroundColor:"#570a75"
  }
});

export default App;
