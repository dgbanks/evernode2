require 'rails_helper'

RSpec.describe Edge, type: :model do
  describe "Validations" do
    let(:node) { create(:node) }
    let(:edge) { build(:edge, source_id: node.id, target_id: node.id) }

    it "is invalid without source_id" do
      edge.source_id = nil
      expect(edge).to_not be_valid
    end

    it "is invalid without target_id" do
      edge.target_id = nil
      expect(edge).to_not be_valid
    end

    it "is valid with or without text" do
      expect(edge).to be_valid
      edge.content = nil
      expect(edge).to be_valid
    end
  end

  describe "Associations" do
    let(:nodes) { create(:canvas_with_nodes).nodes }
    let(:edge) { create(:edge, source_id: nodes.first.id, target_id: nodes.last.id) }

    it "belongs to source" do
      association = described_class.reflect_on_association(:source)
      expect(association.macro).to eq(:belongs_to)
      expect(edge.source).to be_a(Node)
    end

    it "belongs to target" do
      association = described_class.reflect_on_association(:target)
      expect(association.macro).to eq(:belongs_to)
      expect(edge.target).to be_a(Node)
    end
  end
end
