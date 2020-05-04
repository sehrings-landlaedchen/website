import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Image from './Image'

import './BackgroundVideo.css'

interface BackgroundVideoProps {
  poster: string;
  videoTitle: string;
}

class BackgroundVideo extends Component<BackgroundVideoProps> {
  ref: any;
  constructor(props: BackgroundVideoProps) {
    super(props)
    this.ref = React.createRef()
  }
  state = {
    playing: false,
    mobileWidth: false
  }

  updateDimensions() {
    this.setState({ mobileWidth: window.innerWidth <= 900 })
  }

  handelPlay() {
    this.setState({ playing: true })
    ReactDOM.findDOMNode(this.ref.current).removeEventListener(
      'playing',
      this.handelPlay
    )
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', () => this.updateDimensions())
    ReactDOM.findDOMNode(this.ref.current).addEventListener('playing', () =>
      this.handelPlay()
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }
  
  render() {
    const { poster, videoTitle, children } = this.props;
    return (
      <Fragment>
        {!this.state.mobileWidth && (
          <div className={`BackgroundVideo`}>
            <video
              ref={this.ref}
              poster={poster}
              className={`BackgroundVideo--video ${
                this.state.playing ? 'playing' : ''
              } `}
              playsInline
              autoPlay
              muted
              loop
              preload="auto"
            >
              {children}
            </video>
            {videoTitle && (
              <div className="BackgroundVideo--videoTitle">{videoTitle}</div>
            )}
          </div>
        )}
        {this.state.mobileWidth && (
          <Fragment>
            <Image background src={poster} alt="Background poster" />
            {videoTitle && <h3 className="Poster--videoTitle">{videoTitle}</h3>}
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default BackgroundVideo
