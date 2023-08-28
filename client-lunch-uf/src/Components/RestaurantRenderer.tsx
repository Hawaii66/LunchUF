import React, { useState } from "react";
import { Dish, Lunch, Restaurant } from "../Interfaces/Resturant";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import WeekLunch from "./WeekLunch";
import { SortLunch } from "../Utils/DayString";
import LunchCard from "./LunchCard";
import DishList from "./DishList";

interface Props {
  restaurant: Restaurant;
  onBack: () => void;
}

function RestaurantRenderer({ onBack, restaurant }: Props) {
  const [selectedLunch, setSelectedLunch] = useState<(Lunch | Dish) | null>(
    null
  );

  return (
    <>
      {selectedLunch && (
        <LunchCard
          lunch={selectedLunch}
          onBack={() => setSelectedLunch(null)}
        />
      )}
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
        <DishList
          name="Veckans meny"
          dishes={restaurant.week.lunches.sort(SortLunch)}
          onClick={(d) => setSelectedLunch(d)}
        />
        <DishList
          name="Alltid tillgängliga"
          dishes={restaurant.allways}
          onClick={(d) => setSelectedLunch(d)}
        />
      </ScrollView>
    </>
  );
}

export default RestaurantRenderer;
