json.searchResults do
  json.array! @businesses.each do |business|
    json.partial! 'api/businesses/business', business: business
  end
end
