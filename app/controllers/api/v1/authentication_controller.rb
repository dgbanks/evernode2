module Api
  module V1
    class AuthenticationController < ApiController
      def login
        begin
          response = RestClient.post(
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
          id_token = JSON.parse(response)["id_token"]
          decoded_token = JWT.decode(id_token, nil, false)[0]
          # google token expires in one hour
          user = User.find_or_create_by(
            email: decoded_token["email"],
            first_name: decoded_token["given_name"],
            last_name: decoded_token["family_name"]
          )

          render_ok({})
        end
      end

      private

    end
  end
end
