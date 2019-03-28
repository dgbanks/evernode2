require 'rails_helper'

RSpec.describe User, type: :model do

  describe "Validations" do
    subject { described_class.new(email: "johndoe@email.com") }

    it "is valid with valid attribtues" do
      subject.email = nil
      expect(subject).to_not be_valid
    end
    it "is not valid without first_name" do
      subject.last_name = "Doe"
      expect(subject).to_not be_valid
    end
    it "is not valid without last_name" do
      subject.first_name = "John"
      expect(subject).to_not be_valid
    end
    it "is not valid without email" do
      subject.first_name = "John"
      subject.last_name = "Doe"
      subject.email = nil
      expect(subject).to_not be_valid
    end
    it "has a properly formatted email" do
      subject.first_name = "John"
      subject.last_name = "Doe"
      subject.email = "johndoe"
      expect(subject).to_not be_valid
      subject.email = "johndoe@email.com"
      expect(subject).to be_valid
    end

    it "has enforces email uniqueness" do
      subject.first_name = "John"
      subject.last_name = "Doe"
      subject.save!
      user = User.create(
        first_name: "Jane",
        last_name: "Doe",
        email:"johndoe@email.com"
      )
      expect(user).to_not be_valid
    end
  end
end
