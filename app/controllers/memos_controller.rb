class MemosController < ApplicationController
  helper_method :sort_column, :sort_direction
  before_action :set_memo, only: [:index]
  before_action :set_edit_memo, only: [:edit, :update, :show]
  before_action :set_folder, only: [:index, :create, :show]

  def index
    @memo = @memos.first
    @memos_2 = Memo.where('content LIKE(?)',"%#{params[:keyword]}%" )
    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
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
  end
  
  def update
    @memo.update(memo_update_params)
    redirect_to folder_memo_path(id: @memo.id, folder_id: @memo.folder.id)
  end

  private
  def memo_params
    params.permit(:name).merge(folder_id: @folder_id)
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
    @memos = Memo.where(folder_id: params[:folder_id]).order("name ASC")
  end

  def set_folder
    @folder_id = params.permit(:folder_id)[:folder_id]
    @folder = Folder.find(@folder_id)
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ?  params[:direction] : "asc"
  end

  def sort_column
      Folder.column_names.include?(params[:sort]) ? params[:sort] : "name"
  end
end
