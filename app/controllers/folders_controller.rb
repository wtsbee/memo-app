class FoldersController < ApplicationController
  helper_method :sort_column, :sort_direction

  def index
    # @folders = Folder.all.includes(:memos).order("name ASC")
    @folders = Folder.where(user_id: current_user.id).order(sort_column + ' ' + sort_direction)
    # @folders = Folder.all.includes(:memos).order(params[:sort])
    @memos_2 = Memo.where('content LIKE(?)',"%#{params[:keyword]}%" )
    @memos_3 = []
    @memos_2.each do |memo|
      if Sanitize.clean(memo.content).gsub(/\n|&nbsp;/,"").include?(params[:keyword].to_s) && params[:keyword] != "" && memo.content != ""
        @memos_3 << {id: memo.id, name:memo.name, content: Sanitize.clean(memo.content).gsub(/\n|&nbsp;/,""), folder_id:memo.folder_id}
      end
    end
    respond_to do |format|
      format.html
      format.json
    end
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

  def destroy
    folder = Folder.find(params[:id])
    folder.destroy
    redirect_to("/")
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
