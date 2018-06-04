Rails.application.routes.draw do
  namespace :api do
    get 'users/index'
    get 'users/show'
  end
  namespace :api do
    resources :users do
      resources :recipes 
    end
  end
end
