import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/Cards/DetailCard';
import { API } from '../../APIs'

{/* Detail Page */ }
function Detail({ route, navigation }) {
  const { PromotionID } = route.params;
  const { data } = useFetch(`${API}/${PromotionID}`);

  const renderPromotion = ({ item }) => <DetailCard promotion={item} navigation={navigation} />

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.PromotionID}
        renderItem={renderPromotion}
      >
      </FlatList>
    </SafeAreaView>
  )
}
export default Detail;