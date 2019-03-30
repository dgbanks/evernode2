class Node < ApplicationRecord
  validates_presence_of :canvas_id
  validate do |record|
    if [:title, :content].all? { |attr| self[attr].blank? }
      record.errors[:title] << ("Either title or content must be present")
      record.errors[:content] << ("Either title or content must be present")
    end
  end
  
  belongs_to :canvas
  has_many :edges, -> (node) { where("source_id = :id OR target_id = :id", id: node.id) }
  has_many :edges_to, foreign_key: :target_id, class_name: :Edge
  has_many :edges_from, foreign_key: :source_id, class_name: :Edge
end
