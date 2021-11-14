import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: 40,
  },
  image: {
    width: '100%',
    height: height * 0.4,
    resizeMode: "stretch",
    borderBottomLeftRadius: 90,
  },
  line: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: 5,
  },
  header: {
    fontSize: 26,
    color: "#1D1E1C",
    margin: 15,
    fontFamily: 'TCCC-UnityHeadline Bold'
  },
  area: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'darkred',
  },
  recipe: {
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 40,
    backgroundColor: 'red',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.92,
    marginHorizontal: width * 0.04,
    marginVertical: 20,
  },
  buttonContainer: {
    position: "absolute",
    top: height * 0.95,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'TCCC-UnityHeadline Bold',
  },
  textContainer: {
    marginHorizontal: width * 0.04,
  },
  description: {
    marginHorizontal: width * 0.04,
  },
  badge: {
    width: 60,
    height: 60,
    borderRadius: 100,
    position: 'absolute',
    top: height * 0.33,
    left: width * 0.035,
    borderWidth: 5,
    borderColor: "white",
  },
  countdown: {
    fontSize: 13,
    color: "white",
    paddingBottom: 4,
    fontFamily: 'TCCC-UnityHeadline Bold'
  },
  countdownContainer: {
    backgroundColor: "#1D1E1C",
    height: 30,
    width: 100,
    position: "absolute",
    right: width * 0.04,
    top: width * 0.63,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
  },
  backButton: {
    height: 40,
    width: 40,
    marginLeft: 15,
    justifyContent: 'center',
    paddingTop: 50,
    position: "absolute",
  }
});