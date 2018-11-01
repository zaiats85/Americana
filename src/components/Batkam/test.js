import React from 'react';
import ReactDOM from 'react-dom';
import Batkam from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Batkam />, div);
  ReactDOM.unmountComponentAtNode(div);
});
