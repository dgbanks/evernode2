require 'rails_helper'

FactoryBot.define do
  factory :node do
    sequence(:title) { |x| "Ruby on Rails (#{x})" }
    sequence(:content) { |x| "This is the #{x.ordinalize} node about Ruby on Rails" }
    canvas_id { create(:canvas).id }
  end
end
