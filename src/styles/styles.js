import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    alignItems: 'center',

    backgroundColor: '#EDEDEE',
  },
  button: {
    backgroundColor: '#50C2C9',
    width: '85%',
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  textTittle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
    marginBottom: 15,
  },

  secondaryText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 75,
    textAlign: 'center',
  },

  loginText: {
    color: '#50C2C9',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },

  elipse: {
    position: 'absolute',
    top: -105,
    left: -125,
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 50,
    marginBottom: 20,
    paddingLeft: 40,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    width: '90%',
  },
  inputGroup: {
    width: '90%',
    marginBottom: 65,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  imgTittle: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
});
