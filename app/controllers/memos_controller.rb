class MemosController < ApplicationController
  helper_method :sort_column, :sort_direction
  before_action :set_memo, only: [:index]
  before_action :set_edit_memo, only: [:edit, :update, :show]
  before_action :set_folder, only: [:index, :create, :show, :destroy]

  def index
    @memo = @memos.first
    @memos_2 = Memo.where(user_id: current_user.id).where('content LIKE(?)',"%#{params[:keyword]}%" )
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

  def show
    @memos_2 = Memo.where(user_id: current_user.id).where('content LIKE(?)',"%#{params[:keyword]}%" )
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
    @memo = Memo.new(memo_params)
    if @memo.save
      respond_to do |format|
        format.html
        format.json
      end
    else
      render :index
    end
  end

  def edit
    @folder = Folder.find(@memo.folder_id)
    gon.content = @memo.content
    @memos_2 = Memo.where(user_id: current_user.id).where('content LIKE(?)',"%#{params[:keyword]}%" )
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
  
  def update
    @memo.update(memo_update_params)
    redirect_to folder_memo_path(id: @memo.id, folder_id: @memo.folder.id)
  end

  def destroy
    memo = Memo.find(params[:id])
    memo.destroy
    redirect_to("/folders/#{@folder_id}/memos")
  end

  private
  def memo_params
    params.permit(:name).merge(folder_id: @folder_id, user_id: current_user.id)
  end

  def memo_update_params
    params.permit(:content)
  end

  def memo_show_params
    params.permit(:name, :context).merge(folder_id: @folder_id)
  end

  def set_edit_memo
    @memo = Memo.find(params[:id])
  end

  def set_memo
    @memos = Memo.where(folder_id: params[:folder_id]).order(sort_column + ' ' + sort_direction)
  end

  def set_folder
    @folder_id = params.permit(:folder_id)[:folder_id]
    @folder = Folder.find(@folder_id)
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ?  params[:direction] : "asc"
  end

  def sort_column
      Memo.column_names.include?(params[:sort]) ? params[:sort] : "name"
  end
end
