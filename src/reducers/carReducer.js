const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

//action pseudocode
//ADD_FEATURE:
//1) Copy State
//2) move additional Feature to features
//3) Add features.price to Additional Price
//4) Add additional Price to car.Price
//5) add total price

//REMOVE_FEATURE:
//1)move feature from features to additional features
//2)subtract feature from additional price
//3) Subtract additional price from car.price

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE": //these need to
      return {
        ...state, //copy state
        additionalPrice: state.additionalPrice + action.payload.price, //action.payload is the object that stores price
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalFeatures: state.additionalFeatures.filter((feature) => {
          return feature !== action.payload;
        }),
      };
    case "REMOVE_FEATURE":
      return { ...state }; //
    default:
      return state;
  }
};
