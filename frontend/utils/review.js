export const fetchBusinessReviews = (businessId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}/reviews`
  });
}

export const createBusinessReview = (review, businessId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/businesses/businessId/reviews`,
    data: {review}
  })
}

export const deleteBusinessReview = (reviewId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`
  })
}
