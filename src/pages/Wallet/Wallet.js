import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from "./Wallet.style";
function Wallet() {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <Text style={styles.header}>DAHA CÜZDAN</Text>
      <View style={styles.loginBg}>
        <Text style={styles.loginText} >Giriş Yap</Text>
      </View>
    </SafeAreaView>
  )
}
export default Wallet;