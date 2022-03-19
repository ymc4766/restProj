import React, { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { LocationContext } from "../../Service/Location/location-context";
import { RestaurantsContext } from "../../Service/res-context";
import { MapCallout } from "./map-callout";

import SearchMap from "./Search-map";

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;
  console.log(viewport);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport.southwest]);

  return (
    <View>
      <SearchMap />
      <MapView
        style={{ height: "100%" }}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((rest) => {
          return (
            <MapView.Marker
              key={rest.name}
              Title={rest.name}
              coordinate={{
                latitude: rest.geometry.location.lat,
                longitude: rest.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: rest,
                  })
                }
              >
                <View>
                  <MapCallout restaurant={rest} />
                </View>
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapView>
    </View>
  );
};
