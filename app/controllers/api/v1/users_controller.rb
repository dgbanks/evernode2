module Api
  module V1
    class UsersController < ApiController
      def show
        render_ok({ user: user_json }) if current_user
      end

      private

      def user_json
        {
          email: current_user.email,
          first_name: current_user.first_name,
          last_name: current_user.last_name,
          canvases: canvases_json
        }
      end

      def canvases_json
        current_user.canvases.map do |canvas|
          {
            id: canvas.id,
            title: canvas.title,
          }
        end
      end
    end
  end
end
