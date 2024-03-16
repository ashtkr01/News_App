import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
  }

  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1,
    }
    document.title = `NewsApp - ${this.capitalizeFirstLetter(this.props.category)}`;
  }
  //Update news:
  async updateNews() {
    //Write code:
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ffd32a15b61b4073b3a327daa4412797&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, });
  }
  //Async:
  async componentDidMount() {
    this.setState({
      page: 1
    });
    //Call:
    await this.updateNews();
  }

  handleNextClick = async () => {
    //Valid:
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / (this.props.pageSize))) {
      return;
    }
    this.setState({
      page: this.state.page + 1
    });
    //Call:
    await this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1
    });
    //Call:
    await this.updateNews();
  }

  render() {
    return (
      <div className="container my-4">
        <h1 className='text-center' style={{margin : "35px 0px"}}>News App - {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element, index) => {
            return <div className="col-md-4" key={index}>
              <NewsItem
                title={element.title && element.title.slice(0, 20)}
                description={element.description && element.description.slice(0, 80)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name} />
            </div>
          })}
        </div>
        <div className="d-flex justify-content-between my-4">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>
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
