export type Restaurant = {
  name: string;
  icon: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  week: WeekLunch;
  allways: Dish[];
};

export type WeekLunch = {
  lunches: Lunch[];
  open: {
    start: number;
    end: number;
  };
};

export type Day = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type Dish = {
  name: string;
  description: string;
  image: string;
  price: number;
};

export type Lunch = Dish & {
  day: Day;
};
