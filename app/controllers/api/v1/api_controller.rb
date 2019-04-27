module Api
  module V1
    class ApiController < ApplicationController

      private

      def render_ok(response = {})
        render json: response, status: 200
      end

      def render_created

      end

      def render_unauthorized

      end

      def render_bad_request
        render status: 400
      end

      def user_json
        {
          data: {
            email: current_user.email,
            first_name: current_user.first_name,
            last_name: current_user.last_name,
          },
          canvases: canvases_json
        }
      end

      def canvas_json(canvas)
        {
          id: canvas.id,
          title: canvas.title,
        }
      end

      def canvases_json
        current_user.canvases.map { |canvas| canvas_json(canvas) }
      end
    end
  end
end
