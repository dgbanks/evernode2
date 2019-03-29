require 'rails_helper'

FactoryBot.define do
  factory :canvas do
    title { "Ruby on Rails" }
    user_id { create(:jane).id }
  end
end
