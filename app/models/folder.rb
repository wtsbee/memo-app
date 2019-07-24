class Folder < ApplicationRecord
  has_many :memos,      dependent: :destroy
  belongs_to :user
  validates :name, presence: true
end
