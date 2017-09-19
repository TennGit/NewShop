import React from 'react'
import './Page.css'

/** Page component to be used as wrapper for main page body, most important task to keep margin-top to leave space for sticky header */
const Page = ({ children }) => (
  <div className="page">
    { children }
  </div>
)

export default Page
