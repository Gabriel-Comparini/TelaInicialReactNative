import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import {useState} from 'react';
import Checkbox from 'expo-checkbox';
import { styles } from '../styles';

export default function SecondScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  const [isOpened, setOpen] = useState(true);

  return (
    <View style = {styles.container}>
      <View style = {styles.miniCabecalho}></View>

      <View style = {styles.telaCentral}>
        <View style={styles.containerInterno1}>
          <View style = {[styles.barrinhaIgual, {alignItems:'flex-start', paddingLeft:'5%',marginBottom:'8%'}]}>
            <Text style = {{fontFamily: "Inter-Bold", fontSize: 40, color: '#2a3e54ff'}}>Acesse</Text>
            <Text style = {{fontFamily: "Inter-Bold", fontSize: 15, color: '#2a3e54ff', paddingLeft: 2}}>Inicie fazendo o login!</Text>
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
            
          <View style = {[styles.barrinhaIgual, {flexDirection: 'row', gap:'20%'}]}>
            <View>
              <View style = {{flexDirection:'row'}}>
                <Checkbox value={isChecked} onValueChange={setChecked} style={{ marginRight: 4 }} color={isChecked ? '#6fc06fff' : undefined} />
                <Text>Lembrar senha</Text>
              </View>
            </View>

            <TouchableOpacity>
              <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          <View style = {[styles.barrinhaIgual, {display: 'flex', flexDirection: 'row', gap: '5%'}]}> 
            <TouchableOpacity style = {[styles.estBotao, {height: '100%', width: '43%', backgroundColor: '#6fc06fff'}]}>
              <Text style = {{color: '#fff'}}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()} style = {[styles.estBotao, {height: '100%', width: '43%', backgroundColor:'#fff'}]}>
              <Text style = {{color: '#2a3e54ff'}}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style ={styles.containerInterno2}>
          <View style = {{display:'flex', justifyContent:'center', alignItems:'center', gap: '10%'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Third')} style = {{width:'100%', height:'20%'}}><Text style = {{display:'flex', flexDirection:'column', gap:'10%', width:'100%', height:'100%'}}>Ainda não possui uma conta?</Text></TouchableOpacity>
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