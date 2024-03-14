import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    }
  }
  //Async:
  async componentDidMount(){
    console.log("inside component did mount");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ffd32a15b61b4073b3a327daa4412797";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles});
  }
  render() {
    return (
      <div className="container my-4">
        <h2>News App - Top Headlines</h2>
        <div className="row">
          {this.state.articles && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem  
               title={element.title && element.title.slice(0 , 20)} 
               description={element.description && element.description.slice(0 , 80)} 
               imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>
          })}
          {/* <div className="col-md-4">
                        <NewsItem title="Rahul" description="Youth" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/1852D/production/_132892699_arielhenry.png"
                        newsUrl = "Hello"/>
                    </div> */}
        </div>
      </div>
    )
  }
}
