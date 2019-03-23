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

      end
    end
  end
end
