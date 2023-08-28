import { addDays } from "date-fns";
import { Day, Lunch } from "../Interfaces/Resturant";

export const ToDayString = (day: Day) => {
  switch (day) {
    case "mon":
      return "Mån";
    case "tue":
      return "Tis";
    case "wed":
      return "Ons";
    case "thu":
      return "Tor";
    case "fri":
      return "Fre";
    case "sat":
      return "Lör";
    case "sun":
      return "Sön";
    default:
      const _: never = day;
      return "Err";
  }
};
export const ToDayInt = (day: Day) => {
  switch (day) {
    case "mon":
      return 0;
    case "tue":
      return 1;
    case "wed":
      return 2;
    case "thu":
      return 3;
    case "fri":
      return 4;
    case "sat":
      return 5;
    case "sun":
      return 6;
    default:
      const _: never = day;
      return 0;
  }
};

export const SortLunches = (lunches: Lunch[]) => {
  return lunches.sort(SortLunch);
};

export const SortLunch = (a: Lunch, b: Lunch) =>
  ToDayInt(a.day) - ToDayInt(b.day);

export const IsToday = (a: Day) => {
  const today = new Date().getDay();
  switch (today) {
    case 1:
      return a === "mon";
    case 2:
      return a === "tue";
    case 3:
      return a === "wed";
    case 4:
      return a === "thu";
    case 5:
      return a === "fri";
    case 6:
      return a === "sat";
    case 7:
      return a === "sun";
  }

  return false;
};
