module Api
  module V1
    class AuthenticationController < ApiController
      def login
        begin
          @response = RestClient.post(
            "https://www.googleapis.com/oauth2/v4/token",
            {
              code: params[:code],
              client_id: ENV["GOOGLE_CLIENT_ID"],
              client_secret: ENV["GOOGLE_CLIENT_SECRET"],
              redirect_uri: "http://localhost:3000",
              grant_type: "authorization_code"
            }, {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          )
        rescue => error
          debugger
        else
          auth_token = JSONWebToken.encode({ user_id: user.id })
          render_ok({ auth_token: auth_token })
        end
      end

      private

      def decoded_token
        JWT.decode(JSON.parse(@response)["id_token"], nil, false)[0]
      end

      def user
        User.find_or_create_by(
          email: decoded_token["email"],
          first_name: decoded_token["given_name"],
          last_name: decoded_token["family_name"]
        )
      end
    end
  end
end
