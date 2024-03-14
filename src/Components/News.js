import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1,
    }
  }
  //Async:
  async componentDidMount() {
    console.log("inside component did mount");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ffd32a15b61b4073b3a327daa4412797&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handleNextClick = async() => {
    //Valid:
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
      return;
    }
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ffd32a15b61b4073b3a327daa4412797&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({
      page : this.state.page + 1
    });
  }

  handlePrevClick = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ffd32a15b61b4073b3a327daa4412797&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({
      page : this.state.page - 1
    });
  }

  render() {
    return (
      <div className="container my-4">
        <h2>News App - Top Headlines</h2>
        <div className="row">
          {this.state.articles && this.state.articles.map((element, index) => {
            return <div className="col-md-4" key={index}>
              <NewsItem
                title={element.title && element.title.slice(0, 20)}
                description={element.description && element.description.slice(0, 80)}
                imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="d-flex justify-content-between my-4">
          <button disabled = {this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>
            	&larr; Prev
          </button>
          <button type="button" className="btn btn-secondary" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>

      </div>
    )
  }
}
