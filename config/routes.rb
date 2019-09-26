Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'folders#index'
  resources :folders, only: [:index, :create, :edit, :destroy] do
    resources :memos, only: [:index, :show, :create, :update, :edit, :destroy]
  end
  mount Ckeditor::Engine => '/ckeditor'
end
