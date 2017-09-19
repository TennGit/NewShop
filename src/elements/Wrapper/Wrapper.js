import classNames from 'classnames'
import React from 'react'
import './Wrapper.css'


/**
 * The Wrapper component provides a maximum width.
 */
const Wrapper = ({ className, children }) => {
  const fullClassNames = classNames(
    'wrapper',
    className
  )

  return (
    <div className={ fullClassNames }>
      { children }
    </div>
  )
}

export default Wrapper
