json.partial! "/api/cities/city", city: @city
businesses = @city.businesses

json.businesses do
  if @city.businesses
    @city.businesses.each do |business|
      json.set! business.id do
        json.extract! business, :id, :name, :lat, :lng, :youTubeUrl, :imageFile1, :imageFile2, :description, :businessType, :address, :hours, :phoneNumber, :reservation, :city_id, :overflow
      end
    end
  end
end
