class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    binding.pry
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def show
  end
end
