class Business < ApplicationRecord

  belongs_to(
  :city,
  class_name: 'City',
  foreign_key: :city_id,
  primary_key: :id
)
has_many :reviews
end
