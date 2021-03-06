Rails.application.routes.draw do
  root 'trips#new'
  resources :trips
  resources :users
  resources :sessions, only: [:new, :create, :destroy] do
    delete :destroy, on: :collection
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :gas
    end
  end
end
