class MemosController < ApplicationController
  before_action :set_memo, only: [:index]
  before_action :set_edit_memo, only: [:edit, :update, :show]
  before_action :set_folder, only: [:index, :create]

  def index
  end

  def show
    # binding.pry
    # @memo = Memo.new(memo_params)
    # if @memo.save
    #   respond_to do |format|
    #     format.html
    #     format.json
    #   end
    # else
    #   binding.pry
    #   render :index
    # end
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
    # binding.pry
    gon.content = @memo.content
  end
  
  def update
    # binding.pry
    @memo.update(memo_update_params)
    # binding.pry
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
  end
end
