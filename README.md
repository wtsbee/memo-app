# usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|text|null: false, unique: true|
|password|string|null: false|
## Association
- has_many :folders, dependent: :destroy

# foldersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, length: { maximum: 30 } unique: true|
|user_id|references|null: false, foreign_key: true|
## Association
- has_many :memos, dependent: :destroy
- belongs_to :user

# memosテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, length: { maximum: 30 }|
|content|string||
|image|string||
|folder_id|references|null: false, foreign_key: true|
## Association
- belongs_to :folder
