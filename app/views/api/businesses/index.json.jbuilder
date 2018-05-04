@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :lat, :lng, :youTubeUrl, :imageFile1, :imageFile2, :imageFile3, :imageFile4, :imageFile5, :imageFile6, :imageFile7, :imageFile8, :description, :businessType, :address, :hours, :phoneNumber, :reservation, :city_id, :overflow, :like_count
    # json.partial! "/api/businesses/business", business: @business


    likes = business.likes

    json.likes do
      if business.likes
        likes.each do |like|
          json.set! like.id do
            json.extract! like, :id, :user_id, :business_id
          end

        end
      end
    end
  end

end
