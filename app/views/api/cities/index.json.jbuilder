@cities.each do |city|
  json.set! city.id do
    json.extract! city, :id, :name, :lat, :lng, :image_url_one, :image_url_two, :tagline
  end
end
