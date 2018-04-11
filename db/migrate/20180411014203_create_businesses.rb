class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.integer :city_id
      t.string :name
      t.float :lat
      t.float :lng
      t.string :youTubeUrl
      t.string :imageFile1
      t.string :imageFile2
      t.string :description
      t.string :businessType
      t.string :address
      t.string :hours
      t.string :phoneNumber
      t.boolean :reservation
      t.boolean :overflow
      t.timestamps
    end
  end
end
