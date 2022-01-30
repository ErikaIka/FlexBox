import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
//Coge el ancho de la pantalla
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

//Calcular tamaño imagenes
const imgWidht =
  screenHeight > screenWidth ? screenWidth / 4.5 : screenHeight / 4.5;

const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const localImg = require('./images/Bruce.jpg');
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bloqueDatosContainer}>
          <View style={styles.imagenPerfilContainer}>
            <Image source={localImg} style={styles.imagenPerfilRedondeada} />
          </View>
          <View style={styles.infoUsuarioContainer}>
            <View style={styles.infoUsuario}>
              <View style={styles.cajaInfoUsuario}>
                <Text style={styles.posts}>Posts</Text>
                <Text style={styles.posts}>20</Text>
              </View>
              <View style={styles.cajaInfoUsuario}>
                <Text style={styles.followers}>Followers</Text>
                <Text style={styles.followers}>110304</Text>
              </View>
              <View style={styles.cajaInfoUsuario}>
                <Text style={styles.following}>Following</Text>
                <Text style={styles.following}>1103</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.botonEditProfile}>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 2}}>
          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              showVerticalScrollIndicator: true,
            }}>
            {images.map((item, index) => (
              <View key={index + item + ''}>
                <Image source={{uri: item}} style={styles.imgGalery} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //borderColor: 'purple',
  },
  bloqueDatosContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagenPerfilContainer: {
    //borderColor: 'blue',
  },
  imagenPerfilRedondeada: {
    width: imgWidht,
    height: imgWidht,
    borderRadius: 50,
    //borderColor: 'black',
    //borderWidth: 1,
  },
  infoUsuarioContainer: {
    flex: 1,
    //borderColor: 'red',
    //borderWidth: 1,
  },
  infoUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cajaInfoUsuario: {
    flex: 1,
    //borderColor: 'yellow',
    //borderWidth: 2,
    alignItems: 'center',
  },
  posts: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  followers: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  following: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  botonEditProfile: {
    fontSize: 16,
    margin: 9,
    marginLeft: 50,
    marginRight: 30,
    backgroundColor: '#dcdcdc',
    shadowOffset: {width: 2, height: 4},
    shadowColor: 'grey',
    padding: 4,
    alignItems: 'center',
  },
  imgGalery: {
    width: imgWidht,
    height: imgWidht,
    margin: 2,
    //borderColor: 'orange',
    //borderWidth: 3,
  },
});
