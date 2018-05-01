import React from 'react';
import {createLike,deleteLike} from '../../utils/like';

export default props => {
  // if(!props.business.likes) return null;
  //just need to make createLike and deleteLike methods here: these just need to be ajax calls..might not need action/reducer


  let liked = false;
  let likeCount = 0;
  let likeId;
  if(props.likes){
    Object.values(props.likes).forEach(like => {
      likeCount++;
      if(props.currentUser && like.user_id === props.currentUser.id){
        liked = true;
        likeId = like.id;
      }
    })
  }

  const createSingleLike = () => {
    //want createlike to be executed first!
    if(props.currentUser){
      //i need to refetch my businesses to see a change in the frontend, because my likes are nested in business
      setTimeout(() => props.fetchBusiness(),100)
      createLike({user_id: props.currentUser.id, business_id: props.business.id});
    }

  }

  const deleteSingleLike = () => {
    if(props.currentUser){
      setTimeout(() => props.fetchBusiness(),100)
      deleteLike(likeId);
    }


  }

  let likedIcon = liked ? (
      <span onClick={deleteSingleLike} className='liked'><i className="far fa-heart"></i></span>
  ) : (
      <span onClick={createSingleLike} className='unliked'><i className="far fa-heart"></i></span>
  )
  return(
    <div>
      {likeCount}{likedIcon}
    </div>
  )
}
