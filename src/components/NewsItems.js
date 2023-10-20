import React, { Component } from 'react'

export default class NewsItems extends Component {
  
  render() {
    let {title, description, imageUrl, url, author, publishedAt, source} = this.props;
    return (
        <div className='my-3'>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'90%'}}>
                    {source}
                </span>
                {imageUrl && <img src={imageUrl} className="card-img-top" alt="..." />}
                <div className="card-body my-1">
                    <h5 className="card-title">{title.slice(0,45)}</h5>
                    <p className="card-text">{description.slice(0,88)}</p>
                    <p className="card-text"><small className="text-body-secondary"><b>{author? 'By '+author : ""}</b> on {new Date(publishedAt).toLocaleString()}</small></p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}
