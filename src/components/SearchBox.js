import React, { useContext, useState, useEffect } from "react";
import styledComponents from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../Service/Location/location-context";

const SearchBox = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search  restaurant"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

const SearchContainer = styledComponents.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom :15px

`;

export default SearchBox;
