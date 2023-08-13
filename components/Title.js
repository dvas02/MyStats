import { Text, StyleSheet } from "react-native";


function Title({children}){
    return(<Text style={styles.title}>
      {children}
    </Text>)
}

export default Title;

const styles = StyleSheet.create({
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    padding: 12,
    //maxWidth: '80%',
  }

})