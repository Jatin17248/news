import React, { Component } from 'react'
import Newsitem from "./Newsitem";
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {   
    constructor(props)  {
        super(props);
        this.state = {
        articles: [],
        loading: true,
        page: 1, totalResults: 10
    }
  document.title = `NewsMonkey - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
}
    async componentDidMount(){
        await this.basic(this.props.country, this.props.pageItem, this.state.page, this.props.category);
    }
   basic = async(bcountry, bpageItem, bpage, bcategory) =>{
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${bcountry}&category=${bcategory}&apiKey=f42e54b9f6c749809d3460ed330eab5b&language=en&pageSize=${bpageItem}&page=${bpage}`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({ articles: pdata.articles, loading: false, totalResults : pdata.totalResults});
    }

    nextPage = async() =>{
    
      console.log(this.state.articles.length !== this.state.totalResults, this.state.articles.length, this.state.totalResults)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f42e54b9f6c749809d3460ed330eab5b&language=en&pageSize=${this.props.pageItem}&page=${this.state.page+1}`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({ articles: this.state.articles.concat(pdata.articles), totalResults : pdata.totalResults , page: this.state.page+1});
    console.log(this.state.articles.length !== this.state.totalResults, this.state.articles.length, this.state.totalResults)
    
    }
    prevPage = async() =>{
      if(!(this.state.page-1 === 0)){
      await this.basic(this.props.country, this.props.pageItem, this.state.page-1, this.props.category);
      this.setState({page: this.state.page - 1});
    }
  }

    render() {    
    return (<>
      {this.state.loading === true? (<div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
        <div className="spinner-border text-primary" style={{width: '15vh', height: '15vh'}} role="status">
  <span className="visually-hidden ">Loading...</span>
</div></div>):
<div className="container">    
  <InfiniteScroll
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.nextPage}
  hasMore={this.state.articles.length !== this.state.totalResults}
  loader={<div style={{ textAlign: 'center' }} ><div className="spinner-border text-primary" style={{width: '15vh', height: '15vh'}} role="status"></div></div>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }>

            <h1>NewsMonkey - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
            <h6>{"Showing "+ this.state.page + " out of " + Math.ceil(this.state.totalResults/this.props.pageItem) + " Pages"}</h6>
            <div className="row">
              {this.state.articles.map((element) => {
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
}



