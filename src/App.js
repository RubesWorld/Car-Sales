import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

//redux
import { connect } from "react-redux";

//actions
import { addFeatureAction, removeFeatureAction } from "./actions/carActions";

const App = (state) => {
  console.log("app state:", state);

  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: "2019 Ford Mustang",
  //     image:
  //       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  //     features: [],
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: "V-6 engine", price: 1500 },
  //     { id: 2, name: "Racing detail package", price: 1500 },
  //     { id: 3, name: "Premium sound system", price: 500 },
  //     { id: 4, name: "Rear spoiler", price: 250 },
  //   ],
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} dispatch={state.props.dispatch} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={state.additionalFeatures}
          dispatch={state.props.dispatch}
        />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

//mapStateToProps SELECTS WHICH STATE NEED TO BE PASSED TO THIS PAGE
const mapStateToProps = (state) => {
  console.log("STATE:", state);
  return {
    ...state,
  };
};

// export default App;

export default connect(mapStateToProps, {
  removeFeatureAction,
  addFeatureAction,
})(App);
