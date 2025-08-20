import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles';

export default function SecondScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <View style = {styles.miniCabecalho}></View>

      <View style = {styles.telaCentral}>
        <View style={styles.containerInterno1}>
          <View style = {[styles.barrinhaIgual, {alignItems:'flex-start', paddingLeft:'5%',marginBottom:'8%'}]}>
            <Text style = {{fontFamily: "Inter-Bold", fontSize: 40, color: '#2a3e54ff'}}>Acesse</Text>
            <Text style = {{fontFamily: "Inter-Bold", fontSize: 15, color: '#2a3e54ff', paddingLeft: 2}}>Inicie fazendo login!</Text>
          </View>

          <View style = {[styles.barrinhaIgual, {gap:'1%'}]}>
            <Text style = {{width: '90%', paddingLeft: 8}}>E-mail</Text>
            <TextInput style = {[styles.modeloInput, {paddingLeft:10}]} placeholder="Insira seu E-Mail..." />
          </View>

          <View style = {[styles.barrinhaIgual, {gap:'1%'}]}>
            <Text style = {{width: '90%', paddingLeft: 8}}>Senha</Text>
            <View style={styles.modeloInput}>
              <TextInput style = {{height:'100%', width:'86%'}} placeholder="Insira sua senha..." />
              <TouchableOpacity><Text>Olho</Text></TouchableOpacity>
            </View>
          </View>
            
          <View style = {[styles.barrinhaIgual, {flexDirection: 'row', gap:'20%'}]}>
            <TouchableOpacity>
              <Text>Lembrar senha</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          <View style = {[styles.barrinhaIgual, {display: 'flex', flexDirection: 'row', gap: '5%'}]}> 
            <TouchableOpacity style = {[styles.estBotao, {height: '100%', width: '43%', backgroundColor: '#6fc06fff'}]}>
              <Text>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()} style = {[styles.estBotao, {height: '100%', width: '43%', backgroundColor:'#fff'}]}>
              <Text>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style ={styles.containerInterno2}>
          <View style = {{display:'flex', justifyContent:'center', alignItems:'center', gap: '10%'}}>
            <Text style = {{display:'flex', flexDirection:'column', gap:'10%', width:'100%', height:'20%'}}>Já possui uma conta?</Text>
            <View style = {{display:'flex', flexDirection:'row', gap:'10%', width:'100%'}}>
              <Image source={require('../../assets/Google.png')}/>
              <Image source={require('../../assets/Facebook.png')}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}