export const addFeatureAction = (feature) => {
  return { type: "ADD_FEATURE", payload: feature };
};

export const removeFeatureAction = (feature) => {
  return { type: "REMOVE_FEATURE", payload: feature };
};
