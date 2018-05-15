class Business < ApplicationRecord

  belongs_to(
  :city,
  class_name: 'City',
  foreign_key: :city_id,
  primary_key: :id
)
has_many :reviews
has_many :likes

  def self.top_results(query_param)
    #turn query_param into query_string, which has each char separated by %
    query_string = query_param.downcase.split('')
    query_string = '%' + query_string.join('%') + '%'

    #make active Record query
    Business.where('lower(name) LIKE ?', query_string).limit(3)

  end
end
