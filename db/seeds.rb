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
b2 = Business.create!(city_id: c1.id,name: "Stumptown Coffee", lat: 47.6120899, lng: -122.3189981, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/stumptown1.png', imageFile2: 'a', description: 'Opened in the fall of 2007, our 12th Avenue café is home to our Seattle roastery.In addition to a full espresso bar, drip coffee, brew-by-the-cup offerings and cold brew, you can enjoy beverages from Rachels Ginger Beer, Kombucha Town, and Steven Smith Tea as well as Ellenos yogurt and pastries from Fuji Bakery.', businessType: 'coffee', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b3 = Business.create!(city_id: c1.id,name: "Milstead Coffee", lat: 47.6493855, lng: -122.348876, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/milstead1.png', imageFile2: 'a', description: 'Before our baristas can craft your drink, highly skilled roasters must source and prepare beans from passionate farmers throughout the coffee belt. We feature fine coffees from renowned roasters Stumptown, Intelligentsia, and Coava.', businessType: 'coffee', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b4 = Business.create!(city_id: c1.id,name: "Walrus and the Carpenter", lat: 47.6635069, lng: -122.3813122, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/walrus1.png', imageFile2: 'a', description: 'Opened in 2010, The Walrus and The Carpenter marries restaurant to fishing pub. Tallboys, muscadet, piles of chubby oysters and smart plates are served in a lively, approachable space in Old Ballard.', businessType: 'restaurant', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b5 = Business.create!(city_id: c1.id,name: "The Whale Wins", lat: 47.6495961, lng: -122.3445547, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/whale1.png', imageFile2: 'a', description: 'The Whale Wins is the creation of chef Renee Erickson, Jeremy Price and Chad Dale — the folks behind Ballard’s acclaimed The Walrus and the Carpenter. Drawing inspiration from the cuisine of some of Renee Erickson’s favorite places in southern Europe and England, The Whale Wins’ menu features the very best foods from local beaches, gardens and farms.', businessType: 'restaurant', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b6 = Business.create!(city_id: c1.id,name: "Canon", lat: 47.6113135, lng: -122.3171179, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/canon1.png', imageFile2: 'a', description: 'As if Canon  wasn’t hard enough to get in to on a Saturday night – now comes news that Seattle’s favorite cocktail den has been anointed one of the World’s Best Bars. The ranking is one of the most prestigious cocktail honors in Europe, and the highest accolade for Canon since it took home “World’s Best Drink Selection” at the Tales of the Cocktail.', businessType: 'bar', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b7 = Business.create!(city_id: c1.id,name: "Sun Liquor", lat: 47.6245773, lng: -122.3276671, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/sunliquor1.png', imageFile2: 'a', description: 'At this small bar, the juice is fresh and the liquor is excellent. Sun Liquors aesthetic is sort of tiki, kind of stylized colonial Singapore, or maybe upscale Hong Kong Phooey. Every detail scrupulously aligns: antique cocktail glasses and shakers behind the bar, bamboo chairs and bamboo bowtie accents.', businessType: 'bar', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b8 = Business.create!(city_id: c1.id,name: "The Pink Door", lat: 47.6103688, lng: -122.3431129, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/pinkdoor1.png', imageFile2: 'a', description: 'Along the quaint Post Alley at Seattle’s Pike Place Market awaits one of the city’s most beloved restaurant destinations since 1981: The Pink Door. Equal parts Italian-American dining, eclectic entertainment and spirited service.', businessType: 'restaurant', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b10 = Business.create!(city_id: c1.id,name: "The Pine Box", lat: 47.6154952, lng: -122.329865, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/pinebox1.png', imageFile2: 'a', description: 'We are proud to be a part of our Capitol Hill community. Built in 1923, this colonial-style building of vaulted ceilings and glass windows was once the new expansion of E.R. Butterworth & Sons Family Funeral Business.', businessType: 'bar', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b9 = Business.create!(city_id: c1.id,name: "Morsel", lat: 47.6646567, lng: -122.3151579, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/morsel1.png', imageFile2: 'a', description: 'Giant, cloudlike biscuits are Morsels specialty; their “Cheesy Biscuit” with roasted tomato jam is what garlic bread wishes it could be. And their cappuccino, made with local Veltons Mexico Nayarita coffee and Twin Brook Creamery milk, is way better than most coffee drinks, even in this land of high-quality coffee.There is also house-made bacon jam and sandwiches.', businessType: 'restaurant', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)

b11 = Business.create!(city_id: c2.id,name: "Voodoo Doughnuts", lat: 47.6677577, lng: -122.3672629, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/stumptown1.png', imageFile2: 'a', description: 'a', businessType: 'coffee', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
b12 = Business.create!(city_id: c2.id,name: "Heart Coffee", lat: 47.6677577, lng: -122.3672629, youTubeUrl: 'https://www.youtube.com/watch?v=C0hLdZ9ueT8', imageFile1: 'https://s3.us-east-2.amazonaws.com/thelocallist/stumptown1.png', imageFile2: 'a', description: 'a', businessType: 'coffee', address: 'a', hours: 'a', phoneNumber:'a', reservation:false, overflow: false)
