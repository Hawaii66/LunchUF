import React from "react";
import { Dish, Lunch } from "../Interfaces/Resturant";
import { Dimensions, View, Text, TouchableOpacity, Image } from "react-native";
import { ToDayString } from "../Utils/DayString";

interface Props {
  lunch: Lunch | Dish;
  onBack: () => void;
}

function LunchCard({ lunch, onBack }: Props) {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <TouchableOpacity
        onPress={onBack}
        style={{
          backgroundColor: "black",
          opacity: 0.2,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "black",
          shadowOpacity: 0.6,
          shadowRadius: 4,
          position: "relative",
          paddingHorizontal: 12,
          paddingVertical: 8,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "80%",
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: "black",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: 4,
          }}
        >
          {lunch.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {lunch.description}
        </Text>
        <View style={{ height: 20 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {"day" in lunch && (
            <Text style={{ color: "black", fontSize: 16, fontWeight: "400" }}>
              {ToDayString(lunch.day)}
            </Text>
          )}
          <Text style={{ color: "darkgreen", fontSize: 24, fontWeight: "600" }}>
            {lunch.price} kr
          </Text>
        </View>
        <Image
          source={{ uri: lunch.image }}
          style={{ width: "100%", aspectRatio: 1, borderRadius: 8 }}
        />
      </View>
    </View>
  );
}

export default LunchCard;
