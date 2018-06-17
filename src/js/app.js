import React from 'react'
import { render } from 'react-dom'
import Github from 'react-feather/dist/icons/github'
import What from '../docs/what.md'
import DesignSystems from '../docs/design-systems.md'
import DesignTokens from '../docs/design-tokens.md'
import Tools from '../docs/tools.md'
import Resources from '../docs/resources.md'
import Communities from '../docs/communities.md'
import Articles from '../docs/articles.md'
import Slides from '../docs/slides.md'
import Others from '../docs/others.md'

import '../scss/app.scss'

const Wrapper = (props) => (
  <div className="o-wrapper">{ props.children }</div>
)

const Grid = (props) => (
  <div className="o-grid">{ props.children }</div>
)

const Heading = (props) => {
  const Tag = `h${ props.level }`

  return (
    <Tag className={ `c-heading c-heading--${ props.level }` }>{ props.children }</Tag>
  )
}

const Header = () => (
  <header>
    <Heading level={ 1 }>Design System <span className="c-heading__sub">bookmarks</span></Heading>
  </header>
)

const Footer = () => (
  <footer>
    <small className="o-flex o-flex--center"><a href="" className="c-icon-link"><Github /></a></small>
  </footer>
)

const Blockquote = (props) => (
  <blockquote className="c-quote" { ...props } />
)

const A = (props) => (
  <a className="c-anchor" { ...props } />
)

const List = (props) => (
  <ul className="o-list" { ...props } />
)

const ListItem = (props) => (
  <li className="o-list-item" { ...props } />
)

const Section = (props) => (
  <div className="o-section">
    <section>
      { props.children }
    </section>
  </div>
)

const components = {
  h2: (props) => (<Heading level={2} {...props} />),
  h3: (props) => (<Heading level={3} {...props} />),
  blockquote: Blockquote,
  a: A,
  ul: List,
  li: ListItem,
}

const App = () => (
  <Wrapper>
    <Grid>
      <Header />
      <div>
        <Section>
          <What components={ components } />
        </Section>
        <Section>
          <DesignSystems components={ components } />
        </Section>
        <Section>
          <DesignTokens components={ components } />
        </Section>
        <Section>
          <Tools components={ components } />
        </Section>
        <Section>
          <Articles components={ components } />
        </Section>
        <Section>
          <Slides components={ components } />
        </Section>
        <Section>
          <Communities components={ components } />
        </Section>
        <Section>
          <Others components={ components } />
        </Section>
        <Section>
          <Resources components={ components } />
        </Section>
      </div>
      <Footer />
    </Grid>
  </Wrapper>
)

render(<App />, document.getElementById('root'))