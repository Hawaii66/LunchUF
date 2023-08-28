import React from "react";
import { Restaurant } from "../Interfaces/Resturant";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import WeekLunch from "./WeekLunch";
import { SortLunch } from "../Utils/DayString";

interface Props {
  restaurant: Restaurant;
  onBack: () => void;
}

function RestaurantRenderer({ onBack, restaurant }: Props) {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
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
      <Text
        style={{
          fontSize: 36,
          fontWeight: "800",
          color: "black",
          textAlign: "center",
          textDecorationColor: "black",
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
        }}
      >
        {restaurant.name}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          color: "black",
          textAlign: "center",
          width: "80%",
        }}
      >
        {restaurant.description}
      </Text>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {restaurant.week.lunches.sort(SortLunch).map((lunch) => (
          <WeekLunch key={lunch.name} lunch={lunch} />
        ))}
      </View>
    </ScrollView>
  );
}

export default RestaurantRenderer;
