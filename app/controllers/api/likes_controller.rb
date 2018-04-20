class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end

  def create
    @like = Like.new(like_params)
    if @like.save!
      render :show
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  def show
    @like = Like.find(params[:id])
  end

  def destroy
    @like = current_user.likes.find(params[:id])
    @like.destroy
    render :show
  end


  def like_params
    params.require(:like).permit(:user_id, :business_id)
  end

end
