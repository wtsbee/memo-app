class MemosController < ApplicationController
  before_action :set_memo, only: [:index]
  before_action :set_folder, only: [:index]

  def index
  end

  private
  def set_memo
    @memos = Memo.where(folder_id: params[:folder_id]).order("name ASC")
  end

  def set_folder
    @folder_id = params.permit(:folder_id)
  end
end
