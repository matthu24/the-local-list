json.partial! "/api/businesses/business", business: @business
# show the likes nested here

likes = @business.likes

json.likes do
  if @business.likes
    likes.each do |like|
      json.set! like.id do
        json.extract! like, :id, :user_id, :business_id
      end

    end
  end
end
