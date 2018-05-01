json.partial! "/api/users/user", user: @user

likes = @user.likes

json.likes do
  if @user.likes
    likes.each do |like|
      json.set! like.id do
        json.extract! like, :id, :user_id, :business_id
      end

    end
  end
end
