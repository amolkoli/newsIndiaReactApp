import React, { Component } from 'react'
import NewsItems from './NewsItems'
//import Spinner from './Spinner';
import PropType from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    articles = [];

    static defaultProps = {
        country:'in',
        pageSize:8,
        category:'general',
        totalResults:0,
    }

    static propTypes={
        country:PropType.string,
        pageSize:PropType.number,
        category:PropType.string,
        progress:PropType.number,
    }

    constructor(props){
        //console.log(props);
        super(props);
        this.state = {
            articles: this.articles,
            loading : false,
            page : 1,
            progress : this.props.progress,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsIndia`;
    }

    capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async getNews(){
        this.props.setProgress(20);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}&category=${this.props.category}`;
        let data =  await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(80);
        this.setState({
            page: this.state.page,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading : false
        });
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.getNews();
    }

    handelPreClick = async ()=>{
        this.setState({page: this.state.page - 1});
        this.getNews(this.state.page);
    }

    handelNextClick = async ()=>{
        this.setState({page: this.state.page + 1});
        this.getNews();
    }

    fetchMoreData = async () => {
        this.setState({page : this.state.page +1});
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ed5837e5d3b24c39b61beb0037c55c4c&pageSize=${this.props.pageSize}&page=${this.state.page}&category=${this.props.category}`;
        let data =  await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    };

    render() {
        return (
        <>
            <div className='container my-3'>
            <h1 className='text-center'>Top News - {this.capitalizeFirstLetter(this.props.category)}</h1>
            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<h4>Loading...</h4>} 
            //loader={ <Spinner />} 
            >
                <div className='container'>
                    <div className='row'>
                        {this.state.articles.map((element,key)=>{
                            return <div className='col-md-3' key={key}>
                                <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} url={element.url?element.url:""} author={element.author?element.author:""} publishedAt={element.publishedAt?element.publishedAt:""} source={element.source.name?element.source.name:""}  />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            </div>
        </> 
    )
  }
}
