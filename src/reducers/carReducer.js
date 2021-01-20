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
    case "ADD_FEATURE": //the type within the action
      return {
        ...state, //copy state that doesn't need to be changed
        additionalPrice: state.additionalPrice + action.payload.price, //action.payload is feature so go deeper into price.
        car: {
          ...state.car, //copy the car object that isn't changed
          features: [...state.car.features, action.payload], //change features to add the feature
        },
        additionalFeatures: state.additionalFeatures.filter((feature) => {
          return feature !== action.payload; //filter through additionalfeatures & return those that are not the same as feature
        }),
      };
    case "REMOVE_FEATURE":
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (feature) => feature !== action.payload
          ),
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
      }; //
    default:
      return state;
  }
};
