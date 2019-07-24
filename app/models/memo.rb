class Memo < ApplicationRecord
  belongs_to :folder
  validates :name, presence: true
  mount_uploader :image, ImageUploader
end
