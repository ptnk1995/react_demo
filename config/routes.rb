Rails.application.routes.draw do
  resources :events
  root "homes#index"
  resources :users
  namespace :api do
    namespace :v1 do
      resources :events do
        get :search, on: :collection
      end
      resources :users
    end
  end
end
