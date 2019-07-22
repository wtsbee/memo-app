class CreateMemos < ActiveRecord::Migration[5.2]
  def change
    create_table :memos do |t|
      t.string :name, null: false, length: { maximum: 30 }
      t.string :content
      t.string :image
      t.integer :folder_id, null: false
      t.timestamps
    end
  end
end
