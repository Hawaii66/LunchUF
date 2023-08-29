import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";

interface Props {
  size?: number;
  name?: string;
}

function BackIcon({ size = 36, name = "caret-back-circle-sharp" }: Props) {
  return <IonIcons name={name} size={size} />;
}

export default BackIcon;
