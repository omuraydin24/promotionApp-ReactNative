import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: '#F4F6F5',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
        height: 362,
    },
    image: {
        width: 295,
        minHeight: 247,
        resizeMode: "contain",
        borderRadius: 15,
        borderBottomLeftRadius: 100,
        margin: 5,
    },
    body_container: {
        padding: 5,
        justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginVertical: 5,
        fontSize: 14,
        color: '#1D1E1C',
        fontFamily: 'TCCC-UnityHeadline Bold',
        textAlign: 'center',
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
    },
    tag: {
        height: 55,
        width: 55,
        position: "absolute",
    },
    subContainer: {
        height: 400,
        width: 310,
        backgroundColor: "red",
    },
    badge: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 100,
        position: 'absolute',
        top: height * 0.28,
        left: width * 0.02,
        borderWidth: 5,
        borderColor: "white",
        padding: 15,
    },
    countdown: {
        fontSize: 13,
        color: "white",
        paddingBottom: 3,
        fontFamily: 'TCCC-UnityHeadline Bold',
    },
    countdownContainer: {
        backgroundColor: "#1D1E1C",
        height: 30,
        width: 100,
        position: "absolute",
        right: width * 0.025,
        top: height * 0.3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
});