require 'rails_helper'

FactoryBot.define do
  factory :node do
    title { "Ruby on Rails" }
    content { "This is a node all about Ruby on Rails" }
    canvas_id { create(:canvas).id }
    factory :node_with_edges do
      after(:create) do |node|
        create_list(:edge, 3, source_id: node.id, target_id: node.id)
      end
    end
  end

  factory :other_node, class: Node do
    title { "RSpec" }
    content { "This is a node all about RSpec" }
    canvas_id { create(:canvas).id }
  end
end
