# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
City.destroy_all
Business.destroy_all

c1 = City.create!(name: "Seattle", lat: 47.6272905, lng: -122.3640454, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Emerald City")
c2 = City.create!(name: "Portland", lat: 45.5435629, lng: -122.7948496, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/Portland1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The City of Roses")
c3 = City.create!(name: "San Francisco", lat: 37.7578149, lng: -122.5078119, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/san+francisco.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Golden City")
c4 = City.create!(name: "New York", lat: 40.7591703, lng: -74.0394428, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/New+York.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Empire City")
c5 = City.create!(name: "Austin", lat: 30.3079823, lng: -97.8938307, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/Austin.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "Waterloo")
c6 = City.create!(name: "Boston", lat: 42.3145151, lng: -71.2511577, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/Boston1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Puritan City")
c7 = City.create!(name: "Chicago", lat: 41.8339025, lng: -88.0128379, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/Chicago1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The Windy City")
c8 = City.create!(name: "Los Angeles", lat: 34.0537312, lng: -118.3788134, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/los+angeles1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "La La Land")
c9 = City.create!(name: "Philadelphia", lat: 40.0026763, lng: -75.2584612, image_url_one: 'https://s3.us-east-2.amazonaws.com/thelocallist/philadelphia1.png', image_url_two: 'https://s3.us-east-2.amazonaws.com/thelocallist/seattle2.png', tagline: "The City of Brotherly Love")

b1 = Business.create!(city_id: c1.id,name: "Slate Coffee", lat: 47.6677577, lng: -122.3672629, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/slate1.png', imageFile2: 'https://s3.us-east-2.amazonaws.com/thelocallist/slate2.png', description: 'Located in East Ballard, our coffee bar was our first permanent location. It has a neighborhood feel that invites you to stay awhile and get to know those sitting around you. We have a very simple menu offering hand-brewed coffee, espresso, espresso + milk, as well as pastries, tea, tasting flights, and an industry favorite: the deconstructed espresso + milk.', businessType: 'coffee', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b2 = Business.create!(city_id: c1.id,name: "Stumptown Coffee", lat: 47.6677577, lng: -122.3672629, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/stumptown1.png', imageFile2: 'a', description: 'a', businessType: 'coffee', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
