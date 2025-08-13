import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.miniCabecalho}>

      </View>
      <View style={styles.telaCentral}>
        <Image source={require('./assets/casual_dog.png')} style={{width: "90%", height: "35%"}} />
        <Text style={{ fontFamily: "Inter-Bold", fontSize: 40, color: '#2a3e54ff' }}>Ótimo dia!</Text>
        <Text style={{ fontFamily: "Inter-Bold", fontSize: 15, color: '#2a3e54ff' }}>Como deseja acessar?</Text>
        <TouchableOpacity style={[styles.estBotao, {backgroundColor: '#6fc06fff'}]}>
          <Image source={require('./assets/Google.png')} style={styles.googleLogo} />
          <Text style={{color: '#fff'}}>Como deseja acessar?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.estBotao, {backgroundColor: '#fff'}]}>
          <Text style={{color: '#2a3e54ff'}}>Outras opções</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniCabecalho: {
    width: "100%",
    height: "3%",
    backgroundColor: '#a2a2a2ff',
  },
  telaCentral: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: "97%",
    backgroundColor: '#d4d4d4ff',
    gap: '3%',
  },
  estBotao: {
    width: "85%",
    height: '8%',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#6fc06fff',
    position: 'relative',
  },
  googleLogo: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 37,
    height: 37,
    left: 15
  }
});
