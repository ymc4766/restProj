import { StyleSheet, View, Image } from "react-native";

import { SvgXml } from "react-native-svg";
// import { SvgXml } from "react-native-svg";

import open from "../../Utils/open";
import star from "../../Utils/star";
import { Text } from "../../components/Typography/Text";

import {
  Section,
  Rating,
  SectionEnd,
  Info,
  Address,
  RestaurantCard,
  RestaurantCardCover,
  placeId,
} from "./restaurant-card-style";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "salama",
    icon = "https://cdn.pixabay.com/photo/2020/03/23/03/48/closed-4959355_960_720.png",

    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1k3C0-nHM28icfghobYhZocCiz9xWYabOb0m_AILgNuptCjdEvj2cDuJigT6EBbBzjn4&usqp=CAU",
    ],
    address = "my addres",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Text variant="label"> {name} restaurant</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width="20"
                height="20"
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarly</Text>
            )}
            <View style={{ paddingLeft: 10 }} />
            {isOpenNow && <SvgXml xml={open} width="20" height="20" />}
            <Image
              source={{ uri: icon }}
              style={{
                width: 20,
                height: 16,
                marginLeft: 8,
                marginRight: 4,
              }}
            />
          </SectionEnd>
          {/* </Rating> */}
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
