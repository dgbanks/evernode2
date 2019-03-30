RSpec.describe User, type: :model do
  describe "Validations" do
    let(:user) { build(:user, email: "johndoe@email.com") }

    it "is invalid without first_name" do
      expect(user).to be_valid
      user.first_name = nil
      expect(user).to_not be_valid
    end

    it "is invalid without last_name" do
      expect(user).to be_valid
      user.last_name = nil
      expect(user).to_not be_valid
    end

    it "is invalid without email" do
      expect(user).to be_valid
      user.email = nil
      expect(user).to_not be_valid
    end

    it "has a properly formatted email" do
      expect(user).to be_valid
      user.email = "johndoe"
      expect(user).to_not be_valid
    end

    it "enforces email uniqueness" do
      create(:user, email:"johndoe@email.com")
      expect(user).to_not be_valid
    end
  end

  describe "Associations" do
    let(:user) { create(:user_with_canvases) }

    it "has many canvases" do
      association = described_class.reflect_on_association(:canvases)
      expect(association.macro).to eq :has_many
      expect(user.canvases.length).to eq(3)
      expect(user.canvases.all? { |c| c.is_a?(Canvas) }).to be true
    end
  end

  describe "#name" do
    let(:user) { build(:user) }

    it "returns first and last name separated by a space" do
      expect(user.name).to eq(user.first_name + " " + user.last_name)
      expect(user.name).to eq("John Doe")
    end
  end
end
