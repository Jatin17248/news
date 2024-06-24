import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        
    let {headline, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
              <div className="card my-2" >

        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-primary" style={{left: "90%", zIndex: "1"}}>
    {source}
    
  </span>
  
      
  <img src={imageUrl} className="card-img-top" alt={headline} height="240px"/>
  <div className="card-body">
    <h5 className="card-title">{headline}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank">Read More</a>
  </div>
  <div class="card-footer text-body-secondary">
    By {author?author:"Unknown"} on {new Date(date).toGMTString()}
  </div>

</div>
      </div>
    )
  }
}

