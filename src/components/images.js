import taco1 from "./images/taco1.png";
import pizza1 from "./images/pizza1.jpg";
import sushi from "./images/sushi1.png";
import burger from "./images/burger1.png";
import clubHouse from "./images/clubhouse1.png";
import donut from "./images/donut1.png";
import spaghetti from "./images/spaghetti.jpg";
import fries from "./images/fries1.png";

export default function returnImage() {
  return [
    { url: taco1, title: "Taco" },
    { url: pizza1, title: "Pizza" },
    { url: sushi, title: "Sushi" },
    { url: burger, title: "Burger" },
    { url: clubHouse, title: "Clubhouse" },
    { url: donut, title: "Donut" },
    { url: spaghetti, title: "Spaghetti" },
    { url: fries, title: "Fries" },
  ];
}
