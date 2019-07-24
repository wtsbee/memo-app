class FoldersController < ApplicationController
  def index
    @folders = Folder.all.includes(:memos).order("name ASC")
  end

  def create
    @folder = Folder.new(folder_params)
    if @folder.save
      respond_to do |format|
        format.html
        format.json
      end
    else
      render :index
    end
  end

  private
  def folder_params
    params.permit(:name).merge(user_id: current_user.id)
  end
end
