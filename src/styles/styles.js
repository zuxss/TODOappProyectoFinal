import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    margin: 'auto',
    alignItems: 'center',
    width: '100%',
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
    zIndex: 1,
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

  userCard: {
    backgroundColor: '#50C2C9',
    width: '100%',
    height: 250,
    alignItems: 'center',
    padding: 100,
  },
  userImg: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },

  taskListContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 15,
    elevation: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginBottom: 20,
    width: '85%',
  },
  taskListTitleContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },

  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});
