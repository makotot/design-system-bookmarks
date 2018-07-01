import React from 'react'

const Heading = props => {
  const Tag = `h${props.level}`

  return (
    <Tag className={`c-heading c-heading--${props.level}`}>
      {props.children}
    </Tag>
  )
}

export default Heading
