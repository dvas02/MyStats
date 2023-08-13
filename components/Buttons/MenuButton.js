import { View, Pressable, Image, StyleSheet } from "react-native";

function MenuButton(){
  function pressHandler(){
    console.log("Pressed on MenuButton");
  }

  return(
    <Pressable onPress={pressHandler}>
      <View style={styles.button}>
        <Image style={styles.img} source={require('../../assets/images/MenuButton.png')} />
      </View>
    </Pressable>
  )

}

export default MenuButton;

const styles = StyleSheet.create({
  button:{
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  img:{
    height: 60,
    width: 60,
  }
})