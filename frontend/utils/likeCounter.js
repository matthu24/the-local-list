//businesses is an array of business objects
//sort array of objects by number of likes, then only take the top 5 or whatever
export const likeCounter = (businesses) => {
  let result = [];
  businesses.forEach(business => {
    let likeCount = 0;
    if(business.likes){
      likeCount = Object.values(business.likes).length
    }
    result.push([likeCount,business])
    //result object will be {likeCount:business}
  })
  //turn result into array of arrays [[likeCount,business]]
  //sort
  //take last five

  result = result.sort(function(a,b){return a[0] > b[0]}).reverse().slice(0,5);
  return result;
}
