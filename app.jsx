import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './components/popup.jsx';

let target = document.getElementById('popup');

ReactDOM.render(
  <Popup show={!!target.dataset.show} />,
  target
);
