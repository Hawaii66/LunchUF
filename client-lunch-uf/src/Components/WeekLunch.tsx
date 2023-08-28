import React, { useEffect, useRef, useState } from "react";
import { Dish, Lunch } from "../Interfaces/Resturant";
import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import { IsToday, ToDayString } from "../Utils/DayString";
import LunchCard from "./LunchCard";

interface Props {
  lunch: Lunch | Dish;
  onClick: () => void;
}

function WeekLunch({ lunch, onClick }: Props) {
  const scaleAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnimated, {
      toValue: 1,
      useNativeDriver: false,
      delay: 200,
      duration: 300,
    }).start();
  }, []);

  return (
    <>
      <TouchableOpacity onPress={onClick} style={{ padding: 8 }}>
        <Animated.View
          style={{
            width: "90%",
            aspectRatio: 4,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
            borderRadius: 4,
            backgroundColor: "white",
            shadowColor: "black",
            shadowOpacity: 0.7,
            shadowRadius: 4,
            transform: [
              {
                scale:
                  "day" in lunch
                    ? IsToday(lunch.day)
                      ? scaleAnimated.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 1.08],
                        })
                      : scaleAnimated.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.98],
                        })
                    : 1,
              },
            ],
          }}
        >
          <View
            style={{
              borderRadius: 4,
              aspectRatio: 1,
              height: "100%",
              position: "relative",
            }}
          >
            <Image
              style={{ aspectRatio: 1, borderRadius: 4, height: "100%" }}
              source={{ uri: lunch.image }}
            />
            <Text
              style={{
                textShadowColor: "black",
                textShadowRadius: 4,
                borderRadius: 999,
                paddingHorizontal: 4,
                paddingVertical: 2,
                fontSize: 16,
                color: "lime",
                fontWeight: "800",
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            >
              {lunch.price} kr
            </Text>
          </View>
          <View
            style={{
              padding: 4,
              height: "100%",
              flex: 1,
            }}
          >
            {"day" in lunch && (
              <Text style={{ fontWeight: "800", fontSize: 24, color: "black" }}>
                {ToDayString(lunch.day)}: {lunch.name}
              </Text>
            )}
            <Text>{lunch.description}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
}

export default WeekLunch;
