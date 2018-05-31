Rails.application.routes.draw do
  namespace :api do
    get 'recipes/index'
    get 'recipes/show'
    get 'recipes/delete'
    get 'recipes/update'
    get 'recipes/create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
