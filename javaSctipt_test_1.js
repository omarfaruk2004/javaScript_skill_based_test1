// Coding Challenge #1: Basketball Score

function totalBasketballScore(freeThrows, midRange, threePoints) {
  const args = Array.from(arguments);
  const argsLen = args.length;
  const points = [1, 2, 3];
  let totalScore = 0;
  for (let i = 0; i < argsLen; i++) {
    totalScore += args[i] * points[i];
  }
  return totalScore;
}
const sum = totalBasketballScore(2, 3, 4);
console.log(`Total score is ${sum}`);

// Coding Challenge #2: Computer Store

function itemPrice(item) {
  if (typeof item !== "string") {
    console.log("you must have to input a string");
    return -1;
  }
  switch (item) {
    case "computer":
      return 500;
    case "mouse":
      return 10;
    case "tablet":
      return 250;
    case "case":
      return 25;
    case "router":
      return 100;
    default:
      console.log("Sorry, youre desired item is not avilable");
  }
}
const price = itemPrice("case");
console.log("Your total is: ", price);

// Coding Challenge #3: What’s for dinner?

function randomRestaurant(numOfRestaurants) {
  const restaurantArr = [
    "Applebees",
    "Panera Bread",
    "Popeyes",
    "Chopt",
    "Chick-fil-A",
    "Cheesecake Factory",
    "Five Guys",
  ];
  const resArrLen = restaurantArr.length;

  const randomRastaurantList = [];
  for (let i = 0; i < numOfRestaurants; i++) {
    const randomNum = Math.floor(Math.random() * resArrLen);
    randomRastaurantList.push(restaurantArr[randomNum]);
  }
  return randomRastaurantList;
}

const resultArr = randomRestaurant(3);
console.log("the arr is:", resultArr);

//Coding Challenge #4: Leap Year
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  }
  return false;
}

const leapYear = isLeapYear(2996);
console.log("is lear year? =>", leapYear);
