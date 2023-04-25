import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';




export default function Home() {
  const navigation = useNavigation();
  const apikey = 'cb4c98f66e1274d26140dd09a17f7a97';
  const [movies, setMovies] = useState([]);
  const imgUrl = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
      .then(result => result.json())
      .then(data => {
        console.log(data.results[0]);
        setMovies(data.results);
      });
  }, []);

  const removeStatusBar = () => {
    navigation.setOptions({
      headerStatusBarHeight: 0,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <ScrollView >
        <View style={styles.content}>
          {movies.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.contentImage}
              onPress={() => {
                // Navega para a tela de detalhes quando o item for pressionado
                navigation.navigate('Detalhes', { itemId: item.id });
                removeStatusBar()
              }}
            >
              <Image source={{ uri: `${imgUrl}${item.poster_path}` }} style={styles.image} />
              <Text style={styles.contentText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
    backgroundColor: '#121212',     
  },

  content:{
    flexDirection: 'row',
    justifyContent: "center",
    flexWrap: 'wrap',
    marginRight: 9,
    marginTop: 90, 
    justifyContent: 'space-around',
    
  },
  contentImage:{
    width: '40%', 
    marginBottom: 20,
   
    textAlign: 'center',
  },

  contentText:{
    textAlign: 'center',
    marginTop: 6,
    color: '#fff',
   
    fontWeight: '600'
  },
  image: {
   
    width: '100%',
    height: 200,
    borderRadius: 20
  },
});
