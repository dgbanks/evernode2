FactoryBot.define do
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
