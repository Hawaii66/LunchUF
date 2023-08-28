import { SafeAreaView } from "react-native";
import Home from "./src/Pages/Home";
import { useState } from "react";
import { Restaurant } from "./src/Interfaces/Resturant";
import RestaurantRenderer from "./src/Components/RestaurantRenderer";

export default function App() {
  const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant | null>(
    null
  );

  if (currentRestaurant) {
    return (
      <SafeAreaView>
        <RestaurantRenderer
          onBack={() => setCurrentRestaurant(null)}
          restaurant={currentRestaurant}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Home
        onClickRestaurant={(e) => {
          setCurrentRestaurant(e);
        }}
      />
    </SafeAreaView>
  );
}
