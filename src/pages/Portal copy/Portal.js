import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./Portal.style";
function Wallet() {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.header}>PORTAL</Text>
      <View style={styles.loginBg}>
        <Text style={styles.loginText} >Giriş Yap</Text>
      </View>
    </View>
  )
}
export default Wallet;

