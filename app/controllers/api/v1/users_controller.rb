module Api
  module V1
    class UsersController < ApiController
      def show
        render_ok({ current_user: current_user }) if current_user
      end
    end
  end
end
