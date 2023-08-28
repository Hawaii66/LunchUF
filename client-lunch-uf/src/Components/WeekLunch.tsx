import React, { useEffect, useRef } from "react";
import { Lunch } from "../Interfaces/Resturant";
import { View, Text, Image, Animated } from "react-native";
import { IsToday, ToDayString } from "../Utils/DayString";

interface Props {
  lunch: Lunch;
}

function WeekLunch({ lunch }: Props) {
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
    <View style={{ padding: 8 }}>
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
              scale: IsToday(lunch.day)
                ? scaleAnimated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.08],
                  })
                : scaleAnimated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.98],
                  }),
            },
          ],
        }}
      >
        <View
          style={{
            borderRadius: 4,
            aspectRatio: 1,
            height: "100%",
          }}
        >
          <Image
            style={{ aspectRatio: 1, borderRadius: 4, height: "100%" }}
            source={{ uri: lunch.image }}
          />
        </View>
        <View
          style={{
            padding: 4,
            height: "100%",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 24, color: "black" }}>
            {ToDayString(lunch.day)}: {lunch.name}
          </Text>
          <Text>{lunch.description}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

export default WeekLunch;
