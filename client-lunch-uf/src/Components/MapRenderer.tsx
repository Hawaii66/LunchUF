import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { DummyRestaurans } from "../Utils/DummyData";
import { Restaurant } from "../Interfaces/Resturant";
import BackIcon from "./BackIcon";

interface Props {
  onSelect: (restaurant: Restaurant) => void;
  onBack: () => void;
}

function MapRenderer({ onSelect, onBack }: Props) {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        position: "relative",
      }}
    >
      <SafeAreaView
        style={{ position: "absolute", top: 0, left: 0, zIndex: 100 }}
      >
        <TouchableOpacity
          onPress={onBack}
          style={{ zIndex: 100, marginLeft: 16 }}
        >
          <BackIcon />
        </TouchableOpacity>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 58.755883967768334,
          longitude: 17.005785099243408,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: 58.755883967768334,
          longitude: 17.005785099243408,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {DummyRestaurans.map((restaurant) => (
          <Marker
            coordinate={{
              latitude: restaurant.location.lat,
              longitude: restaurant.location.lng,
            }}
            title={restaurant.name}
            description={restaurant.description}
            key={restaurant.name}
            onCalloutPress={() => onSelect(restaurant)}
          />
        ))}
      </MapView>
    </View>
  );
}

export default MapRenderer;
