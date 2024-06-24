import React from 'react'

const Newsitem = (props) => {
    
        
    let {headline, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
              <div className="card my-2" >

        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-primary" style={{left: "90%", zIndex: "1"}}>
    {source}
    
  </span>
  
      
  <img src={imageUrl} className="card-img-top" alt={headline} height="240px"/>
  <div className="card-body">
    <h5 className="card-title">{headline}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} className="btn btn-sm btn-primary" rel="noreferrer" target="_blank">Read More</a>
  </div>
  <div className="card-footer text-body-secondary">
    By {author?author:"Unknown"} on {new Date(date).toGMTString()}
  </div>

</div>
      </div>
    )
  
}

export default Newsitem