import React, { useState } from "react";
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { DummyRestaurans } from "../Utils/DummyData";
import RestaurantCard from "../Components/RestaurantCard";
import { Restaurant } from "../Interfaces/Resturant";
import MapRenderer from "../Components/MapRenderer";
import EntypoIcon from "react-native-vector-icons/Entypo";

interface Props {
  onClickRestaurant: (restaurant: Restaurant) => void;
}

function Home({ onClickRestaurant }: Props) {
  const [showMap, setShowMap] = useState(false);

  if (showMap) {
    return (
      <MapRenderer
        onBack={() => setShowMap(false)}
        onSelect={onClickRestaurant}
      />
    );
  }

  return (
    <SafeAreaView>
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
          <TouchableOpacity
            onPress={() => setShowMap(true)}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              marginBottom: 40,
              marginHorizontal: 20,
            }}
          >
            <EntypoIcon name="map" size={24} color="black" />
            <Text
              style={{
                fontSize: 24,
                color: "black",
                fontWeight: "800",
              }}
            >
              Karta
            </Text>
          </TouchableOpacity>
          {DummyRestaurans.map((restaurant) => (
            <RestaurantCard
              onClick={() => onClickRestaurant(restaurant)}
              restaurant={restaurant}
              key={restaurant.name}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
