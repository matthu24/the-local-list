export const favoritesParser = (businesses, userId) => {
  //busineses is an array of business objects
  //in each object is an object of like objects
  //use filter
  // console.log(businesses)
  if(businesses === []) return null;
  let filteredBusinesses = businesses.filter(business => {
    let liked = false;
    if(business.likes){
    Object.values(business.likes).forEach(like => {
      // console.log([like,userId])
      if(like.user_id === userId){
        liked = true;
      }
    })
  }
    return liked;
  })
  return filteredBusinesses;
}
