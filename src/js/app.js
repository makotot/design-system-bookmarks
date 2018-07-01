import React from 'react'
import { render } from 'react-dom'
import Wrapper from './components/wrapper'
import Grid from './components/grid'
import Heading from './components/heading'
import Header from './components/header'
import Footer from './components/footer'
import Blockquote from './components/blockquote'
import A from './components/a'
import { List, ListItem } from './components/list'
import Section from './components/section'
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

const components = {
  h2: props => <Heading level={2} {...props} />,
  h3: props => <Heading level={3} {...props} />,
  blockquote: Blockquote,
  a: A,
  ul: List,
  li: ListItem
}

const App = () => (
  <Wrapper>
    <Grid>
      <Header />
      <div>
        <Section>
          <What components={components} />
        </Section>
        <Section>
          <DesignSystems components={components} />
        </Section>
        <Section>
          <DesignTokens components={components} />
        </Section>
        <Section>
          <Tools components={components} />
        </Section>
        <Section>
          <Articles components={components} />
        </Section>
        <Section>
          <Slides components={components} />
        </Section>
        <Section>
          <Communities components={components} />
        </Section>
        <Section>
          <Others components={components} />
        </Section>
        <Section>
          <Resources components={components} />
        </Section>
      </div>
      <Footer />
    </Grid>
  </Wrapper>
)

render(<App />, document.getElementById('root'))
