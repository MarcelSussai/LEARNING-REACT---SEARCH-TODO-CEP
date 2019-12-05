import React from 'react'
import './style.css';

const FilterLink = ({ action, activeFilter, children, onClick }) => {

  const span = { tag: 'span', class: 'span-filter' }
  const button = { tag: 'button', class: 'btn-filter', onClick }
  const Component = action === activeFilter ? span : button

  return (
      <Component.tag
        className={ Component.class }
        onClick={ Component.onClick }
      >
        { children }
      </Component.tag>
    )
}

export default FilterLink
