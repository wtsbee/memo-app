class Memo < ApplicationRecord
  belongs_to :folder
  belongs_to :user
  validates :name, presence: true
  mount_uploader :image, ImageUploader
end
