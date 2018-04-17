import React from 'react';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDfeLS_aLGenqtnjfJ-_KDMEr4StFpQCoA';

class Video extends React.Component{
  constructor(props){
    super(props)
    this.state={video:''}
    const business = this.props.business;
    YTSearch({key:API_KEY,term: business},(videos) => {

      //ES6 sugar videos: videos
        // this.setState({videos: videos,
        //             selectedVideo: videos[0]
        // });
        this.setState({video:videos[0]})
      }
    );
  }

  render(){
    if(!this.state.video.id) return null;

    let video = this.state.video.id.videoId;
    const url = `https://www.youtube.com/embed/${video}`;

    return(
      <div>
        <iframe className="youtube-video" src={url}></iframe>

      </div>
    )
  }
}

export default Video;
