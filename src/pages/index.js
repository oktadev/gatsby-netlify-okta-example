import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <>
      Hello world!
      <p><Link to="/blog">View Blog</Link></p>
      <p><Link to="/account">My Account</Link></p>
    </>)
}