import React, {Component} from 'react';
import {Text,View, StyleSheet,Image,Button,StatusBar,ScrollView} from 'react-native';

export default class App extends
Component{
  render() {
    return(
      <ScrollView>
      <View style={{backgroundColor: 'pink'}}>
      <Text>{'\n'}</Text>
      <Button title="ESPACIOS" size='high'></Button>
      <Text>{'\n'}</Text>
      <Button title="Sol" size='medium'></Button>
      <Text>
      El Sol es una estrella enorme. Con un diámetro de 1,4 millones de kilómetros podría albergar a 109 planetas en su superficie.
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/312px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Mercurio" size='medium'></Button>
      <Text>
      Es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/280px-Mercury_in_color_-_Prockter07_centered.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Venus" size='medium'></Button>
      <Text>
      Es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte.
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/280px-Venus-real_color.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Marte" size='medium'></Button>
      <Text>
      Cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Schiaparelli_Hemisphere_Enhanced.jpg/280px-Schiaparelli_Hemisphere_Enhanced.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Jupiter" size='medium'></Button>
      <Text>
      Es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.​ Es un gigante gaseoso que forma parte de los denominados planetas exteriores
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg/280px-PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Saturno" size='medium'></Button>
      <Text>
      Sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/280px-Saturn_during_Equinox.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Urano" size='medium'></Button>
      <Text>
      Séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Neptuno" size='medium'></Button>
      <Text>
      Octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados.
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/280px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Pluton" size='medium'></Button>
      <Text>
      Planeta enano del sistema solar situado a continuación de la órbita de Neptuno
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/250px-Pluto_in_True_Color_-_High-Res.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Ceres" size='medium'></Button>
      <Text>
       Planeta enano y el objeto astronómico más grande del cinturón de asteroides, región del sistema solar que se encuentra entre las órbitas de Marte y Júpiter
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29.jpg/245px-Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Eris" size='medium'></Button>
      <Text>
       Planeta enano del sistema solar. Es el más masivo de los planetas enanos conocidos, el segundo en tamaño y el cuerpo más grande del sistema solar que no ha sido visitado por una sonda espacial
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Eris_and_dysnomia2.jpg/280px-Eris_and_dysnomia2.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Makemake" size='medium'></Button>
      <Text>
       Planeta enano, el tercero en tamaño en el sistema solar y uno de los dos objetos más grandes del cinturón de Kuiper. Su diámetro es de algo más de la mitad del de Plutón.
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Makemake_moon_Hubble_image_with_legend_%28cropped%29.jpg/280px-Makemake_moon_Hubble_image_with_legend_%28cropped%29.jpg'}}
      style={{width: 80, height: 80}} />
      <Text>{'\n'}</Text>
      <Button title="Haumea" size='medium'></Button>
      <Text>
      Planeta enano que se encuentra más allá de la órbita de Neptuno, en el cinturón de Kuiper.
      </Text>
      <Image 
      source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Haumea%2C_Celestia.jpg/280px-Haumea%2C_Celestia.jpg'}}
      style={{width: 80, height: 80}} />
      </View>
      </ScrollView>
    )
  }
}

