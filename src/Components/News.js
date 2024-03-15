import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize : 8,
    category : "general"
  }

  PropTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ffd32a15b61b4073b3a327daa4412797&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading : false, });
  }

  handleNextClick = async() => {
    //Valid:
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/(this.props.pageSize))){
      return;
    }
    this.setState({loading : true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ffd32a15b61b4073b3a327daa4412797&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading : false,
      page : this.state.page + 1
    });
  }

  handlePrevClick = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ffd32a15b61b4073b3a327daa4412797&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      loading : false,
      articles: parsedData.articles
    });
  }

  render() {
    return (
      <div className="container my-4">
        <h1 className='text-center'>News App - Top Headlines</h1>
        { this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element, index) => {
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
