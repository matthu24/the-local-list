# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


c1 = City.create!(name: "Seattle", lat: 47.6131742, lng: -122.4824923, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
