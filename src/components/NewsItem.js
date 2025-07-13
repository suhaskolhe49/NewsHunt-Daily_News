import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl,author,publishedAt,source}= this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}> {source}</span>
          <img src={imageUrl?imageUrl:imageUrl="https://cdn.vox-cdn.com/thumbor/HPkK81oRrBlHDXskde9J_677dbU=/0x0:1220x814/1200x628/filters:focal(610x407:611x408)/cdn.vox-cdn.com/uploads/chorus_asset/file/25781157/raspberry_pi_1.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} On {new Date(publishedAt).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
