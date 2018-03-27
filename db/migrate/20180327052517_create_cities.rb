class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.float :lat
      t.float :lng
      t.string :image_url_one
      t.string :image_url_two

      t.timestamps
    end
  end
end
