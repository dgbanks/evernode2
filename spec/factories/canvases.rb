# require 'rails_helper'

FactoryBot.define do
  factory :user do
    first_name { "Canvas" }
    last_name { "Owner" }
    email { "canvasowner@email.com" }
  end

  factory :canvas do
    title { "Ruby on Rails" }
    user_id { create(:user).id }
    factory :canvas_with_nodes do
      after(:create) do |canvas|
        create_list(:node, 10, canvas_id: canvas.id)
      end
    end
  end
end
