import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import HTMLView from 'react-native-htmlview';

import styles from './DetailCard.style';

const DetailCard = ({ promotion, navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Image style={styles.image} source={{ uri: promotion.ImgUrl }} />
          <Image style={styles.badge} source={{ uri: promotion.BrandTags[0].BrandLogo }} />
          <View style={styles.countdownContainer}>
            <Text style={styles.countdown}>{promotion.RemainingDuration}</Text>
          </View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={{ uri: "https://lun-eu.icons8.com/a/nFvRsTu4o0K1F-_M8ryLXw/hAextyMRnEytFC7Yw72Y6w/Back_Button.png" }} resizeMode="contain"
              style={{
                width: 40, height: 40,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.header}>{promotion.Title}</Text>
          <View style={styles.description}>
            <HTMLView
              value={promotion.Description}
            />
          </View>
        </View>
      </SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`${promotion.DetailUrl}`) }}>
        <Text style={styles.buttonText}>Hemen Katıl</Text>
      </TouchableOpacity>
    </>
  )
}
export default DetailCard;