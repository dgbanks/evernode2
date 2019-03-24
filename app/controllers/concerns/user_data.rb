module UserData
  extend ActiveSupport::Concern

  def login(user)
    {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      canvases: []
    }
  end
end
