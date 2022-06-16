import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/recipes";

const Recipes = (props) => {
  useEffect(() => {
    props.fetchAllRecipes();
  }, []);
  return <div>from recipes</div>;
};
const mapStateToProps = (state) => ({
  recipeList: state.recipe.list,
});

const mapActionToProps = {
  fetchAllRecipes: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(Recipes);
