import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, Animated, StatusBar, Image, Dimensions } from 'react-native';import PromotionCard from "../../components/Cards/PromotionCard";
import styles from "./Kesfet.style";
import DahaLogo from "../../components/Assets/svg/DahaLogo";
import axios from "axios";

import Carousel from 'react-native-snap-carousel';

import { API } from '../../APIs';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = width * 0.8;


function Kesfet({ navigation }) {
  {/* Setting States*/ }
  const [promotions, setPromotions] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [initial, setInitial] = useState(true);

  const scrollX = new Animated.Value(0);
  const ref = useRef(null);

  {/* Fetching data from API */ }
  useEffect(() => {
    axios
      .get(`${API}`)
      .then((response) => response.data)
      .then((data) => setPromotions(data))
      .then((data) => setFilteredData(data))
      .catch((error) => console.log(error))
  }, []);

  {/* Routing function for detail screen */ }
  const handleDetail = PromotionID => {
    navigation.navigate('PromotionDetailScreen', { PromotionID });
  };
  {/* Filtering function of filter tags */ }
  const handlePromotion = (props) => {
    const filter = promotions?.filter((item) => {
      return item?.BrandTags[0].BrandName === props;
    });
    if (props !== "Tümü" || "") {
      (setFilteredData(filter), setInitial(false)) // Setting state while category selected
    } else setFilteredData(promotions) //while "Tümü" category is selected, show all promotions
  };
  {/* Removing duplicate results from "BrandName" data of API. */ }
  const arr1 = promotions[0];
  const arr2 = arr1?.BrandTags;
  const filteredArr = arr2?.reduce((acc, current) => {
    const x = acc.find(item => item.BrandName === current.BrandName);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  {/* Filtering tags' renderer function */ }
  const renderTags = ({ item }) => {
    return (
      <View style={{ flex: 1 }} >
        <TouchableOpacity onPress={() => handlePromotion(item?.BrandName)}>
          <View style={{ borderWidth: 1.5, borderColor: '#ECEEEF', borderRadius: 8, marginHorizontal: 5, height: 36, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Image
                  style={{ height: 24, width: 24, borderRadius: 7.2, marginLeft: 4 }}
                  source={{ uri: item.BrandName === "Tümü" ? "https://lun-eu.icons8.com/a/nFvRsTu4o0K1F-_M8ryLXw/axCf5r0SB0yzrazPanAiOw/Small_Brand_Logo_1.png" : item.BrandLogo }}
                />
              </View>
              <Text style={{ fontFamily: 'TCCC-UnityHeadline Bold', color: "#1D1E1C", marginHorizontal: 8 }}>
                {item.BrandName}
              </Text>
              {/* <Text style={{ fontFamily: 'TCCC-UnityHeadline Bold', color: "#1D1E1C", marginHorizontal: 8 }}>{item.BrandTags.map((a, i) => { if (i === 0) return (a.BrandName) }).join('')}</Text> */}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  {/* Promotions' renderer function */ }
  const renderPromotion = ({ item, index }) => {
    return (
      <PromotionCard promotion={item} onSelect={() => handleDetail(item.PromotionID)} />
    )
  };

  {/* Pagination renderer function */ }
  function renderDots() {
    const dotPosition = Animated.divide(scrollX, width)
    return (
      <View style={{ height: 85 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 10 }}>
          {(initial ? promotions : filteredData)?.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp"
            })
            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [8 * 0.8, 10, 8 * 0.8],
              extrapolate: "clamp"
            })
            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: ["#898C95", item.Color, "#898C95"],
              extrapolate: "clamp"
            })
            return (
              <Animated.View
                key={`dot-${index}`} //dot-1, dot-2
                opacity={opacity}
                style={{
                  borderRadius: 20,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor
                }}
              />
            )
          })}
        </View>
      </View>
    )
  }

  {/* Header renderer function */ }
  function Header() {
    return (
      <View style={styles.iconContainer}>
        <View style={styles.logo}>
          <DahaLogo />
        </View>
        {/* <Image style={styles.logo} source={{ uri: "https://lun-eu.icons8.com/a/nFvRsTu4o0K1F-_M8ryLXw/1BHVFvnJ3EehHonudqqsTw/Daha_Daha.png" }} /> */}
        <View style={styles.loginContainer}>
          <View style={styles.loginBg}>
            <Text style={styles.loginText} >Giriş Yap</Text>
          </View>
          <Image style={styles.profileIcon} source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg" }} />
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {
        Header()
      }
      <View style={{ flex: 1, marginTop: 25 }}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        <View style={{ flexDirection: 'row', AlignItems: "center" }}>
          <FlatList
            renderItem={renderTags}
            data={filteredArr}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }}>
          <Carousel
            ref={ref}
            layout={"default"}
            data={filteredData ? filteredData : promotions}
            renderItem={renderPromotion}
            sliderWidth={width}
            itemWidth={ITEM_SIZE}
            useScrollView={true}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToInterval={ITEM_SIZE}
          />
          <View>
            {
              renderDots()
            }
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Kesfet;