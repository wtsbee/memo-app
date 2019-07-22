class CreateFolders < ActiveRecord::Migration[5.2]
  def change
    create_table :folders do |t|
      t.string :name, null: false, length: { maximum: 30 }
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
