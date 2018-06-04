class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id]).recipes.all
    @recipes = Recipe.all
    @response = {user: @user, recipes: @recipes}
    render json: @user
  end
end
