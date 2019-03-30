# require 'rails_helper'

FactoryBot.define do
  factory :john, class: User do
    first_name { "John" }
    last_name { "Doe" }
    email { "jdoe@email.com" }
  end
  
  factory :jane, class: User do
    first_name { "Jane" }
    last_name { "Doe" }
    email { "jdoe@email.com" }
    factory :jane_with_canvases do
      after(:create) do |user|
        create_list(:canvas, 3, user_id: user.id)
      end
    end
  end
end
