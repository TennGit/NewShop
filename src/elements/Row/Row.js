// @flow

import classNames from 'classnames'
import React from 'react'
import './Row.scss'

/**
 * The Row component represents a single row in a page.
 */

const Row = ({ name, className, children }) => {
  const fullClassName = classNames(
    'row',
    name && `row__${ name }`,
    className
  )
  return (
    <div className={ fullClassName }>
      { children }
    </div>
  )
}

export default Row
