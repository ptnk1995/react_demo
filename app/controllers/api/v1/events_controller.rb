class Api::V1::EventsController < ApplicationController
  def index
    render json: Event.all
  end

  def search
    query = params[:query]
    events = Event.where('name LIKE ? OR place LIKE ? OR description LIKE ?',
      "%#{query}%", "%#{query}%", "%#{query}%")
    render json: events
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render nothing: true, status: :bad_request
    end
  end

  def destroy
    event = Event.find_by id: params[:id]
    if event.destroy
      render json: event
    else

    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :event_date, :place)
  end
end
