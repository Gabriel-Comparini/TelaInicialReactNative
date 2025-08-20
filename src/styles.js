import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInterno1: {
    width: '100%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'column',
    gap: '4%',
  },
  containerInterno2: {
    width: '100%',
    height: '35%',
    display: 'flex',
    alignItems:'center',

  },
  miniCabecalho: {
    width: "100%",
    height: "3%",
    backgroundColor: '#e6e3e3ff',
  },
  telaCentral: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: "97%",
    backgroundColor: '#f5f5f5ff',
    gap: '3%',
  },
  estBotao: {
    width: "85%",
    height: '8%',
    borderRadius: 6,
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
  },
  barrinhaIgual: {
    width: '100%',
    height: '12%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modeloInput: {
    backgroundColor: '#e6e3e3ff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    width: '90%',
    height: '90%',
    borderRadius: 6,
  },
});