import React from "react";
import { connect } from "react-redux";

//import actions
import { addFeatureAction } from "../actions/carActions";

const AdditionalFeature = (props) => {
  console.log("ADD FEATURE", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => {
          props.dispatch(addFeatureAction(props.feature));
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeatureAction })(AdditionalFeature);
