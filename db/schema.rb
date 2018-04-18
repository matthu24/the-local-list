# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180417190043) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.integer "city_id"
    t.string "name"
    t.float "lat"
    t.float "lng"
    t.string "youTubeUrl"
    t.string "imageFile1"
    t.string "imageFile2"
    t.string "imageFile3"
    t.string "imageFile4"
    t.string "imageFile5"
    t.string "imageFile6"
    t.string "imageFile7"
    t.string "imageFile8"
    t.string "description"
    t.string "businessType"
    t.string "address"
    t.string "hours"
    t.string "phoneNumber"
    t.boolean "reservation"
    t.boolean "overflow"
    t.integer "like_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.float "lat"
    t.float "lng"
    t.string "image_url_one"
    t.string "image_url_two"
    t.string "tagline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body"
    t.boolean "recommended"
    t.integer "user_id"
    t.integer "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest"
    t.string "session_token"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
