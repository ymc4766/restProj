import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background: white;
  margin-bottom: 10px;
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background: white;
  ${"" /* padding: 14px; */}
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: 15px;
`;
export const Info = styled.View`
  padding: 12px 5px;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: 7px 0px;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction :row
  justify-content: flex-end;
  display : flex;
  align-items :center;
`;
