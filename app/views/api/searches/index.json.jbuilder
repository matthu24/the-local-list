json.searchResults do
  json.array! @business.each do |business|
    json.partial! 'api/businesses/business', business: business
  end
end
