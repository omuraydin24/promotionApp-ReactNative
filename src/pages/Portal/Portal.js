import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from "./Portal.style";
function Wallet() {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <Text style={styles.header}>PORTAL</Text>
      <View style={styles.loginBg}>
        <Text style={styles.loginText} >Giriş Yap</Text>
      </View>
    </SafeAreaView>
  )
}
export default Wallet;

