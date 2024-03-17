import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  //UseState:
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //Update news:
  const updateNews = async () => {
    props.setProgress(0);
    //Write code:
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(80);
    //Set in functional Based:
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  }
  //useEffect: and [] -> ek baar run hi hoga:
  useEffect(() => {
    document.title = `NewsApp - ${capitalizeFirstLetter(props.category)}`;
    updateNews(); 
    // eslint-disable-next-line
  }, [])

  //Fetch more data:
  const fetchMoreData = async () => {
    //setPage will behave asynchronously :
    // setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className='text-center' style={{ margin: "35px 0px" , marginTop: '90px' }}>News App - {capitalizeFirstLetter(props.category)}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: 'hidden' }}>
        <div className="container p-5 d-flex justify-content-around flex-wrap">
          <div className="row">
            {articles.map((element, index) => {
              return <div className="col-sm" key={index}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
//Functional based propTypes:
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
//Export:
export default News;