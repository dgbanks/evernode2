class ApplicationController < ActionController::API

  private

  def current_user
    if request.headers["Authorization"].present?
      valid_token = JSONWebToken.decode(request.headers["Authorization"])
      valid_token ? User.find(valid_token[:user_id]) : nil
    end
  end
end
