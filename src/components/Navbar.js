import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsIndia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link Active" aria-current="page" href="/business">Business</a></li>
                    <li className="nav-item"><a className="nav-link Active" aria-current="page" href="/entertainment">Entertainment</a></li>
                    <li className="nav-item"><a className="nav-link Active" aria-current="page" href="/general">General</a></li>
                    <li className="nav-item"><a className="nav-link Active" aria-current="page" href="/health">Health</a></li>
                    <li className="nav-item"><a className="nav-link Active" aria-current="page" href="/science">Science</a></li>
                    <li className="nav-item"><a className="nav-link Active" aria-current="page" href="/technology">Technology</a></li>
                    <li className="nav-item"><a className="nav-link Active" aria-current="page" href="/sports">Sports</a></li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
