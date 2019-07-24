class MemosController < ApplicationController
  before_action :set_memo, only: [:index]
  before_action :set_folder, only: [:index, :create]

  def index
  end

  def create
    @memo = Memo.new(memo_params)
    if @memo.save
      respond_to do |format|
        format.html { redirect_to root_path, notice: 'メッセージが送信されました' }
        format.json
      end
    else
      binding.pry
      render :index
    end
  end

  private
  def memo_params
    params.permit(:name).merge(folder_id: @folder_id)
  end

  def set_memo
    @memos = Memo.where(folder_id: params[:folder_id]).order("name ASC")
  end

  def set_folder
    @folder_id = params.permit(:folder_id)[:folder_id]
  end
end
