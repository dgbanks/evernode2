class ApplicationController < ActionController::API

  private

  def current_user
    debugger
    if request.headers["Authorization"].present?
      decoded = JSONWebToken.decode(request.headers["Authorization"])
      debugger
    end
  end
end
