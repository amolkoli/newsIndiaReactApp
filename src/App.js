
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY_NEWS

  state = {
    progress:10,
    pageSize:6
  }

  setProgress = (value) =>{
    this.setState({progress:value})
  }

  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <div><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.state.pageSize} country='in' category='general'/></div>,
      },
      {
        path: "/business",
        element: <div><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.state.pageSize} country='in' category='business'/></div>,
      },
      {
        path: "/entertainment",
        element: <div><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.state.pageSize} country='in' category='entertainment'/></div>,
      },
      {
        path: "/health",
        element: <div><News apiKey={this.apiKey} setProgress={this.setProgress}  pageSize={this.state.pageSize} country='in' category='health'/></div>,
      },
      {
        path: "/science",
        element: <div><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.state.pageSize} country='in' category='science'/></div>,
      },
      {
        path: "/technology",
        element: <div><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.state.pageSize} country='in' category='technology'/></div>,
      },
      {
        path: "/general",
        element: <div><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.state.pageSize} country='in' category='general'/></div>,
      },
      {
        path: "/sports",
        element: <div><News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.state.pageSize} country='in' category='sports'/></div>,
      },
    ]);

    return (
      <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          
          <RouterProvider router={router} />
          
          {/*<RouterProvider router={router} />
          <Route path="/" ><News pageSize={20} country='in' category='general'/></Route>
          <Route path="/business" ><News pageSize={20} country='in' category='business'/></Route>
          <Route path="/entertainment" ><News pageSize={20} country='in' category='entertainment'/></Route>
          <Route path="/health" ><News pageSize={20} country='in' category='health'/></Route>
          <Route path="/science" ><News pageSize={20} country='in' category='science'/></Route>
          <Route path="/sports" ><News pageSize={20} country='in' category='sports'/></Route>
          <Route path="/technology" ><News pageSize={20} country='in' category='technology'/></Route>
         */}
        
      </div>
    )
  }
}
