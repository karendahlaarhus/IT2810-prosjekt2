import React from 'react';
import App from './App';
import Gallery from './components/Gallery';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})


