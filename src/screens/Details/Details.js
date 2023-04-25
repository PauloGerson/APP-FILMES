
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React, { useState, useEffect } from 'react';


export default function Home({ route, navigation }) {

  const { itemId } = route.params;
  const apikey = 'cb4c98f66e1274d26140dd09a17f7a97';
  const [movies, setMovies] = useState([]);
  const imgUrl = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${itemId}?api_key=${apikey}&language=en-US&page=1`)
      .then(result => result.json())
      .then(data => {
        console.log(data.overview);
        setMovies(data);
      });
  }, []);
  return (
    
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.containerImagem}>
        <Image source={{ uri: `${imgUrl}${movies.poster_path}` }} style={styles.image}/>
        <Text style={styles.containerText}>{movies.original_title}</Text>
        <View>
          <Text style={styles.containerOverview}>{movies.overview}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button  
          title="Go back" 
          onPress={() => navigation.goBack()}
          titleStyle={styles.buttonTitle}
          color='white'
          />
        </View>
      </View>
     
      </ScrollView>
    </View>
   
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row", 
    backgroundColor: '#121212',  
  },

  containerImagem:{
    marginTop: 20,
    padding: 40,
   
  },
  containerText:{
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color:  'white'
  },

  image: {
   
    width: '100%',
    height: 400,
    borderRadius: 20,
    elevation: 5,
  },
  containerOverview:{
    marginTop: 20,
    color: 'white',
    fontSize: 15,
    textAlign: 'justify'
  },
  buttonContainer: {
    margin: 10,
    backgroundColor: '#c98a0c',
    borderRadius: 5,
    marginTop: 25
    
  },
  buttonTitle: {
   
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },

})