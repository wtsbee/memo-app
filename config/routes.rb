Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'folders#index'
  resources :folders, only: [:index, :new, :create, :edit, :destroy] do
    resources :memos, only: [:index, :show, :new, :create, :update, :edit]
  end
end
