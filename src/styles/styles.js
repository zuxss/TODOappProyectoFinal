import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDEE',
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#50C2C9',
    width: '85%',
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
    marginBottom: 15,
  },

  loginText: {
    color: '#50C2C9',
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
  },
  inputGroup: {
    width: '85%',
    marginBottom: 65,
    marginTop: 65,
  },
});
