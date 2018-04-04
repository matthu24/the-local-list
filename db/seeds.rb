# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
City.destroy_all

c1 = City.create!(name: "Seattle", lat: 47.6131742, lng: -122.4824923, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
c2 = City.create!(name: "Portland", lat: 45.5435634, lng: -122.7945062, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/Portland1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
c3 = City.create!(name: "San Francisco", lat: 37.757815, lng: -122.5076402, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/san+francisco.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
c4 = City.create!(name: "New York", lat: 40.6976701, lng: -74.2598687, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/New+York.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
c5 = City.create!(name: "Austin", lat: 30.3079827, lng: -97.8934873, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/Austin.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
c6 = City.create!(name: "Boston", lat: 42.3145186, lng: -71.1103686, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/Boston1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
c7 = City.create!(name: "Chicago", lat: 41.8339042, lng: -88.012151, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/Chicago1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
c8 = City.create!(name: "Los Angeles", lat: 34.0207305, lng: -118.6919234, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/los+angeles1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
c9 = City.create!(name: "Philadelphia", lat: 40.0026767, lng: -75.2581178, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/philadelphia1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
