class Api::RecipesController < ApplicationController
  def index
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end

  def delete
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render status: 200
  end

  def update
    
    @recipe = Recipe.find params[:id]
    @recipe.update!(recipe_params)
    render json: @recipe
  end

  def create
    @recipe = Recipe.create!(recipe_params)
    render json: @recipe
  end
  def recipe_params
    params.require(:recipe).permit(:name, :cooking_directions, :ingredients)
end
end
