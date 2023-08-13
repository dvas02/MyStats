import { View, Text, Pressable, StyleSheet, Image } from "react-native";

function NewStatButton(){
  function pressHandler(){
    console.log("Pressed on NewStatButton");
  }

  return(
    <Pressable onPress={pressHandler} android_ripple={{opacity: 0.75}}>
      <View style={styles.button}>
        <Image style={styles.image} source={require('../../assets/images/NewStatButton.png')}/>
      </View>
    </Pressable>
  )

}

export default NewStatButton;

const styles = StyleSheet.create({
  button:{
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  image:{
    width: 120,
    height: 120,
  },
})