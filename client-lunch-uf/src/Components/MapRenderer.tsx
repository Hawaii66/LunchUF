import React from "react";
import { Dimensions, TouchableOpacity, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { DummyRestaurans } from "../Utils/DummyData";
import { Restaurant } from "../Interfaces/Resturant";

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
      <TouchableOpacity
        onPress={onBack}
        style={{ zIndex: 100, position: "absolute", top: 4, left: 16 }}
      >
        <Text style={{ fontSize: 36, fontWeight: "800", color: "black" }}>
          {"<"}
        </Text>
      </TouchableOpacity>
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
