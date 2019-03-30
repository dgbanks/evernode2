require 'rails_helper'

FactoryBot.define do
  factory :edge do
    source_id { create(:node).id }
    target_id { create(:other_node).id }
    content { "RSpec is a testing library" }
  end
end
