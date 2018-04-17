class Api::ReviewsController < ApplicationController

  def index
    @indexes = Review.all
  end


  def create
    @index = Review.new(review_params)
    @index.business_id = params[:business_id]
    if @index.save!
      render :show
    else
      render json: @index.errors.full_messages, status: 401
    end
  end


  def destroy
    @review = currentUser.reviews.find(params[:id])
    @review.destroy
    render :show
  end





  def review_params
    params.require(:review).permit(:body,:recommended)
  end

end
