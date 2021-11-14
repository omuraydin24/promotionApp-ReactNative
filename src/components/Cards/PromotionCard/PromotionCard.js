import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from './PromotionCard.styles';

const ITEM_SIZE = width * 0.8;

const PromotionCard = ({ promotion, onSelect }) => {
  return (
    <View style={{ width: ITEM_SIZE }}>
      <View style={{ marginHorizontal: 30, padding: 10, alignItems: 'center', marginTop: 50, marginHorizontal: 10 }}>
        <TouchableWithoutFeedback onPress={onSelect} >
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: promotion.ImgUrl }} />
            <Image style={styles.badge} source={{ uri: promotion.BrandTags[0].BrandLogo }} />
            <View style={styles.countdownContainer}>
              <Text style={styles.countdown}>{promotion.RemainingDuration}</Text>
            </View>
            <View style={styles.body_container}>
              <Text style={styles.title}>{promotion.Title}</Text>
              <Text style={{ color: promotion.Color, fontFamily: 'TCCC-UnityHeadline Bold', marginVertical: 15 }}>Daha Daha</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
export default PromotionCard;