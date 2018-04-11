class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
  end

  def create
    @business = Business.new(business_params)
    if @business.save!
      render :show
    else
      render json: @business.errors.full_messages
    end
  end

  def show
    @business = Business.find(params[:id])
  end


  def business_params
    params.require(:business).permit(:name, :lat, :lng, :youTubeUrl, :imageFile1,:imageFile2, :description, :businessType, :address, :hours, :phoneNumber, :reservation, :city_id, :overflow)
  end

end
