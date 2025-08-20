import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import {useState} from 'react';
import { styles } from '../styles';

export default function ThirdScreen({ navigation }) {
  const [isOpened, setOpen] = useState(true);
  return (
    <View style = {styles.container}>
          <View style = {styles.miniCabecalho}></View>
    
          <View style = {styles.telaCentral}>
            <View style={styles.containerInterno1}>
              <View style = {[styles.barrinhaIgual, {alignItems:'flex-start', paddingLeft:'5%',marginBottom:'8%'}]}>
                <Text style = {{fontFamily: "Inter-Bold", fontSize: 40, color: '#2a3e54ff'}}>Cadastre-se</Text>
                <Text style = {{fontFamily: "Inter-Bold", fontSize: 15, color: '#2a3e54ff', paddingLeft: 2}}>Inicie fazendo o cadastro!</Text>
              </View>
    
              <View style = {[styles.barrinhaIgual, {gap:'1%'}]}>
                <Text style = {{width: '90%', paddingLeft: 8}}>E-mail</Text>
                <TextInput style = {[styles.modeloInput, {paddingLeft:10}]} placeholder="Insira seu E-Mail..." />
              </View>
    
              <View style = {[styles.barrinhaIgual, {gap:'1%'}]}>
                <Text style = {{width: '90%', paddingLeft: 8}}>Senha</Text>
                <View style={styles.modeloInput}>
                  <TextInput secureTextEntry = {isOpened} style = {{height:'100%', width:'86%'}} placeholder="Insira sua senha..." />
                  <TouchableOpacity onPress={() => setOpen(!isOpened)}><Image style={{height: 33, width: 33}} source={require('../../assets/eye.png')}/></TouchableOpacity>
                </View>
              </View>

              <View style = {[styles.barrinhaIgual, {gap:'1%'}]}>
                <Text style = {{width: '90%', paddingLeft: 8}}>Confirmar senha</Text>
                <View style={styles.modeloInput}>
                  <TextInput secureTextEntry = {isOpened} style = {{height:'100%', width:'86%'}} placeholder="Insira sua senha..." />
                  <TouchableOpacity onPress={() => setOpen(!isOpened)}><Image style={{height: 33, width: 33}} source={require('../../assets/eye.png')}/></TouchableOpacity>
                </View>
              </View>
    
              <View style = {[styles.barrinhaIgual, {display: 'flex', flexDirection: 'row', gap: '5%', marginTop:'30%'}]}> 
                <TouchableOpacity style = {[styles.estBotao, {height: '100%', width: '90%', backgroundColor: '#6fc06fff'}]}>
                  <Text style = {{color:'#fff'}}>Acessar</Text>
                </TouchableOpacity>
              </View>
            </View>
    
            <View style ={[styles.containerInterno2, {height:'20%', justifyContent:'center'}]}>
              <View style = {{display:'flex', justifyContent:'center', alignItems:'center', gap: '10%'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style = {{width:'100%', height:'20%'}}><Text style = {{display:'flex', flexDirection:'column', gap:'10%', width:'100%', height:'100%'}}>Já possui uma conta?</Text></TouchableOpacity>
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