import React from "react";
import { View, Text } from "react-native";
import { SortLunch } from "../Utils/DayString";
import WeekLunch from "./WeekLunch";
import { Dish, Lunch } from "../Interfaces/Resturant";

interface Props {
  name: string;
  dishes: (Lunch | Dish)[];
  onClick: (dish: Lunch | Dish) => void;
}

function DishList({ name, dishes, onClick }: Props) {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: 8,
        marginTop: 12,
      }}
    >
      <Text
        style={{
          fontWeight: "600",
          fontSize: 24,
          color: "black",
          textDecorationColor: "black",
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
        }}
      >
        {name}
      </Text>
      {dishes.map((lunch) => (
        <WeekLunch
          onClick={() => onClick(lunch)}
          key={lunch.name}
          lunch={lunch}
        />
      ))}
    </View>
  );
}

export default DishList;
