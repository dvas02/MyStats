import { View, Pressable, Image, StyleSheet } from "react-native";

function LongAddButton(){
  function pressHandler(){
    console.log("Pressed on LongAddButton");
  }

  return(
    <Pressable onPress={pressHandler}>
      <View style={styles.button}>
        <Image style={styles.img} source={require('../../assets/images/LongAddButton.png')} />
      </View>
    </Pressable>
  )

}

export default LongAddButton;

const styles = StyleSheet.create({
  button:{
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  img:{
    height: 35,
    width: 35,
    borderRadius: 20,
  }
})