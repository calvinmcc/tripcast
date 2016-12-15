class Api::V1::GasController < Api::BaseController
  include HTTParty
  def index
    domain = "http://api.mygasfeed.com/stations/radius"
    response = HTTParty.get("#{domain}/#{params[:lat]}/#{params[:lng]}/10/reg/price/#{ENV['GAS_KEY']}.json")
    render json: response
  end
end
