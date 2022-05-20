import React, { Component } from 'react';
import './home.scss';
import RecipeList from '../recipeList/RecipeList';
import EditRecipeForm from '../editRecipe/EditRecipeForm';
import NewRecipeForm from '../newRecipeForm/NewRecipeForm';
import RecipeDetail from '../recipeDetail/RecipeDetail';
import Button from '@mui/material/Button';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedRecipe: null,
      editing: false,
      mainRecipeList: [],
      formVisibleOnPage: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedRecipe != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedRecipe: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = 
        <EditRecipeForm />
      buttonText = "Return to Recipe List"
    } else if (this.state.selectedRecipe != null) {
      currentlyVisibleState = 
      <RecipeDetail />
      buttonText= "Return to Recipe List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewRecipeForm />
      buttonText="Add Recipe"
    } else {
      currentlyVisibleState = 
      <RecipeList 
        recipeList={this.state.mainRecipeList} />
      buttonText="Add Recipe";
  }

    return (
      <>
        <div className='homeContainer'>
          {currentlyVisibleState}
          {/* <Button variant="contained" color="success" onClick={this.handleClick}>{buttonText}</Button> */}
          <Button variant="outline-success" type="submit" onClick={this.handleClick}>{buttonText}</Button>
          
        {/* <h1>.Net/ React -- Recipe Application</h1>
          <h2>Recipe List Component</h2> */}
        </div>
      </>
    );
  }
}
