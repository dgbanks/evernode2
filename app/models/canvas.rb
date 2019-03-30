class Canvas < ApplicationRecord
  validates_presence_of :title, :user_id
  belongs_to :owner, foreign_key: :user_id, class_name: :User
  has_many :nodes
  has_many :edges, through: :nodes, source: :edges
end
