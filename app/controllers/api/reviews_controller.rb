class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end


  def create
    @review = current_user.reviews.new(review_params)
    @review.business_id = params[:business_id]
    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end


  def destroy
    @review = current_user.reviews.find(params[:id])
    @review.destroy
    render :show
  end


  def review_params
    params.require(:review).permit(:body,:recommended)
  end

end
