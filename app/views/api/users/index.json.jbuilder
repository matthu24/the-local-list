@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :city
    likes = user.likes

    json.likes do
      if user.likes
        likes.each do |like|
          json.set! like.id do
            json.extract! like, :id, :user_id, :business_id
          end

        end
      end
    end

  end
end
