class User < ApplicationRecord
  validates_presence_of :first_name, :last_name, :email
  validates_uniqueness_of :email
  validates_format_of :email, :with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  has_many :canvases

  def name
    first_name + " " + last_name
  end
end
