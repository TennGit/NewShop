
import classNames from 'classnames'
import React from 'react'
import './Panel.css'

/**
 * The Panel component should be used to create the white boxes around components.
 */

const Panel = ({ name, className, children }) => {
  const fullClassName = classNames(
    'panel',
    name && `panel__${ name }`,
    className
  )
  return (
    <div className={ fullClassName }>
      { children }
    </div>
  )

}

export default Panel
