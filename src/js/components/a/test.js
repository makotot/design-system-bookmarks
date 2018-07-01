import React from 'react'
import A from './'
import renderer from 'react-test-renderer'

describe('A', () => {
  it('renders collectly', () => {
    const tree = renderer.create(<A href="/" />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
