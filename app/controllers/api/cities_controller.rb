class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def create
    @city = City.new(cities_params)
    if @city.save!
      render :show
    else
      render json: @city.errors.full_messages

    end
  end

  def show
    @city = City.find(params[:id])
  end

  def cities_params
    params.require(:city).permit(:name, :lat,:lng, :image_url_one, :image_url_two)

  end
end
