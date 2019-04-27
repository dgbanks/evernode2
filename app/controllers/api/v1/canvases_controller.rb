module Api
  module V1
    class CanvasesController < ApiController
      def create
        canvas = Canvas.create(
          title: params[:canvas][:title],
          user_id: current_user.id
        )
        render_ok(canvas_json(canvas))
      end

      def show
        debugger
      end

      def update
        debugger
      end

      def destroy
        debugger
      end
    end
  end
end
