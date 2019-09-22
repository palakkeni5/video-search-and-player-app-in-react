import _ from 'lodash'
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import SearchBar from "./search-bar"
import VideoList from "./video-list"
import VideoDetail from "./video-detail"

const API_KEY = 'AIzaSyBAF5MTyVeIGQOWPGsySlAG6hJ_WiW4z2Y'


YTSearch({key: API_KEY , term : 'surfboards'} , function(data){
  console.log(data)
})

export default class App extends Component {

  constructor(props){

    super(props)

    this.state= {
      videos : [],
      selectedVideo : null
    }
    
    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY , term : term} , (videos)=>{
      // console.log(data)
      this.setState( { 
        videos: videos ,
        selectedVideo:videos[0]
      } ) 
    })
  }

  render() {

    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    return (
      <div>
        <SearchBar onSearchTerm={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}  />
        </div>
      </div>
    );
  }
}
