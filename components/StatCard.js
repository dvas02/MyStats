import { View, Text, Pressable, StyleSheet } from "react-native";
import QuickAddButton from "./Buttons/QuickAddButton";
import LongAddButton from "./Buttons/LongAddButton";
import Colors from "../constants/colors";

function StatCard({children}){
  function pressHandler(){
    console.log("Pressed on StatCard");
  }

  return(
    <View style={styles.container}>

      <Pressable onPress={pressHandler}>
        <View style={styles.text_container}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
      
      <View style={styles.quickbtn}><QuickAddButton /></View>

      <View style={styles.longbtn}><LongAddButton /></View>
      
    </View>
  )

}

export default StatCard;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.lightBlue,
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 20,
    shadowOpacity: 0.4,
  },
  text_container:{
    margin: 10,
    justifyContent: 'center',
    maxWidth: 60,

  },
  text:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  quickbtn:{
    margin: 5,
  },
  longbtn:{
    margin: 5,
  },
})