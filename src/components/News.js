import React, {useEffect, useState} from 'react';
import Newsitem from "./Newsitem";
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {   
  const [articles, setArticles]= useState([]);
  const [loading, setLoading]= useState(true);
  const [page, setPage]= useState(1);
  const [totalResults, setTotalResults]= useState(10);
  
   document.title = `NewsMonkey - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;


    useEffect(()=>{
      basic(props.country, props.pageItem,  page, props.category);
    }, [])
    
   const basic = async(bcountry, bpageItem, bpage, bcategory) =>{
    props.setProgress(19);
    setLoading(true);
    props.setProgress(27);
    let url = `https://newsapi.org/v2/top-headlines?country=${bcountry}&category=${bcategory}&apiKey=8a6e8831f15a4bac8340eda5e2c9cded&language=en&pageSize=${bpageItem}&page=${bpage}`;
    let data = await fetch(url);
    props.setProgress(65);
    let pdata = await data.json();
    props.setProgress(75);
    setArticles(pdata.articles);
    setLoading(false);
    setTotalResults(pdata.totalResults);
    props.setProgress(100);
    }

    const nextPage = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8a6e8831f15a4bac8340eda5e2c9cded&language=en&pageSize=${props.pageItem}&page=${ page+1}`;
    let data = await fetch(url);
    let pdata = await data.json();
    setArticles(articles.concat(pdata.articles));
    setPage(page+1);
    setTotalResults(pdata.totalResults);
    }

    
    return (<>
    
      { loading === true? (<div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
        <div className="spinner-border text-primary" style={{width: '15vh', height: '15vh'}} role="status">
  <span className="visually-hidden ">Loading...</span>
</div></div>):
<div className="container">    
  <InfiniteScroll
  dataLength={ articles.length} //This is important field to render the next data
  next={nextPage}
  hasMore={ articles.length !==  totalResults}
  loader={<div style={{ textAlign: 'center' }} ><div className="spinner-border text-primary" style={{width: '15vh', height: '15vh'}} role="status"></div></div>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }>

            <h1>NewsMonkey - {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
            <h6>{"Showing "+ totalResults + " News Articles"}</h6>
            <div className="row">
              { articles.map((element) => {
                return element.title !== null && element.urlToImage !== null ? <div className="col-md-4" key={element.url}>
                  <Newsitem headline={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                </div> : " ";
              })}

        </div>  
            </InfiniteScroll>    
            </div>}
</>
      
    )
  
}

export default News



