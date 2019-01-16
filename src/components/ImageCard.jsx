import React from 'react'

export default class ImageCard extends React.Component {
  constructor (props) {
    super(props)
    this.imageRef = React.createRef()
    this.state = { spans: 0 }
  }

  setSpans = event => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 20) - 1
    this.setState({ spans })
  }

  componentDidMount () {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  render () {
    const { description, links, urls } = this.props.image
    return <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
      <a href={links.html} target='_blank' rel='noopener noreferrer'>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description} />
      </a>
    </div>
  }
}
