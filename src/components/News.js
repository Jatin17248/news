import React, { Component } from 'react'
import Newsitem from "./Newsitem";

export default class News extends Component {   
    constructor()  {
        super();
        this.state = {
        articles: [],
        loading: true,
        page: 1
    }
    
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
      if(this.state.page +1 <= Math.ceil(this.state.totalResults/this.props.pageItem)){
      await this.basic(this.props.country, this.props.pageItem, this.state.page+1, this.props.category);
      this.setState({page: this.state.page + 1});
    }
  }
    prevPage = async() =>{
      if(!(this.state.page-1 === 0)){
      await this.basic(this.props.country, this.props.pageItem, this.state.page-1, this.props.category);
      this.setState({page: this.state.page - 1});
    }
  }

    render() {    
    return (
            
    <div>
      {this.state.loading === true? (<div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
        <div className="spinner-border text-primary" style={{width: '15vh', height: '15vh'}} role="status">
  <span className="visually-hidden ">Loading...</span>
</div></div>):(<><div className="container">
            <h1>NewsMonkey - Top Headlines</h1>
            <h6>{"Showing "+ this.state.page + " out of " + Math.ceil(this.state.totalResults/this.props.pageItem) + " Pages"}</h6>
            <div className="row">
              {this.state.articles.map((element) => {
                return element.title !== null && element.urlToImage !== null ? <div className="col-md-4" key={element.url}>
                  <Newsitem headline={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div> : " ";
              })}

            </div>
          </div><div className="container my-3 d-flex justify-content-between">
              <button disabled={(this.state.page-1 === 0 )} type="button" onClick={this.prevPage} className="btn btn-primary">&larr; Previous</button>
              <button disabled={!(this.state.page < Math.ceil(this.state.totalResults/this.props.pageItem))} type="button" onClick={this.nextPage} className="btn btn-primary">Next &rarr;</button>
                
            </div></>)}
    </div>
      
    )
  }
}



