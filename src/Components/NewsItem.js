import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date , source } = props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl ? imageUrl : "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ="} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '88%', zIndex: '2'}}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
}
//Export:
export default NewsItem;