import React from 'react'
import Row from '../../elements/Row/Row'
import './Header.css'

const Header = () => (
  <div className="header-wrapper">
    <Row className="header-row">
      <div className="header-top">
        <div className="header-top__wrapper">
          <div className="header-top__logo">Logo</div>
          <div className="header-top__search"><input placeholder="查询" /><button>Go</button></div>
          <div className="header-top__main-navi">Main navigation</div>
        </div>
      </div>
      <div className="header-bottom">
        This will be category navigation bar
      </div>
    </Row>
  </div>
)

export default Header
