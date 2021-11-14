import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    fontSize: 40,
    color: 'black',
    fontFamily: 'Gotham Book',
  },

  loginContainer: {
    top: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 17,
    fontFamily: "TCCC-UnityHeadline Bold",
    paddingBottom: 3,
  },
  loginBg: {
    top: width * 0.5,
    width: width * 0.6,
    height: 40,
    backgroundColor: "#F40000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
})