Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :cities, only: [:create, :show,:index] do
      resources :businesses, only: [:index]
    end
    resources :businesses, only: [:show, :update,:index] do
      resources :reviews, only: [:index, :create, :update]
    end
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:destroy,:show]

  end


end
