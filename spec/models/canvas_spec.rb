require 'rails_helper'

RSpec.describe Canvas, type: :model do
  describe "Validations" do
    let(:canvas) { build(:canvas) }

    it "is invalid without title" do
      canvas.title = nil
      expect(canvas).to_not be_valid
    end

    it "is invalid without user_id" do
      canvas.user_id = nil
      expect(canvas).to_not be_valid
    end

    it "is valid with valid attribtues" do
      expect(canvas).to be_valid
    end
  end

  describe "Associations" do
    let(:canvas) { build(:canvas) }
    
    it "belongs to an owner" do
      association = described_class.reflect_on_association(:owner)
      expect(association.macro).to eq(:belongs_to)
      expect(canvas.owner).to be_a(User)
    end
  end
end
