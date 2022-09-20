import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Class/css/Youtube.css';

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      youTubeVideos: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideos = data.items;
        this.setState({ youTubeVideos });
      });
  }

  render() {
    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper my-5 py-4">
                Latest Videos
              </div>
            </div>
            {this.state.youTubeVideos?.map((singlevideo, i) => {
              let vidId = singlevideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let display = (
                <div key={i} className='col-sm-12 col-md-4'>
                  <div className='singlevideo'>
                    <div className='video_thumbnails'>
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img src={singlevideo.snippet.thumbnails.high.url} alt="Apple Videos Thumbnails" />
                      </a>
                    </div>
                    <div className='videoInfo text-start'>
                      <div className="videoTitle fw-bold ">
                        <a href={vidLink} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                          {singlevideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singlevideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              )
              return display;

            })}

            {this.display}
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;