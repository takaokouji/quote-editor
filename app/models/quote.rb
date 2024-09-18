class Quote < ApplicationRecord
  belongs_to :company

  validates :name, presence: true

  broadcasts_to ->(quote) { "quotes" }, inserts_by: :prepend
end
