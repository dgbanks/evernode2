module Api
  module V1
    class UsersController < ApiController
      include UserResponseTemplates

      def show
        render_ok({ user: user_data(current_user) }) if current_user
      end
    end
  end
end
