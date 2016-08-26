Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api do
    resources :benches, only: [:index, :create], :defaults => {:format => :json}
  end

end
