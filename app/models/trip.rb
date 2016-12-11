class Trip < ApplicationRecord
  belongs_to :user

  validates :start, presence: true
  validates :end, presence: true
  validates :departure, presence: true
end
