import React from "react";
import { connect } from "react-redux";

//import actions
import { removeFeatureAction } from "../actions/carActions";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeatureAction })(AddedFeature);
