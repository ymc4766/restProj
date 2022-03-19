import React, { useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { RestaurantInfoCard } from "../features/restaurants/RestaurantInfoCard";
import styled from "styled-components/native";
import { RestaurantsContext } from "../Service/res-context";
import { ActivityIndicator, Colors } from "react-native-paper";
import SearchBox from "../components/SearchBox";
import { SafeArea } from "../Utils/safeArea";

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}

      <SearchBox />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
// `;

const RestaurantListCard = styled.View`
  flex: 1;
  padding: 16px;
  background: white;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
