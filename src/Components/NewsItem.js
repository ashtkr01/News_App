import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title , description , imageUrl , newsUrl } = this.props;
        return (
            <>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl ? imageUrl : "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=1024x1024&w=is&k=20&c=blBt3PJbOSEZF5_zB5YgKYeq9Zx_RMOLntX_nI3lliQ="} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target = "_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </>
        )
    }
}
