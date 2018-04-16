@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :lat, :lng, :youTubeUrl, :imageFile1, :imageFile2, :imageFile3, :imageFile4, :imageFile5, :imageFile6, :imageFile7, :imageFile8, :description, :type, :address, :hours, :phoneNumber, :reservation, :city_id, :overflow

  end

end
