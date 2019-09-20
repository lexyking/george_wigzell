import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"www.google.com"}>CV</NavLink>
        <NavLink>REELS</NavLink>
        <NavLink>GALLERY</NavLink>
        <NavLink>NEWS</NavLink>
      </nav>
    )
  }
}

export default Nav
