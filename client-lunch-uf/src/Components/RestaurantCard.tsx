import React from "react";
import { Restaurant } from "../Interfaces/Resturant";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface Props {
  restaurant: Restaurant;
  onClick: () => void;
}

function RestaurantCard({ restaurant, onClick }: Props) {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
      }}
    >
      <TouchableOpacity
        onPress={onClick}
        style={{
          width: "100%",
          aspectRatio: 4,
          borderRadius: 8,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          gap: 8,
          backgroundColor: "white",
          marginBottom: 8,
          padding: 4,
          shadowColor: "black",
          shadowOpacity: 0.8,
          shadowRadius: 6,
        }}
      >
        <View
          style={{
            borderRadius: 8,
            aspectRatio: 1,
            height: "100%",
          }}
        >
          <Image
            source={{ uri: restaurant.icon }}
            style={{ aspectRatio: 1, width: "100%", borderRadius: 8 }}
          />
        </View>
        <View
          style={{
            height: "100%",
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            flexGrow: 1,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "black",
              fontWeight: "800",
              textAlign: "left",
              width: "100%",
            }}
          >
            {restaurant.name}
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              color: "gray",
              fontWeight: "300",
              textAlign: "left",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {restaurant.description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default RestaurantCard;
