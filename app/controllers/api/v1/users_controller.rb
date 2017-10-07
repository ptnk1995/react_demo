class Api::V1::UsersController < ApplicationController
  before_action :load_user, only: [:update, :destroy]

  def index
    @users = if params[:data].blank?
      User.all
    else
      User.search_by User.new(params[:data].as_json)
    end
    render json: @users
  end

  def create
    @user = User.new user_params
    if @user.save
      render json: @user
    else
      render nothing: true
    end
  end

  def update
   if @user.update_attributes(user_params)
     render json: @user
   else
     render nothing: true
   end
 end

  def destroy
    if @user.destroy
    else
      render nothing: true
    end
  end

  private
  def user_params
    params.require(:user).permit(:id, :name, :age, :email, :address)
  end

  def load_user
    @user = User.find_by id: params[:id]
  end
end
