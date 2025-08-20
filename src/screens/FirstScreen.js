import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.miniCabecalho}>

      </View>
      <View style={styles.telaCentral}>
        <Image source={require('../../assets/casual_dog.png')} style={{width: "90%", height: "35%"}} />
        <Text style={{ fontFamily: "Inter-Bold", fontSize: 40, color: '#2a3e54ff' }}>Ótimo dia!</Text>
        <Text style={{ fontFamily: "Inter-Bold", fontSize: 15, color: '#2a3e54ff' }}>Como deseja acessar?</Text>
        <TouchableOpacity style={[styles.estBotao, {backgroundColor: '#6fc06fff'}]}>
          <Image source={require('../../assets/Google.png')} style={styles.googleLogo} />
          <Text style={{color: '#fff'}}>Como deseja acessar?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.estBotao, {backgroundColor: '#fff'}]} onPress={() => navigation.navigate('Second')}>
          <Text style={{color: '#2a3e54ff'}}>Outras opções</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}