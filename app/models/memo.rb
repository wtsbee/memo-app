class Memo < ApplicationRecord
  belongs_to :folder
  validates :name, presence: true
end
