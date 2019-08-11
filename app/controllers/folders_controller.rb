class FoldersController < ApplicationController
  helper_method :sort_column, :sort_direction

  def index
    # @folders = Folder.all.includes(:memos).order("name ASC")
    @folders = Folder.order(sort_column + ' ' + sort_direction)
    # @folders = Folder.all.includes(:memos).order(params[:sort])
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

  def sort_direction
    %w[asc desc].include?(params[:direction]) ?  params[:direction] : "asc"
  end

  def sort_column
      Folder.column_names.include?(params[:sort]) ? params[:sort] : "name"
  end
end
