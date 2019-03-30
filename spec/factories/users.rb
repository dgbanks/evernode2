FactoryBot.define do
  factory :user do
    first_name { "John" }
    last_name { "Doe" }
    sequence(:email) { |x| "johndoe#{x}@email.com" }
    factory :user_with_canvases do
      after(:create) do |user|
        create_list(:canvas, 3, user_id: user.id)
      end
    end
  end
end
