class TripsController < ApplicationController
  def new
    @trip = Trip.new
  end

  def create
    @user = current_user
    @trip = Trip.new trip_params
    @trip.user = @user
    if @trip.save
      redirect_to @trip
    else
      render :new, alert: 'Trip not saved!', id: 'error'
    end
  end

  def show
    @trip = Trip.find params[:id]
    @user = current_user
  end

  def update
    @user = current_user
    @trip = Trip.find params[:id]
    @trip.user = @user
    if @trip.update trip_params
      redirect_to @trip, notice: 'Trip updated!'
    else
      render :new, alert: 'Trip not saved!', id: 'error'
    end
  end

  def destroy
    @trip = Trip.find params[:id]
    @user = current_user
    @trip.destroy
    redirect_to @user
  end

  private

  def trip_params
    params.require(:trip).permit([:start, :end, :departure])
  end
end
