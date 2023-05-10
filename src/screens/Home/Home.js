import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { FaAlignCenter, FaSistrix } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import axios from 'axios';

export default function Home() {
  const navigation = useNavigation();
  const apikey = 'cb4c98f66e1274d26140dd09a17f7a97';
  const [movies, setMovies] = useState([]);
  const imgUrl = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
      .then(result => {
        setMovies(result.data.results);
        console.log(data.results[0]);
      })
        
      
  }, []);

  const removeStatusBar = () => {
    navigation.setOptions({
      headerStatusBarHeight: 0,
    });
  };

  const img = [
    {
      imgs: 'https://jovemnerd.com.br/wp-content/uploads/2021/11/Homem-Aranha-01-1-760x1126.png'
    },

    {
      imgs: 'https://img.elo7.com.br/product/original/3B2C465/big-poster-filme-velozes-e-furiosos-9-lo002-90x60-cm-presente-geek.jpg'
    },

    {
      imgs: 'https://www.themoviedb.org/t/p/original/lGjmEgZFXiTIZVQv1TJkty4mXR2.jpg'
    },

  ]

  const imgPopular = [
    {
      imgs: 'https://popularanime.com.br/wp-content/uploads/2022/09/FdWGS1IUcAAn7rG-768x1086.jpg'
    },

    {
      imgs: 'https://poltronanerd.com.br/wp-content/uploads/2022/08/dc-liga-dos-super-pets.jpg'
    },

    {
      imgs: 'https://img.elo7.com.br/product/original/430E01A/poster-1-kung-fu-panda-2008-mdf.jpg'
    },

  ]

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
      {/* 
          <FaAlignCenter style={styles.colorIcon}/>
          <RiSearch2Line style={styles.colorIcon}/> */}
        
      </View>
      <Text style={styles.TextTitle}>Movie</Text>
      

      <StatusBar style='light'/>

      <Text style={styles.TextDescription}>Destaque</Text>
      <ScrollView showsHorizontalScrollIndicator={false} 
          horizontal={true} style={styles.footerContentScrollView}>
        <View style={styles.imgCenter}>
          
          {img.map(itens => (
            <Image source={{ uri: itens.imgs}} style={styles.imageScroll} />
          ))}
        </View>
      </ScrollView>

      <Text style={styles.TextDescription}>Popular</Text>
      <View>
      <ScrollView showsHorizontalScrollIndicator={false} 
          horizontal={true} style={styles.footerContentScrollView}>
        <View style={styles.imgCenter}>
          
          {imgPopular.map(itens => (
            <Image source={{ uri: itens.imgs}} style={styles.imageScroll} />
          ))}
        </View>
      </ScrollView>
      </View>
      
      <ScrollView >
      
        
        <View >
        <Text style={styles.TextDescription}>Lançamentos</Text>
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
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    
    backgroundColor: '#f9f9f9',     
  },

  content:{
    flexDirection: 'row',
    justifyContent: "center",
    flexWrap: 'wrap',
    marginRight: 9, 
    justifyContent: 'space-around',
    
  },
  navBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  
  },
  contentImage:{
    width: '40%', 
    marginBottom: 20,
    textAlign: 'center',
  },

  contentText:{
    textAlign: 'center',
    marginTop: 6,
    color: '#121212',
    fontWeight: '600'
  },

  colorIcon: {
    fontSize: 20,
    color: '#121212',
    fontWeight: '800'

  },
  image: {
   
    width: '100%',
    height: 200,
    borderRadius: 20
  },
  footerContentScrollView:{
    
    height: 300,
  },

  imgCenter:{
      marginTop: 10,
      paddingLeft: 10,
      paddingRight: 20,
      flexDirection: 'row',
  },

  imageScroll:{
    width: 200,
    marginLeft: 10,
    borderRadius: 15,
    elevation: 5,
  },

  TextDescription:{
    
    color: '#121212',
    fontSize: 15,
    marginLeft: 20,    
    marginTop: 10,
    fontWeight: '400',
  },
  TextTitle:{
    
    color: '#121212',
    fontSize: 25,
    marginLeft: 20,    
    marginTop: 40,
    fontWeight: '600',
    textTransform: 'uppercase',
  }
});
