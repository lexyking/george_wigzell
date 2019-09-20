import React, { Component } from 'react';
import { Nav } from '../index'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <section className="header_info1">
          <h1>George Wigzell</h1>
          <Nav />
        </section>
        <section className="header_info2">
          <h1>actor</h1>
          <article className="header_info2_article">
            <p>Agent: Rosebery Management || <a href="admin@roseberymanagement.com">admin@roseberymanagement.com</a> || 02 07 68 40 187</p>
            <p>Personal: <a>georgewigzell@hotmail.com || twitter || Instagram</a></p>
          </article>
        </section>
      </header>
    )
  }
}

export default Header
