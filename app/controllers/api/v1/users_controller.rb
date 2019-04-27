module Api
  module V1
    class UsersController < ApiController
      def show
        render_ok({ user: user_json }) if current_user
      end
    end
  end
end
