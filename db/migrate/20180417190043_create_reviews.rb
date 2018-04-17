class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :body
      t.boolean :recommended
      t.integer :user_id
      t.integer :business_id
      t.timestamps
    end
  end
end
