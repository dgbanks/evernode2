module UserResponseTemplates
  extend ActiveSupport::Concern

  def user_data(user)
    {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name
    }
  end
end
