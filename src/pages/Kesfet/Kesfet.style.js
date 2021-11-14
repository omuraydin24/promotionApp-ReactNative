import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  logo: {
    width: 80,
    height: 40,
  },
  iconContainer: {
    marginTop: 50,
    marginHorizontal: 15,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileIcon: {
    width: 50,
    height: 50,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: -5,
  },
  loginText: {
    color: "white",
    fontSize: 12,
    fontFamily: "TCCC-UnityHeadline Bold",
    paddingBottom: 3,

  },
  loginBg: {
    width: 91,
    height: 40,
    backgroundColor: "#F40000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 5,
  },
})