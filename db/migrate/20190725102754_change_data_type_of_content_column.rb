class ChangeDataTypeOfContentColumn < ActiveRecord::Migration[5.2]
  def up
    change_column :memos, :content, :text, :limit => 5.megabyte
  end

  def down
    change_column :memos, :content, :string
  end
end
