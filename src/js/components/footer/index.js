import React from 'react'
import Github from 'react-feather/dist/icons/github'

const Footer = () => (
  <footer>
    <small className="o-flex o-flex--center">
      <a
        href="https://github.com/makotot/design-system-bookmarks"
        className="o-flex c-icon-link"
        aria-label="Github repository link"
      >
        <Github />
      </a>
    </small>
  </footer>
)

export default Footer
