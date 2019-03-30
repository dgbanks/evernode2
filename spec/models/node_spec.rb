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
    let(:canvas) { create(:canvas_with_nodes) }
    let(:node) { build(:node) }
    let(:nodes) { canvas.nodes }

    it "belongs to canvas" do
      association = described_class.reflect_on_association(:canvas)
      expect(association.macro).to eq(:belongs_to)
      expect(node.canvas).to be_a(Canvas)
    end

    it "has many edges" do
      main = nodes.last
      6.times do |i|
        create(
          :edge,
          source_id: i.odd? ? main.id : nodes[i].id,
          target_id: i.odd? ? nodes[i].id : main.id,
        )
      end
      association = described_class.reflect_on_association(:edges)
      expect(association.macro).to eq(:has_many)
      expect(main.edges.length).to eq(6)
      expect(main.edges.all? { |e| e.is_a?(Edge) }).to be true
    end

    it "has many edges to" do
      target = nodes.last
      3.times { |i| create(:edge, source_id: nodes[i].id, target_id: target.id) }
      association = described_class.reflect_on_association(:edges_to)
      expect(association.macro).to eq(:has_many)
      expect(target.edges_to.length).to eq(3)
      expect(target.edges_to.all? { |e| e.is_a?(Edge) }).to be true
      expect(target.edges.all? { |e| e.is_a?(Edge) }).to be true

    end

    it "has many edges from" do
      source = nodes.last
      3.times { |i| create(:edge, source_id: source.id, target_id: nodes[i].id) }
      association = described_class.reflect_on_association(:edges_from)
      expect(association.macro).to eq(:has_many)
      expect(source.edges_from.length).to eq(3)
      expect(source.edges_from.all? { |e| e.is_a?(Edge) }).to be true
    end
  end
end
