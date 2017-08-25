Rails.application.routes.draw do
  root "homes#index"
  resources :users
  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
end
