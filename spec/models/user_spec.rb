# require 'rails_helper'

RSpec.describe User, type: :model do
  describe "Validations" do
    let(:john) { build(:john) }
    let(:jane) { create(:jane) }

    it "is valid with valid attribtues" do
      expect(john).to be_valid
    end

    it "is not valid without first_name" do
      john.first_name = nil
      expect(john).to_not be_valid
    end

    it "is not valid without last_name" do
      john.last_name = nil
      expect(john).to_not be_valid
    end

    it "is not valid without email" do
      john.email = nil
      expect(john).to_not be_valid
    end

    it "has a properly formatted email" do
      john.email = "johndoe"
      expect(john).to_not be_valid
    end

    it "enforces email uniqueness" do
      jane; john.save
      expect(john).to_not be_valid
    end
  end

  describe "Associations" do
    let(:jane) { create(:jane_with_canvases) }

    it "has many canvases" do
      association = described_class.reflect_on_association(:canvases)
      expect(association.macro).to eq :has_many
      expect(jane.canvases.length).to eq(3)
      expect(jane.canvases.all? { |c| c.is_a?(Canvas) }).to be true
    end
  end

  describe "#name" do
    let(:john) { build(:john) }

    it "returns first and last name separated by a space" do
      expect(john.name).to eq("John Doe")
    end
  end
end
