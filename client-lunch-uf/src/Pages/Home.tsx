import React from "react";
import { Dimensions, View, Text, ScrollView } from "react-native";
import { DummyRestaurans } from "../Utils/DummyData";
import RestaurantCard from "../Components/RestaurantCard";
import { Restaurant } from "../Interfaces/Resturant";

interface Props {
  onClickRestaurant: (restaurant: Restaurant) => void;
}

function Home({ onClickRestaurant }: Props) {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        backgroundColor: "white",
        paddingHorizontal: 4,
        paddingVertical: 8,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 36,
          color: "black",
          fontWeight: "700",
        }}
      >
        Lunch UF
      </Text>
      <View style={{ width: "90%", height: 2, backgroundColor: "gray" }} />
      <Text
        style={{
          fontSize: 20,
          color: "black",
          fontWeight: "300",
        }}
      >
        Resturangers mat
      </Text>

      <ScrollView
        style={{
          maxWidth: "100%",
          paddingVertical: 8,
        }}
      >
        {DummyRestaurans.map((restaurant) => (
          <RestaurantCard
            onClick={() => onClickRestaurant(restaurant)}
            restaurant={restaurant}
            key={restaurant.name}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Home;