import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MenuButton from './components/Buttons/MenuButton';
import Title from './components/Title';
import StatCard from './components/StatCard';
import NewStatButton from './components/Buttons/NewStatButton';

export default function App() {
  
  let stat1 = <StatCard>stat 1</StatCard>
  let stat2 = <StatCard>stat 2</StatCard>
  let stat3 = <StatCard>stat 3</StatCard>
  let stat4 = <StatCard>stat 4</StatCard>
  let stat5 = <StatCard>stat 5</StatCard>
  let stat6 = <StatCard>stat 6</StatCard>
  let stat7 = <StatCard>stat 7</StatCard>
  let stat8 = <StatCard>stat 8</StatCard>
  let stat9 = <StatCard>stat 9</StatCard>
  let stat10 = <StatCard>stat 10</StatCard>
  let stat11 = <StatCard>stat 11</StatCard>
  let stat12 = <StatCard>stat 12</StatCard>
  let stat13 = <StatCard>stat 13</StatCard>
  let stat14 = <StatCard>stat 14</StatCard>
  let stat15 = <StatCard>stat 15</StatCard>
  let stat16 = <StatCard>stat 16</StatCard>
  let stat17 = <StatCard>stat 17</StatCard>
  let stat18 = <StatCard>stat 18</StatCard>

  let stats = [
    stat1, stat2, stat3, 
    stat4, stat5, stat6, 
    stat7, stat8, stat9, 
    stat10, stat11, stat12, 
    stat13, stat14, stat15, 
    stat16, stat17, stat18,
  ]

  let statss = stats.map((item, index) => (
    <StatCard key={index.toString()}>{item}</StatCard>
  ))
  
  return (
    <>
    <View style={styles.container}>

      {/* Top left option/menu button and title */}
      <View style={styles.menu_title_container}> 
        <View style={styles.menu}>
          <MenuButton />
        </View>
        <View style={styles.title}>
          <Title>MY STATS</Title>
        </View>
      </View>

      {/* CHAT GPT OVERLAY BUTTONS*/}
      <View style={styles.stats_and_buttons_container}>
        {/* Scrollable list of stats */}
        <View style={styles.stats_list}>
          <FlatList 

            data={stats}
            renderItem={(itemData) => 
              <View style={styles.stat}>
                {itemData.item}
              </View> }
            
            //keyExtractor={(item) => item}
            keyExtractor={(item, index) => index.toString()}
            alwaysBounceVertical={false}
            numColumns={2}
          />
        </View>
        
        {/* Button for all stats and button for adding a new stat */} 
        <View style={styles.new_stat_btn_container}>
          {/*<NewStatButton />*/}
          <NewStatButton />
        </View>

      </View>
 
    </View>
    <StatusBar style='light' />
    </>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu_title_container:{
    flex: 0.3,
    padding: 10,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  menu:{
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title:{
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  title_cont:{
    flex: 1,
    backgroundColor: 'yellow',
  },
  stats_and_buttons_container: {
    flex: 2.5, // Adjust the flex value as needed
    position: 'relative',
  },
  stats_list:{
    flex: 2,
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  new_stat_btn_container:{
    position: 'absolute', // Apply absolute positioning
    bottom: 0, // Adjust the positioning as needed
    left: 0, // Adjust the positioning as needed
    right: 0, // Adjust the positioning as needed
    marginBottom: 40,
    //backgroundColor: 'green',
    flexDirection: 'row-reverse',
    marginRight: 20,
  },

  stat:{
    margin: 5,
  }

});
