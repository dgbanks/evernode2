require 'rails_helper'

RSpec.describe Node, type: :model do
  describe "Validations" do
    let(:node) { build(:node) }

    it "is invalid without canvas_id" do
      expect(node).to be_valid
      node.canvas_id = nil
      expect(node).to_not be_valid
    end

    it "is invalid without either a title or content" do
      expect(node).to be_valid
      node.title = nil
      expect(node).to be_valid
      node.content = nil
      expect(node).to_not be_valid
    end
  end

  describe "Associations" do
    let(:node) { build(:node) }

    it "belongs to canvas" do
      association = described_class.reflect_on_association(:canvas)
      expect(association.macro).to eq(:belongs_to)
      expect(node.canvas).to be_a(Canvas)
    end

    it "has many edges" do
      association = described_class.reflect_on_association(:edges)
      expect(association.macro).to eq(:has_many)
    end

    it "has many edges to" do
      association = described_class.reflect_on_association(:edges_to)
      expect(association.macro).to eq(:has_many)
    end

    it "has many edges from" do
      association = described_class.reflect_on_association(:edges)
      expect(association.macro).to eq(:has_many)
    end
  end
end
