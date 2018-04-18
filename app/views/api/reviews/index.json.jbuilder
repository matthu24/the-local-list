@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :recommended, :user_id, :business_id
    json.review_author review.user.username
    json.review_city review.user.city
  end
end
